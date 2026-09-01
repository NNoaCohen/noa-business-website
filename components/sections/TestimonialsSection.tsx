import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonialsContent } from "@/data/testimonials";

export function TestimonialsSection() {
    return (
        <Section id="testimonials" className="bg-muted/40">
            <Container>
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-3xl leading-tight md:text-4xl">
                        {testimonialsContent.title}
                    </h2>

                    {testimonialsContent.description && (
                        <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
                            {testimonialsContent.description}
                        </p>
                    )}
                </div>

                <div className="mx-auto mt-7 flex max-w-4xl flex-col gap-4">
                    {testimonialsContent.items.map((testimonial, index) => (
                        <TestimonialCard
                            key={`${testimonial.name}-${index}`}
                            testimonial={testimonial}
                        />
                    ))}
                </div>
        </Container>
        </Section >
    );
}