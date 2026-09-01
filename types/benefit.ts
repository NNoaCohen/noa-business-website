export interface BenefitItem {
  title: string;
  description: string;
}

export interface BenefitsContent {
  eyebrow?: string;
  title: string;
  description?: string;
  items: BenefitItem[];
}