import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  business: {
    name: "נועה הלוי",
    type: "אתרים עם אופי",
    description: "אתרים אישיים ומדויקים לעסקים שרוצים להציג את עצמם בצורה שהלקוחות זוכרים.",
    logo: "/logo-noa.png",
  },
  contact: { phone: "054-854-0737", email: "noa8540737@gmail.com", address: "" },
  contactMessages: {
    emailSubject: "בואי נדבר על האתר שלי",
    emailBody: "היי נועה, הגעתי דרך האתר שלך ואשמח לספר לך קצת על העסק שלי.",
  },
  social: { instagram: "", facebook: "", linkedin: "", youtube: "" },
  cta: { label: "בואי נדבר", href: "/#contact", enabled: true },
};
