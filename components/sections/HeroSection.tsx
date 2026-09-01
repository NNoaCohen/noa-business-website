import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { heroContent } from "@/data/hero";

export function HeroSection() {
    return (
        <section className="pb-14 pt-4 md:pb-20 md:pt-6">
            <Container>
                <div className="rounded-2xl bg-muted/40 px-5 py-8 md:px-16 md:py-14">
                    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">

                        {/* Content */}
                        <div className="max-w-lg">
                            {heroContent.eyebrow && (
                                <span className="mb-3 block text-sm font-medium text-primary">
                                    {heroContent.eyebrow}
                                </span>
                            )}

                            <h1 className="text-3xl leading-tight md:text-5xl">
                                {heroContent.title}
                            </h1>

                            <p className="mt-4 text-sm leading-6 text-muted-foreground md:text-base">
                                {heroContent.description}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {heroContent.primaryCta && (
                                    <Link
                                        href={heroContent.primaryCta.href}
                                        className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
                                    >
                                        {heroContent.primaryCta.label}
                                    </Link>
                                )}

                                {heroContent.secondaryCta && (
                                    <Link
                                        href={heroContent.secondaryCta.href}
                                        className="rounded-md border bg-background px-6 py-3 font-medium transition-colors hover:bg-muted"
                                    >
                                        {heroContent.secondaryCta.label}
                                    </Link>
                                )}
                            </div>
                        </div>

                        {/* Image */}
                        <div className="flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl bg-muted md:min-h-[360px]">                            {heroContent.image ? (
                            <Image
                                src={heroContent.image.src}
                                alt={heroContent.image.alt}
                                width={500}
                                height={400}
                                className="h-full w-full object-cover"
                                priority
                            />
                        ) : (
                            <span className="text-sm text-muted-foreground">
                                תמונת העסק
                            </span>
                        )}
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
}