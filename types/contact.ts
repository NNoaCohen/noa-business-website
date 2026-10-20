export interface ContactMethod {
  title: string;
  value: string;
  href: string;
}

export interface ContactContent {
  eyebrow: string;
  titleLines: [string, string];
  description: [string, string];
  email: ContactMethod;
  phone: ContactMethod;
  form: {
    title: string;
    subtitle: string;
    fields: {
      name: string;
      business: string;
      email: string;
      phone: string;
    };
    helper: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
  };
}
