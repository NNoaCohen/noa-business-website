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
    address?: string;
  };

  contactMessages: {
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