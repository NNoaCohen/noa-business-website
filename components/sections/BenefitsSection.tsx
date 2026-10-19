import { Check } from "lucide-react";
import { BrandCursor } from "@/components/ui/BrandCursor";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { benefitsContent } from "@/data/benefits";

export function BenefitsSection() {
  return (
    <Section id="process" className="process-band">
      <Container>
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-20">
          <div className="max-w-lg">
            <span className="section-eyebrow">
              <BrandCursor />
              <span className="eyebrow__text">{benefitsContent.eyebrow}</span>
            </span>
            <h2 className="mt-4">{benefitsContent.title}</h2>
            <p className="mt-5 text-muted-foreground">{benefitsContent.description}</p>
          </div>
          <div className="space-y-5 md:space-y-7">
            {benefitsContent.items.map((item, index) => (
              <div key={item.title} className="benefit-item flex items-start gap-4">
                <div className="benefit-icon flex size-10 shrink-0 items-center justify-center rounded-full">
                  <Check size={18} />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">0{index + 1}</span>
                  <h3 className="mt-1 text-base font-semibold md:text-lg">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
