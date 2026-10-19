export interface AboutContent {
  eyebrow: string;
  titleLines: {
    text: string;
    emphasis?: string;
    suffix?: string;
  }[];
  paragraphs: string[];
  values: string[];
  action: {
    label: string;
    href: string;
  };
  illustration: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}
