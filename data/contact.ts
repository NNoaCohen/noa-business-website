import { siteConfig } from "@/config/site.config";
import type { ContactContent } from "@/types/contact";

export const contactContent: ContactContent = {
  eyebrow: "מתחילים בשיחה",
  titleLines: ["בואו ניתן לעסק שלכם", "מקום ברשת."],
  description: ["אפשר לפנות אליי ישירות,", "או להשאיר פרטים ואחזור אליכם."],
  email: {
    title: "שלחו לי מייל",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  phone: {
    title: "בואו נדבר בטלפון",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\D/g, "")}`,
  },
  form: {
    title: "מעדיפים שאחזור אליכם?",
    subtitle: "כמה פרטים, ומתחילים להכיר.",
    fields: {
      name: "שם מלא *",
      business: "שם העסק (לא חובה)",
      email: "מייל *",
      phone: "טלפון *",
    },
    helper: "מלאו מייל וטלפון כדי שאוכל לחזור אליכם.",
    submit: "אשמח שתחזרי אליי",
    submitting: "שולחים…",
    success: "תודה, הפרטים נשלחו בהצלחה. אחזור אליכם בהקדם.",
    error: "השליחה לא הצליחה. אפשר לנסות שוב או לפנות אליי במייל או בטלפון.",
  },
};
