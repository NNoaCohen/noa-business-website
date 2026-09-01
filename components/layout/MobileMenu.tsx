"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { navigationConfig } from "@/config/navigation.config";
import { siteConfig } from "@/config/site.config";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "סגירת תפריט" : "פתיחת תפריט"}
        aria-expanded={isOpen}
        className="flex size-10 items-center justify-center"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Menu */}
      {isOpen && (
        <div className="absolute inset-x-0 top-full z-50 min-h-[calc(100vh-5rem)] bg-background">
          <nav
            aria-label="ניווט במובייל"
            className="site-container flex min-h-[calc(100vh-5rem)] flex-col"
          >
            <ul className="flex flex-1 flex-col items-center justify-center gap-7 py-10">
              {navigationConfig.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="text-lg font-semibold transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {siteConfig.cta.enabled && (
              <div className="pb-8">
                <Link
                  href={siteConfig.cta.href}
                  onClick={closeMenu}
                  className="mx-auto flex w-fit items-center justify-center rounded-md border border-primary px-6 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {siteConfig.cta.label}
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}