import Image from "next/image";
import { navigationConfig } from "@/config/navigation.config";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  return (
    <header className="topbar">
      <nav className="nav wrap" aria-label="ניווט ראשי">
        <a className="brand" href="#top" aria-label="חזור להתחלה">
          <span className="brand-logo-crop">
            <Image src="/logo-noa.png" alt="" width={120} height={120} priority />
          </span>
        </a>

        <div className="nav-links">
          {navigationConfig.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">
          בואו נדבר
        </a>

        <MobileMenu />
      </nav>
    </header>
  );
}
