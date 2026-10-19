import { siteConfig } from "@/config/site.config";
import { contactLinks } from "@/lib/contactLinks";

export function Footer() {
  return (
    <footer>
      <div className="footer-row wrap">
        <span className="footer-brand">{siteConfig.business.name} · אתרים עם אופי</span>
        <span>תכנון · עיצוב · פיתוח</span>
        <span className="footer-contacts">
          <a href={contactLinks.email} dir="ltr">
            {siteConfig.contact.email}
          </a>
          <a href={contactLinks.phone} dir="ltr">
            {siteConfig.contact.phone}
          </a>
        </span>
        <span>© {new Date().getFullYear()} כל הזכויות שמורות</span>
      </div>
    </footer>
  );
}
