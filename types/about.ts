export interface AboutContent {
  eyebrow?: string;
  title: string;
  description: string;
  secondaryDescription?: string;
  image?: {
    src: string;
    alt: string;
  };
}