import { siteConfig } from "@/config/site.config";

const whatsappNumber = siteConfig.contact.whatsapp.replace(/\D/g, "");

const internationalWhatsappNumber = whatsappNumber.startsWith("0")
  ? `972${whatsappNumber.slice(1)}`
  : whatsappNumber;

export const contactLinks = {
  phone: `tel:${siteConfig.contact.phone}`,

  whatsapp: `https://wa.me/${internationalWhatsappNumber}?text=${encodeURIComponent(
    siteConfig.contactMessages.whatsapp
  )}`,

  email: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    siteConfig.contact.email
  )}&su=${encodeURIComponent(
    siteConfig.contactMessages.emailSubject
  )}&body=${encodeURIComponent(
    siteConfig.contactMessages.emailBody
  )}`,
};