import { siteConfig } from "@/config/site.config";
import type { ContactContent } from "@/types/contact";

export const contactContent: ContactContent = {
  eyebrow: "מתחילים בשיחה",
  titleLines: ["בואו ניתן לעסק שלכם", "מקום ברשת."],
  description: [
    "יש לכם רעיון לאתר? רוצים להבין מאיפה מתחילים?",
    "נדבר על העסק שלכם ועל הדרך להתקדם.",
  ],
  secondaryLine: "אפשר להתחיל במייל או בשיחת טלפון.",
  email: {
    title: "בואו נדבר במייל",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  phone: {
    title: "מעדיפים להתקשר?",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\D/g, "")}`,
  },
};
