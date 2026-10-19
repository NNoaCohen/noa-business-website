export interface ServiceItem {
  label?: string;
  title: string;
  description: string;
  href?: string;
}

export interface ServicesContent {
  eyebrow: string;
  title: [string, string];
  description: string;
  items: ServiceItem[];
  summary: string;
}
