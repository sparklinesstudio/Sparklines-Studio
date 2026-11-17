"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./home-reveal.css";

const SESSION_KEY = "sparklines-home-revealed";
const CLOSED_PATH = "M0 0 H1000 V1000 C760 1000 240 1000 0 1000 Z";
const BENT_PATH = "M0 0 H1000 V650 C760 1010 240 430 0 820 Z";
const OPEN_PATH = "M0 0 H1000 V-450 C760 -280 240 -160 0 -20 Z";

/** A decorative fabric sweep, played once per tab's visit to the studio. */
export function HomeReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const overlay = ref.current;
    if (!overlay) return;
    let seen = false;
    try { seen = sessionStorage.getItem(SESSION_KEY) === "true"; } catch { /* Storage may be disabled. */ }
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finish = () => {
      overlay.hidden = true;
      document.documentElement.dataset.homeRevealSeen = "true";
      try { sessionStorage.setItem(SESSION_KEY, "true"); } catch { /* Animation still works without storage. */ }
    };
    if (seen || preference.matches || getComputedStyle(overlay).visibility === "hidden") {
      finish();
      return;
    }
    // The CSS fallback covers missing JS; this timer covers the running animation.
    overlay.style.animation = "none";
    // Matching SVG commands keep the fabric continuous throughout the sweep.
    const context = gsap.context(() => {
      const timeline = gsap.timeline({ onComplete: finish });
      timeline.fromTo(".home-reveal-line>span", { yPercent: 115, rotate: 3 }, {
        yPercent: 0, rotate: 0, duration: 0.65, stagger: 0.07, ease: "power3.out",
      }, 0.08);
      timeline.fromTo(".home-reveal-spark", { scale: 0.65, rotate: -45, opacity: 0 }, {
        scale: 1, rotate: 0, opacity: 1, duration: 0.65, ease: "power3.out",
      }, 0.08);
      timeline.fromTo(".home-reveal-tagline,.home-reveal-meta", { opacity: 0, y: 10 }, {
        opacity: 1, y: 0, duration: 0.45, ease: "power2.out",
      }, 0.3);
      timeline.to(".home-reveal-line>span", {
        yPercent: -115, duration: 0.45, stagger: 0.045, ease: "power2.in",
      }, 0.86);
      timeline.to(".home-reveal-spark", {
        rotate: 70, scale: 0.8, opacity: 0, duration: 0.45, ease: "power2.in",
      }, 0.85);
      timeline.to(".home-reveal-tagline,.home-reveal-meta", {
        opacity: 0, y: -12, duration: 0.3, ease: "power2.in",
      }, 0.85);
      // The front cloth lifts first; two closely spaced hems give it depth.
      const fabrics = overlay.querySelectorAll<SVGPathElement>(".home-reveal-fabric");
      fabrics.forEach((fabric, index) => {
        const start = 0.72 + (fabrics.length - 1 - index) * 0.075;
        timeline.to(fabric, { attr: { d: BENT_PATH }, duration: 0.5, ease: "power2.in" }, start);
        timeline.to(fabric, { attr: { d: OPEN_PATH }, duration: 0.88, ease: "power3.out" }, start + 0.5);
      });
    }, overlay);
    const safetyTimer = window.setTimeout(finish, 3200);
    const skip = () => { if (preference.matches) { context.revert(); finish(); } };
    preference.addEventListener("change", skip);
    return () => { window.clearTimeout(safetyTimer); preference.removeEventListener("change", skip); context.revert(); };
  }, []);

  return <div ref={ref} className="home-reveal" aria-hidden="true">
    <svg className="home-reveal-cloth" viewBox="0 0 1000 1000" preserveAspectRatio="none">
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
      <path className="home-reveal-fabric" fill="#98b3ff" d={CLOSED_PATH} />
      <path className="home-reveal-fabric" fill="#426df2" d={CLOSED_PATH} />
      <path className="home-reveal-fabric" fill="url(#home-fabric-color)" d={CLOSED_PATH} />
    </svg>
    <div className="home-reveal-meta"><span>Independent creative studio</span><span>Kolkata, India</span></div>
    <div className="home-reveal-wordmark">
      <svg className="home-reveal-spark" viewBox="0 0 64 64" fill="none"><path d="M32 3v58M3 32h58M11.5 11.5l41 41m0-41-41 41" stroke="currentColor" strokeWidth="3" /></svg>
      <span className="home-reveal-line"><span>SPARKLINES</span></span>
      <span className="home-reveal-line"><span>STUDIO</span></span>
      <i className="home-reveal-tagline">A different perspective.</i>
    </div>
  </div>;
}
