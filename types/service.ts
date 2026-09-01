export interface ServiceItem {
  title: string;
  description: string;
  href?: string;
}

export interface ServicesContent {
  eyebrow?: string;
  title: string;
  description?: string;
  items: ServiceItem[];
}
