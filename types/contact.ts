export interface ContactMethod {
  title: string;
  value: string;
  href: string;
}

export interface ContactContent {
  eyebrow: string;
  titleLines: [string, string];
  description: [string, string];
  secondaryLine: string;
  email: ContactMethod;
  phone: ContactMethod;
}
