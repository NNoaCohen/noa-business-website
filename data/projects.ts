import type { Project } from "@/types/project";

const projectImageDirectory = "/images/projects/ivriyot";

export const projects: Project[] = [
  {
    id: "ivriyot",
    featured: true,
    name: "עבריות",
    description:
      "אתר תדמית עם עיצוב אישי, מבנה תוכן ברור והתאמה למחשב ולנייד.",
    websiteUrl: "https://ivriyot-website.vercel.app/",
    desktopImage: {
      src: `${projectImageDirectory}/desktop-hero.png.jpg`,
      alt: "צילום מסך של עמוד הבית באתר עבריות במחשב",
      label: "תצוגת מחשב",
      width: 1899,
      height: 840,
    },
    mobileImage: {
      src: `${projectImageDirectory}/mobile-hero.png`,
      alt: "צילום מסך של עמוד הבית באתר עבריות בנייד",
      label: "תצוגת מובייל",
      width: 397,
      height: 697,
    },
    gallery: [
      {
        src: `${projectImageDirectory}/desktop-details.png`,
        alt: "צילום מסך של אזור הפרטים באתר עבריות",
        label: "פרטי האתר",
        width: 1897,
        height: 840,
      },
      {
        src: `${projectImageDirectory}/desktop-services.png`,
        alt: "צילום מסך של אזור השירותים באתר עבריות",
        label: "השירותים",
        width: 1920,
        height: 826,
      },
      {
        src: `${projectImageDirectory}/desktop-newsletter.png`,
        alt: "צילום מסך של אזור ההרשמה לעדכונים באתר עבריות",
        label: "הרשמה לעדכונים",
        width: 1920,
        height: 837,
      },
      {
        src: `${projectImageDirectory}/desktop-testimonials.png`,
        alt: "צילום מסך של אזור ההמלצות באתר עבריות",
        label: "אזור ההמלצות באתר",
        width: 1915,
        height: 837,
      },
    ],
    testimonial: {
      quote:
        "נועה ליוותה אותי לאורך בניית האתר בסבלנות ובהקשבה, עם תשומת לב לפרטים ולצרכים של העסק. התוצאה נעימה, ברורה ומדויקת לאופי שרציתי להעביר.",
      author: "בת שבע כהן",
      organization: "עבריות",
    },
  },
];
