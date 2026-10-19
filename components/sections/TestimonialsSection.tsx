import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { testimonialsContent } from "@/data/testimonials";
import { contactLinks } from "@/lib/contactLinks";

export function TestimonialsSection() {
  const project = testimonialsContent.items[0];

  return (
    <Section id="project" className="project-section">
      <Container>
        <div className="mx-auto mb-9 max-w-2xl text-center">
          <span className="section-eyebrow">עבודות נבחרות</span>
          <h2 className="mt-4">{testimonialsContent.title}</h2>
          <p className="mt-4 text-muted-foreground">{testimonialsContent.description}</p>
        </div>

        <article className="project-card">
          <div className="project-copy">
            <span className="section-eyebrow">אתר לעסק</span>
            <h3 className="mt-4 text-3xl font-semibold">{project.name}</h3>
            <p className="mt-4 text-muted-foreground">{project.quote}</p>
            <Link href={contactLinks.email} className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">
              רוצה אתר משלך? <ArrowUpLeft size={17} />
            </Link>
          </div>
          <div className="project-preview" aria-label={`הדמיה גרפית של אתר ${project.name}`}>
            <div className="project-window">
              <div className="project-window-top" />
              <div className="project-window-content">
                <span className="project-logo">ע</span>
                <h3>{project.name}</h3>
                <p>
                  מרחב של מילים, תוכן וזהות
                  <br />
                  עיצוב אתר
                </p>
                <div className="project-window-tiles">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
}
