"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./home-reveal.css";

const SESSION_KEY = "sparklines-home-revealed";

/** A decorative fabric sweep, played once per tab's visit to the studio. */
export function HomeReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const overlay = ref.current;
    if (!overlay) return;
    let seen = false;
    try { seen = sessionStorage.getItem(SESSION_KEY) === "true"; } catch { /* Storage may be disabled. */ }
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (seen || preference.matches) {
      overlay.hidden = true;
      return;
    }

    const finish = () => {
      overlay.hidden = true;
      try { sessionStorage.setItem(SESSION_KEY, "true"); } catch { /* Animation still works without storage. */ }
    };
    // The same commands in every path let the lower hem bend as it lifts.
    const context = gsap.context(() => {
      const timeline = gsap.timeline({ delay: 0.18, onComplete: finish });
      timeline.to(".home-reveal-wordmark", { opacity: 0, y: -36, duration: 0.5, ease: "power2.in" }, 0.1);
      timeline.to(".home-reveal-fabric", {
        attr: { d: "M0 0 H1000 V550 C760 940 240 470 0 810 Z" },
        duration: 0.8,
        ease: "power2.in",
      }, 0.15);
      timeline.to(".home-reveal-fabric", {
        attr: { d: "M0 0 H1000 V-450 C760 -280 240 -160 0 -20 Z" },
        duration: 1.05,
        ease: "power3.out",
      });
    }, overlay);
    const skip = () => { if (preference.matches) { context.revert(); finish(); } };
    preference.addEventListener("change", skip);
    return () => { preference.removeEventListener("change", skip); context.revert(); };
  }, []);

  return <div ref={ref} className="home-reveal" aria-hidden="true">
    <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <defs>
        <linearGradient id="home-fabric-color" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#082dba" />
          <stop offset=".18" stopColor="#2055e8" />
          <stop offset=".36" stopColor="#0d3ac6" />
          <stop offset=".55" stopColor="#477aff" />
          <stop offset=".7" stopColor="#2055e8" />
          <stop offset=".88" stopColor="#1036b3" />
          <stop offset="1" stopColor="#2860ff" />
        </linearGradient>
      </defs>
      <path className="home-reveal-fabric" fill="url(#home-fabric-color)" d="M0 0 H1000 V1000 C760 1000 240 1000 0 1000 Z" />
    </svg>
    <div className="home-reveal-wordmark"><span>SPARKLINES</span><span>STUDIO</span><i>A different perspective.</i></div>
  </div>;
}
