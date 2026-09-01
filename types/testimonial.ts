export interface TestimonialItem {
  name: string;
  role?: string;
  quote: string;
}

export interface TestimonialsContent {
  eyebrow?: string;
  title: string;
  description?: string;
  items: TestimonialItem[];
}