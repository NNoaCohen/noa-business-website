import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/contactSchema";
import { siteConfig } from "@/config/site.config";

const requestWindowMs = 60_000;
const maxRequestsPerWindow = 10;
const requestsByIp = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(request: Request) {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = request.headers.get("x-real-ip") || forwardedFor?.split(",")[0]?.trim() || "unknown";
    const now = Date.now();
    const current = requestsByIp.get(ip);

    if (!current || current.expiresAt <= now) {
        if (requestsByIp.size >= 5_000) {
            const oldestIp = requestsByIp.keys().next().value;
            if (oldestIp) requestsByIp.delete(oldestIp);
        }
        requestsByIp.set(ip, { count: 1, expiresAt: now + requestWindowMs });
        return false;
    }

    if (current.count >= maxRequestsPerWindow) {
        return true;
    }

    current.count += 1;
    return false;
}

export async function POST(request: Request) {
    if (isRateLimited(request)) {
        return NextResponse.json(
            { message: "נשלחו יותר מדי פניות בזמן קצר. אפשר לנסות שוב בעוד דקה." },
            { status: 429, headers: { "Retry-After": "60" } }
        );
    }

    if (!request.headers.get("content-type")?.includes("application/json")) {
        return NextResponse.json({ message: "פורמט הבקשה אינו תקין." }, { status: 415 });
    }

    let body: unknown;
    try {
        const rawBody = await request.text();
        if (new TextEncoder().encode(rawBody).byteLength > 10_000) {
            return NextResponse.json({ message: "הבקשה גדולה מדי." }, { status: 413 });
        }
        body = JSON.parse(rawBody);
    } catch {
        return NextResponse.json({ message: "לא ניתן לקרוא את פרטי הטופס." }, { status: 400 });
    }

    const result = contactSchema.safeParse(body);
    if (!result.success) {
        return NextResponse.json(
            { message: "הנתונים שנשלחו אינם תקינים.", fieldErrors: result.error.flatten().fieldErrors },
            { status: 400 }
        );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    if (!apiKey || !from) {
        return NextResponse.json(
            { message: "שירות המייל אינו מוגדר בשרת." },
            { status: 503 }
        );
    }

    const { name, business, phone, email } = result.data;

    try {
        const resend = new Resend(apiKey);
        const { error } = await resend.emails.send({
            from,
            to: [siteConfig.contact.email],
            replyTo: email,
            subject: "פנייה חדשה מאתר נועה הלוי",
            text: [
                "פנייה חדשה מהאתר",
                `שם מלא: ${name}`,
                ...(business ? [`שם העסק: ${business}`] : []),
                `מייל: ${email}`,
                `טלפון: ${phone}`,
            ].join("\n"),
        });

        if (error) {
            console.error("Resend did not accept the contact email", {
                name: error.name,
                statusCode: error.statusCode,
            });
            return NextResponse.json(
                { message: "אירעה שגיאה בשליחת המייל." },
                { status: 502 }
            );
        }

        return NextResponse.json({ message: "הפרטים נשלחו בהצלחה." }, { status: 200 });
    } catch (error) {
        console.error("Contact email request failed", {
            name: error instanceof Error ? error.name : "UnknownError",
        });
        return NextResponse.json(
            { message: "אירעה שגיאה בשליחת הפרטים." },
            { status: 502 }
        );
    }
}