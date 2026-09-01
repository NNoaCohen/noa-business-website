import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { aboutContent } from "@/data/about";

export function AboutSection() {
    return (
        <Section id="about">
            <Container>
                <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">

                    {/* Content */}
                    <div className="order-1 max-w-lg md:order-2">
                        {aboutContent.eyebrow && (
                            <span className="mb-2 block text-sm font-medium">
                                {aboutContent.eyebrow}
                            </span>
                        )}

                        <h2 className="text-3xl leading-tight md:text-4xl">
                            {aboutContent.title}
                        </h2>

                        <p className="mt-4 text-sm leading-6 text-muted-foreground md:text-base">
                            {aboutContent.description}
                        </p>

                        {aboutContent.secondaryDescription && (
                            <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
                                {aboutContent.secondaryDescription}
                            </p>
                        )}
                    </div>

                    {/* Image */}
                    <div className="order-2 flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl bg-muted md:order-1 md:min-h-[360px]">
                        {aboutContent.image ? (
                            <Image
                                src={aboutContent.image.src}
                                alt={aboutContent.image.alt}
                                width={500}
                                height={400}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <span className="text-sm text-muted-foreground">
                                תמונת אודות
                            </span>
                        )}
                    </div>

                </div>
            </Container>
        </Section>
    );
}