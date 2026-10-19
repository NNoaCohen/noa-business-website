import { siteConfig } from "@/config/site.config";

export const contactLinks = {
  phone: `tel:${siteConfig.contact.phone}`,
  email: `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    siteConfig.contactMessages.emailSubject
  )}&body=${encodeURIComponent(siteConfig.contactMessages.emailBody)}`,
};