import { Mail, Phone } from "lucide-react";

import { ContactForm } from "@/components/forms/ContactForm";
import { BrandCursor } from "@/components/ui/BrandCursor";
import { contactContent as content } from "@/data/contact";

export function ContactSection() {
  return (
    <section className="content-section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="contact-panel">
          <div className="contact-panel__copy">
            <div className="eyebrow contact-panel__eyebrow">
              <BrandCursor />
              <span className="eyebrow__text">{content.eyebrow}</span>
            </div>

            <h2 className="contact-panel__title" id="contact-title">
              <span>{content.titleLines[0]}</span>
              <span className="contact-panel__emphasis">{content.titleLines[1]}</span>
            </h2>

            <div className="contact-panel__description">
              {content.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="contact-panel__methods">
              <a className="contact-method" href={content.email.href}>
                <Mail size={24} strokeWidth={1.8} aria-hidden="true" />
                <span className="contact-method__text">
                  <span className="contact-method__title">{content.email.title}</span>
                  <span className="contact-method__value" dir="ltr">
                    {content.email.value}
                  </span>
                </span>
              </a>

              <a className="contact-method" href={content.phone.href}>
                <Phone size={24} strokeWidth={1.8} aria-hidden="true" />
                <span className="contact-method__text">
                  <span className="contact-method__title">{content.phone.title}</span>
                  <span className="contact-method__value" dir="ltr">
                    {content.phone.value}
                  </span>
                </span>
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
