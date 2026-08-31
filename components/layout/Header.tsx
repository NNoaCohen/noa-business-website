import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { navigationConfig } from "@/config/navigation.config";
import { siteConfig } from "@/config/site.config";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        {siteConfig.business.logo ? (
                            <Image
                                src={siteConfig.business.logo}
                                alt={siteConfig.business.name}
                                width={140}
                                height={48}
                                priority
                            />
                        ) : (
                            <span className="text-xl font-bold">
                                {siteConfig.business.name}
                            </span>
                        )}
                    </Link>

                    <nav className="hidden md:block" aria-label="ניווט ראשי">
                        <ul className="flex items-center gap-8">
                            {navigationConfig.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm font-medium transition-colors hover:text-primary"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {siteConfig.cta.enabled && (
                        <Link
                            href={siteConfig.cta.href}
                            className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"                        >
                            {siteConfig.cta.label}
                        </Link>
                    )}
                    <MobileMenu />
                </div>
            </Container>
        </header>
    );
}