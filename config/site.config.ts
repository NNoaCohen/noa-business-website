import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
    business: {
        name: "שם העסק",
        type: "סוג העסק",
        description: "תיאור קצר של העסק",
        logo: "",
    },

    contact: {
        phone: "",
        email: "",
        whatsapp: "",
        address: "",
    },

    social: {
        instagram: "",
        facebook: "",
        linkedin: "",
        youtube: "",
    },
    cta: {
        label: "צור קשר",
        href: "/#contact",
        enabled: true,
    },
};