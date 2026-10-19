import { BrandCursor } from "@/components/ui/BrandCursor";
import { contactContent as content } from "@/data/contact";

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.5 6.5h17v11h-17z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.2 3.8h3l1.3 4.1-2 1.8a15.5 15.5 0 0 0 4.8 4.8l1.8-2 4.1 1.3v3c0 1.1-.9 2-2 2A15.2 15.2 0 0 1 5.2 5.8c0-1.1.9-2 2-2Z" />
    </svg>
  );
}

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
              <span>
                <span className="contact-panel__emphasis">{content.titleLines[1]}</span>
              </span>
            </h2>

            <div className="contact-panel__description">
              {content.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="contact-panel__secondary">{content.secondaryLine}</p>
          </div>

          <div className="contact-panel__methods">
            <div className="contact-panel__decoration" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <a className="contact-card contact-card--email" href={content.email.href}>
              <span className="contact-card__icon">
                <EmailIcon />
              </span>
              <span className="contact-card__text">
                <span className="contact-card__title">{content.email.title}</span>
                <span className="contact-card__value" dir="ltr">
                  {content.email.value}
                </span>
              </span>
            </a>

            <a className="contact-card contact-card--phone" href={content.phone.href}>
              <span className="contact-card__icon">
                <PhoneIcon />
              </span>
              <span className="contact-card__text">
                <span className="contact-card__title">{content.phone.title}</span>
                <span className="contact-card__value" dir="ltr">
                  {content.phone.value}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
