"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroContent } from "@/data/hero";

export function HeroSection() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isSettled, setIsSettled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setIsAnimated(false);
      setIsClicked(true);
      setIsSettled(true);
      return;
    }

    setIsAnimated(true);

    const timers = [
      window.setTimeout(() => setIsClicked(true), 2550),
      window.setTimeout(() => {
        setIsSettled(true);
      }, 4150),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <section className="hero">
      <div className="wrap">
        <div
          className={`brand-hero ${isAnimated ? "is-animated" : ""} ${isClicked ? "is-clicked" : ""} ${isSettled ? "is-settled" : ""}`}
          aria-label="הצעת עיצוב לאזור ההירו"
        >
          <div className="brand-hero__frame" aria-hidden="true" />

          <div className="brand-hero__toolbar">
            <div className="brand-hero__dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="brand-hero__url">NOA HALEVI · WEB DESIGN</span>
          </div>

          <div className="brand-hero__content">
            <div className="brand-hero__kicker">{heroContent.eyebrow}</div>
            <h1 className="brand-hero__title">{heroContent.title}</h1>

            <div className="brand-hero__tagline" aria-label="אתרים עם אופי">
              <span className="brand-hero__tagline-words">
                <span>אתרים עם</span>
                <span className="brand-hero__word">
                  אופי
                  <span className="brand-hero__cursor" aria-hidden="true">
                    <span className="brand-hero__ray" />
                    <span className="brand-hero__ray brand-hero__ray--two" />
                    <span className="brand-hero__ray brand-hero__ray--three" />
                    <span className="brand-hero__pointer">
                      <Image
                        src="/images/brand-cursor.png"
                        alt=""
                        width={44}
                        height={58}
                        className="brand-hero__cursor-image"
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>

            <p className="brand-hero__description">
              {heroContent.description.split("\n").map((line, index) => (
                <span key={line + index}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>

            <div className="brand-hero__actions">
              <a className="brand-hero__action brand-hero__action--primary" href={heroContent.primaryCta?.href}>
                {heroContent.primaryCta?.label}
              </a>
              <a className="brand-hero__action brand-hero__action--secondary" href={heroContent.secondaryCta?.href}>
                {heroContent.secondaryCta?.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
