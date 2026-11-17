"use client";

import { useLayoutEffect, useRef } from "react";
import "./home-reveal.css";

const SESSION_KEY = "sparklines-home-revealed";
// The curved hem starts below the viewport; only its SVG layer moves.
const FABRIC_PATH = "M0 0 H1000 V820 C760 1020 240 690 0 900 Z";

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
    // CSS starts at first paint and keeps running without hydration resets.
    const onEnd = (event: AnimationEvent) => {
      if (event.target === overlay && event.animationName === "home-reveal-finish") finish();
    };
    overlay.addEventListener("animationend", onEnd);
    const safetyTimer = window.setTimeout(finish, 3200);
    const skip = () => { if (preference.matches) finish(); };
    preference.addEventListener("change", skip);
    return () => { window.clearTimeout(safetyTimer); preference.removeEventListener("change", skip); overlay.removeEventListener("animationend", onEnd); };
  }, []);

  return <div ref={ref} className="home-reveal" aria-hidden="true">
    <div className="home-reveal-layer"><svg className="home-reveal-cloth" viewBox="0 0 1000 1000" preserveAspectRatio="none"><path fill="#98b3ff" d={FABRIC_PATH} /></svg></div>
    <div className="home-reveal-layer"><svg className="home-reveal-cloth" viewBox="0 0 1000 1000" preserveAspectRatio="none"><path fill="#426df2" d={FABRIC_PATH} /></svg></div>
    <div className="home-reveal-layer"><svg className="home-reveal-cloth" viewBox="0 0 1000 1000" preserveAspectRatio="none">
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
      <path fill="url(#home-fabric-color)" d={FABRIC_PATH} />
    </svg></div>
    <div className="home-reveal-meta"><span>Independent creative studio</span><span>Kolkata, India</span></div>
    <div className="home-reveal-wordmark">
      <svg className="home-reveal-spark" viewBox="0 0 64 64" fill="none"><path d="M32 3v58M3 32h58M11.5 11.5l41 41m0-41-41 41" stroke="currentColor" strokeWidth="3" /></svg>
      <span className="home-reveal-line"><span>SPARKLINES</span></span>
      <span className="home-reveal-line"><span>STUDIO</span></span>
      <i className="home-reveal-tagline">A different perspective.</i>
    </div>
  </div>;
}
