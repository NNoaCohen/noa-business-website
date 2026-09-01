import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { servicesContent } from "@/data/services";

export function ServicesSection() {
    return (
        <Section id="services" className="bg-muted/40">
            <Container>
                <div className="mx-auto max-w-xl text-center">
                    {servicesContent.eyebrow && (
                        <span className="mb-2 block text-sm font-medium">
                            {servicesContent.eyebrow}
                        </span>
                    )}

                    <h2 className="text-3xl leading-tight md:text-4xl">
                        {servicesContent.title}
                    </h2>

                    {servicesContent.description && (
                        <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
                            {servicesContent.description}
                        </p>
                    )}
                </div>

                <div className="mt-7 grid gap-4 md:grid-cols-3 md:gap-5">
                    {servicesContent.items.map((service) => (
                        <ServiceCard
                            key={service.title}
                            service={service}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    );
}