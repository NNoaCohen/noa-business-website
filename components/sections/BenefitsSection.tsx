import { Check } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { benefitsContent } from "@/data/benefits";

export function BenefitsSection() {
    return (
        <Section>
            <Container>
                <div className="grid items-start gap-8 md:grid-cols-2 md:gap-20">
                    {/* Content */}
                    <div className="max-w-lg">
                        {benefitsContent.eyebrow && (
                            <span className="mb-3 block text-sm font-medium">
                                {benefitsContent.eyebrow}
                            </span>
                        )}

                        <h2 className="text-3xl leading-tight md:text-4xl">
                            {benefitsContent.title}
                        </h2>

                        {benefitsContent.description && (
                            <p className="mt-5 text-muted-foreground">
                                {benefitsContent.description}
                            </p>
                        )}
                    </div>

                    {/* Benefits list */}
                    <div className="space-y-5 md:space-y-7">
                        {benefitsContent.items.map((item) => (
                            <div
                                key={item.title}
                                className="flex items-start gap-4"
                            >
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground md:size-11">
                                    <Check size={18} />
                                </div>

                                <div>
                                    <h3 className="text-base font-semibold md:text-lg">
                                        {item.title}
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </Container>
        </Section>
    );
}