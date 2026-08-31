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
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "סגירת תפריט" : "פתיחת תפריט"}
        aria-expanded={isOpen}
        className="flex size-10 items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute inset-x-0 top-full border-b bg-background">
          <nav aria-label="ניווט במובייל">
            <ul className="site-container flex flex-col gap-1 py-4">
              {navigationConfig.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block py-3 text-base font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {siteConfig.cta.enabled && (
                <li className="pt-3">
                  <Link
                    href={siteConfig.cta.href}
                    onClick={closeMenu}
                    className="block rounded-md bg-primary px-5 py-3 text-center font-medium text-primary-foreground"
                  >
                    {siteConfig.cta.label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}