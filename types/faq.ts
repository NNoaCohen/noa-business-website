export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  eyebrow?: string;
  title: string;
  description?: string;
  items: FAQItem[];
}