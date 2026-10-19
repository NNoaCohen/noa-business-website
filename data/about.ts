import type { AboutContent } from "@/types/about";

export const aboutContent: AboutContent = {
  eyebrow: "נעים להכיר",
  titleLines: [
    { text: "אני נועה." },
    { text: "אצלי, האתר שלכם" },
    { text: "מקבל ", emphasis: "יחס אישי", suffix: "." },
  ],
  paragraphs: [
    "אני מתכננת, מעצבת ומפתחת אתרים לעסקים, מהרעיון הראשון ועד ההשקה.",
    "אתם עובדים ישירות מולי, עם הקשבה למה שחשוב לכם ועדכונים לאורך הדרך.",
    "המטרה שלי: אתר שמרגיש שלכם ונוח ללקוחות שלכם.",
  ],
  values: [
    "כתובת אחת לכל התהליך",
    "עיצוב שמותאם לעסק",
    "ליווי אישי עד ההשקה",
  ],
  action: {
    label: "בואו נכיר",
    href: "#contact",
  },
  illustration: {
    src: "/images/about/about-illustration.png",
    alt: "",
    width: 1536,
    height: 1024,
  },
};
