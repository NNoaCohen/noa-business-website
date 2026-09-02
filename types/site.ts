export interface SiteConfig {
  business: {
    name: string;
    type: string;
    description: string;
    logo?: string;
  };

  contact: {
    phone: string;
    email: string;
    whatsapp: string;
    address?: string;
  };

  contactMessages: {
    whatsapp: string;
    emailSubject: string;
    emailBody: string;
  };

  social: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };

  cta: {
    label: string;
    href: string;
    enabled: boolean;
  };
}