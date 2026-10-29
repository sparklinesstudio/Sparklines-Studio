"use client";

import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

// ============================================================================
// SHOWCASE ASSETS (NON-DUPLICATED: EXACT 8 POSTS)
// ============================================================================

export const heroShowcasePosts: string[] = [
  "https://i.pinimg.com/736x/20/4f/2b/204f2bad9d4e2652f5bb09b70d95d506.jpg",
  "https://i.pinimg.com/736x/6b/b7/93/6bb793b3d44ded26b6f65a08afbb6603.jpg",
  "https://i.pinimg.com/736x/dd/2c/fe/dd2cfe716a89c80033557bc639cb62bc.jpg",
  "https://i.pinimg.com/1200x/5c/af/ce/5cafce949cf39a1142b07159e49d526a.jpg",
  "https://i.pinimg.com/1200x/f2/9c/18/f29c185315c686d1aec81a932c0de607.jpg",
  "https://i.pinimg.com/736x/5e/79/03/5e7903c05db68c4ca299ca030b558846.jpg",
  "https://i.pinimg.com/1200x/07/8e/32/078e32e188a4629a61f35f508a066f24.jpg",
  "https://i.pinimg.com/736x/b9/2e/6f/b92e6fa249e98df9344148ba555a29db.jpg",
];

// Duplicated for seamless infinite marquee loop
const infiniteHeroPosts = [...heroShowcasePosts, ...heroShowcasePosts];

// Custom easing from Emil Kowalski standards (animations.dev)
const EASE_OUT_STRONG = [0.23, 1, 0.32, 1] as const;

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  // Container refs for upward smile curve calculation
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Robust upward smile curve computation that never terminates or drops frames
  useEffect(() => {
    let animationFrameId: number;

    const updateCurves = () => {
      animationFrameId = requestAnimationFrame(updateCurves);

      const activeContainer = containerRef.current;
      const activeCards = cardRefs.current;

      if (!activeContainer) return;
      const containerRect = activeContainer.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      const halfWidth = containerRect.width / 2;

      activeCards.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const dist = (cardCenter - centerX) / (halfWidth || 1);

        // Distinct, physical upward smile curve:
        // Center: dist = 0 -> curveY = 0px
        // Halfway: dist = ±0.5 -> curveY ≈ -30px, rotateZ ≈ ±4.25deg
        // Wings: dist = ±1.0 -> curveY ≈ -80px, rotateZ ≈ ±8.5deg, rotateY ≈ ∓9.5deg
        const absDist = Math.abs(dist);
        const curveY = Math.pow(absDist, 1.4) * -80;
        const rotateZ = Math.max(-9, Math.min(9, dist * 8.5));
        const rotateY = Math.max(-10, Math.min(10, -dist * 9.5));

        card.style.transform = `translate3d(0, ${curveY}px, 0) rotateZ(${rotateZ}deg) rotateY(${rotateY}deg)`;
      });
    };

    animationFrameId = requestAnimationFrame(updateCurves);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Sparklines Studio Showcase"
      className="relative overflow-hidden pt-32 pb-8 sm:pt-36 sm:pb-12 lg:pt-44 lg:pb-14 bg-gradient-to-b from-blue-500 via-gray-50 via-30% to-white transition-colors duration-1000"
    >
      {/* Ambient Top Glow Layer */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[400px] -z-10 bg-gradient-to-b from-blue-500/80 via-gray-50/30 to-transparent blur-3xl" />

      {/* Subtle Studio Blueprint Grid Paper Pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000000 1px, transparent 1px),
            linear-gradient(to bottom, #000000 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============================================================== */}
        {/* TOP CONTENT: COMPACT STUDIO HEADLINE & CALL TO ACTION          */}
        {/* ============================================================== */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center justify-center">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.55, ease: EASE_OUT_STRONG }}
            className="flex flex-col items-center"
          >
            {/* Headline */}
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl sm:leading-[1.1] font-sans">
              Scaling Brands With{" "}
              <span className="font-editorial italic font-normal text-zinc-900 tracking-normal">
                Marketing
              </span>
              <br />& Cinematic{" "}
              <span className="font-editorial italic font-normal text-zinc-900 tracking-normal">
                Video Production
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-2.5 max-w-xl text-sm sm:text-base text-zinc-600 leading-normal font-medium">
              We partner with visionary founders and ambitious brands to craft high-converting campaigns,
              cinematic commercial videos, and performance strategies that scale revenue.
            </p>

            {/* Primary CTA Button (Without arrow) */}
            <div className="mt-4 sm:mt-5">
              <Button
                href="/contact"
                size="lg"
              >
                <span>Let&apos;s work together</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* SHOWCASE STAGE: 3D CURVED SMILE INFINITE CAROUSEL RUNWAY       */}
      {/* ============================================================== */}
      <div
        className="relative mt-4 sm:mt-6 w-full overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-12"
        style={{ perspective: "1400px" }}
      >
        {/* Soft Vignette Fades for Left & Right Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-14 sm:w-32 bg-gradient-to-r from-white via-white/85 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-14 sm:w-32 bg-gradient-to-l from-white via-white/85 to-transparent" />

        <div
          ref={containerRef}
          className="group/track relative flex w-full"
        >
          <motion.div
            className="flex w-max items-center gap-6 sm:gap-8 py-4 will-change-transform"
            animate={
              shouldReduceMotion
                ? { x: 0 }
                : {
                    x: ["0%", "-50%"],
                  }
            }
            transition={{
              ease: "linear",
              duration: 28,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {infiniteHeroPosts.map((src, index) => (
              <div
                key={`hero-post-${index}`}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="flex-shrink-0 cursor-pointer will-change-transform"
              >
                <div className="group relative overflow-hidden rounded-3xl border border-zinc-200/90 bg-white p-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:scale-105 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(0,0,0,0.12)] hover:border-orange-300 transition-transform duration-250 ease-out">
                  <div className="relative h-[270px] w-[205px] sm:h-[350px] sm:w-[265px] md:h-[390px] md:w-[295px] overflow-hidden rounded-2xl bg-zinc-100">
                    <Image
                      src={src}
                      alt={`Creative work #${(index % heroShowcasePosts.length) + 1}`}
                      fill
                      sizes="(max-width: 640px) 205px, (max-width: 768px) 265px, 295px"
                      priority={index < 4}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Distinct Ambient Silhouette Line Echoing the Upward Smile Curve */}
        <div className="pointer-events-none mx-auto -mt-1 h-12 max-w-5xl rounded-[100%] border-b-2 border-orange-500/20 opacity-80" />
      </div>
    </section>
  );
}

export default HeroSection;
