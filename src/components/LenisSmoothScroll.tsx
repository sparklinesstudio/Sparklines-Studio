"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function LenisSmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      autoResize: true,
    });
    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Continuous resize observer on documentElement and body so height changes never clip scroll
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        lenis.resize();
      });
      if (document.documentElement) {
        resizeObserver.observe(document.documentElement);
      }
      if (document.body) {
        resizeObserver.observe(document.body);
      }
    }

    const handleResize = () => {
      lenis.resize();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(handleResize);
    }

    // Initial resize calls as dynamic assets/images load
    const t1 = setTimeout(() => lenis.resize(), 150);
    const t2 = setTimeout(() => lenis.resize(), 600);
    const t3 = setTimeout(() => lenis.resize(), 1500);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Update scroll bounds on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.resize();
    }
  }, [pathname]);

  return null;
}
