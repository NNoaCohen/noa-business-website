"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { heroContent } from "@/data/hero";

export function HeroSection() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isSettled, setIsSettled] = useState(false);
  const [isAccent, setIsAccent] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const hasInteracted = useRef(false);
  const isHovering = useRef(false);
  const pulseTimeout = useRef<number | undefined>(undefined);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const introTimers: number[] = [];

    const startupFrame = window.requestAnimationFrame(() => {
      if (mediaQuery.matches) {
        setIsSettled(true);
        setIsAccent(true);
        return;
      }

      setIsAnimated(true);
      introTimers.push(
        window.setTimeout(() => {
          if (!hasInteracted.current) setIsAccent(true);
        }, 2550),
        window.setTimeout(() => setIsSettled(true), 4150),
      );
    });

    return () => {
      window.cancelAnimationFrame(startupFrame);
      introTimers.forEach((timer) => window.clearTimeout(timer));
      if (pulseTimeout.current !== undefined) window.clearTimeout(pulseTimeout.current);
    };
  }, []);

  function activateWord() {
    hasInteracted.current = true;
    setIsAccent((current) => !current);

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsPulsing(true);
      if (pulseTimeout.current !== undefined) window.clearTimeout(pulseTimeout.current);
      pulseTimeout.current = window.setTimeout(() => setIsPulsing(false), 300);
    }
  }

  return (
    <section className="hero">
      <div className="wrap">
        <div
          className={`brand-hero ${isAnimated ? "is-animated" : ""} ${isSettled ? "is-settled" : ""}`}
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
                <button
                  className={`brand-hero__word${isAccent ? " is-accent" : ""}`}
                  type="button"
                  aria-label="החלפת הצבע של המילה אופי"
                  aria-pressed={isAccent}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse" && !isHovering.current) {
                      isHovering.current = true;
                      activateWord();
                    }
                  }}
                  onPointerLeave={() => {
                    isHovering.current = false;
                  }}
                  onClick={(event) => {
                    if (event.detail === 0 || !isHovering.current) activateWord();
                  }}
                >
                  אופי
                  <span
                    className={`brand-hero__cursor${isPulsing ? " is-tapping" : ""}`}
                    aria-hidden="true"
                  >
                    <span className="brand-hero__ray" />
                    <span className="brand-hero__ray brand-hero__ray--two" />
                    <span className="brand-hero__ray brand-hero__ray--three" />
                    <span className="brand-hero__ray brand-hero__interaction-ray" />
                    <span className="brand-hero__ray brand-hero__ray--two brand-hero__interaction-ray" />
                    <span className="brand-hero__ray brand-hero__ray--three brand-hero__interaction-ray" />
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
                </button>
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
