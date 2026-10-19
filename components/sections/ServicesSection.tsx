import { BrandCursor } from "@/components/ui/BrandCursor";
import { servicesContent as content } from "@/data/services";

export function ServicesSection() {
  return (
    <section className="content-section services-section" id="services">
      <div className="wrap">
        <div className="services-intro">
          <div className="services-heading">
            <div className="eyebrow">
              <BrandCursor />
              <span className="eyebrow__text">{content.eyebrow}</span>
            </div>
            <h2 className="services-title">
              {content.title.map((line) => (
                <span className="services-title__line" key={line}>
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <p className="services-description">{content.description}</p>
        </div>

        <div className="services-items">
          {content.items.map((item) => (
            <article className="services-item" key={item.label}>
              <span className="services-item__label">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <p className="services-summary">{content.summary}</p>
      </div>
    </section>
  );
}
