import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FAQItem } from "@/components/ui/FAQItem";
import { faqContent } from "@/data/faq";

export function FAQSection() {
  return (
    <Section id="faq">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl leading-tight md:text-4xl">
              {faqContent.title}
            </h2>

            {faqContent.description && (
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                {faqContent.description}
              </p>
            )}
          </div>

          <div className="mt-8 space-y-3">
            {faqContent.items.map((item) => (
              <FAQItem
                key={item.question}
                item={item}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}