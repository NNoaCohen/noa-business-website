import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site.config";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: `${siteConfig.business.name} | אתרים עם אופי`, template: `%s | ${siteConfig.business.name}` },
  description: siteConfig.business.description,
  openGraph: { title: siteConfig.business.name, description: siteConfig.business.description, type: "website", locale: "he_IL" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="he" dir="rtl"><body><Header />{children}<Footer /></body></html>;
}
