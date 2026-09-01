import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { navigationConfig } from "@/config/navigation.config";
import { siteConfig } from "@/config/site.config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-3 md:gap-16">

          {/* Business */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold"
            >
              {siteConfig.business.name}
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-400">
              {siteConfig.business.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-base font-semibold">
              ניווט מהיר
            </h3>

            <nav
              className="mt-4"
              aria-label="ניווט תחתון"
            >
              <ul className="space-y-3">
                {navigationConfig.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold">
              צרו קשר
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
              {siteConfig.contact.phone && (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="transition-colors hover:text-white"
                >
                  טלפון {siteConfig.contact.phone}
                </a>
              )}

              {siteConfig.contact.email && (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  מייל {siteConfig.contact.email}
                </a>
              )}

              {siteConfig.contact.whatsapp && (
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
              )}
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 py-5 text-center text-xs text-zinc-500">
          © {currentYear} {siteConfig.business.name}. כל הזכויות שמורות.
        </div>
      </Container>
    </footer>
  );
}