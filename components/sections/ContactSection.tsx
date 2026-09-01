import { Mail, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/layout/Container";
import { contactContent } from "@/data/contact";
import { siteConfig } from "@/config/site.config";

export function ContactSection() {
    return (
        <section id="contact" className="py-8 md:py-10">
            <Container>
                <div className="rounded-2xl bg-muted/40 px-6 py-8 md:px-10 md:py-10">
                    <div className="grid items-center gap-8 md:grid-cols-[1fr_1.15fr] md:gap-6">
                        {/* Content */}
                        <div>
                            {contactContent.eyebrow && (
                                <span className="mb-2 block text-sm font-medium">
                                    {contactContent.eyebrow}
                                </span>
                            )}

                            <h2 className="text-3xl leading-tight md:text-4xl">
                                {contactContent.title}
                            </h2>

                            {contactContent.description && (
                                <p className="mt-3 text-sm text-muted-foreground md:text-base">
                                    {contactContent.description}
                                </p>
                            )}

                            <div className="mt-5 space-y-2 text-sm">
                                {siteConfig.contact.phone && (
                                    <a
                                        href={`tel:${siteConfig.contact.phone}`}
                                        className="flex items-center gap-3"
                                    >
                                        <Phone size={17} className="text-primary" />
                                        <span>{siteConfig.contact.phone}</span>
                                    </a>
                                )}

                                {siteConfig.contact.email && (
                                    <a
                                        href={`mailto:${siteConfig.contact.email}`}
                                        className="flex items-center gap-3"
                                    >
                                        <Mail size={17} className="text-primary" />
                                        <span>{siteConfig.contact.email}</span>
                                    </a>
                                )}

                                {siteConfig.contact.whatsapp && (
                                    <a
                                        href={siteConfig.contact.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3"
                                    >
                                        <MessageCircle size={17} className="text-primary" />
                                        <span>WhatsApp</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Form */}
                        <div className="rounded-2xl bg-background p-5">
                            <ContactForm />
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
}