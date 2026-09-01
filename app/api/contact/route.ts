import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/contactSchema";
import { siteConfig } from "@/config/site.config";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const result = contactSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { message: "הנתונים שנשלחו אינם תקינים." },
                { status: 400 }
            );
        }

        const { name, phone, email, message } = result.data;

        const { error } = await resend.emails.send({
            from: "Website Contact <onboarding@resend.dev>",
            to: [siteConfig.contact.email],
            replyTo: email,
            subject: `פנייה חדשה מהאתר - ${name}`,
            html: `
        <div dir="rtl" style="font-family: Arial, sans-serif;">
          <h2>פנייה חדשה מהאתר</h2>

          <p><strong>שם:</strong> ${name}</p>
          <p><strong>טלפון:</strong> ${phone}</p>
          <p><strong>אימייל:</strong> ${email}</p>

          <p><strong>הודעה:</strong></p>
          <p>${message}</p>
        </div>
      `,
        });

        if (error) {
            console.error("Resend error:", error);

            return NextResponse.json(
                { message: "אירעה שגיאה בשליחת המייל." },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "הפרטים נשלחו בהצלחה." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);

        return NextResponse.json(
            { message: "אירעה שגיאה בשליחת הפרטים." },
            { status: 500 }
        );
    }
}