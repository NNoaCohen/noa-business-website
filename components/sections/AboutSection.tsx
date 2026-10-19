import Image from "next/image";
import { BrandCursor } from "@/components/ui/BrandCursor";
import { aboutContent } from "@/data/about";

export function AboutSection() {
  return (
    <section
      className="content-section about about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="wrap about-section__grid">
        <div className="about-section__copy">
          <div className="eyebrow about-section__eyebrow">
            <BrandCursor />
            <span className="eyebrow__text">{aboutContent.eyebrow}</span>
          </div>

          <h2 className="about-section__title" id="about-title">
            {aboutContent.titleLines.map((line, index) => (
              <span key={index}>
                {line.text}
                {line.emphasis && (
                  <span className="about-section__emphasis">{line.emphasis}</span>
                )}
                {line.suffix}
              </span>
            ))}
          </h2>

          <div className="about-section__paragraphs">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="about-section__values">
            {aboutContent.values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>

          <a className="button about-section__cta" href={aboutContent.action.href}>
            {aboutContent.action.label}
          </a>
        </div>

        <div className="about-section__visual">
          <Image
            src={aboutContent.illustration.src}
            alt={aboutContent.illustration.alt}
            width={aboutContent.illustration.width}
            height={aboutContent.illustration.height}
            sizes="(max-width: 820px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
