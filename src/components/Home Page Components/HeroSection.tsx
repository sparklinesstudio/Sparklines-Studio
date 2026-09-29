"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

// ============================================================================
// SHOWCASE ASSETS (NON-DUPLICATED: EXACT 8 POSTS AND 4 WEBSITES)
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

export const websiteShowcaseProjects = [
  {
    id: "oraanj",
    title: "Oraanj Interiors Design",
    category: "Architecture & Interior Studio",
    url: "oraanj-interiors.com",
    src: "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_60,c_limit,w_1200/v1788801541/Oraanj_Interiors_Design_bd8exo.png",
  },
  {
    id: "contekst",
    title: "Contekst",
    category: "Modern Architecture & Living",
    url: "contekst.design",
    src: "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_60,c_limit,w_1200/v1788801506/Contekst_o2pipv.png",
  },
  {
    id: "luxoria",
    title: "Luxoria",
    category: "Luxury Living & Interior Concept",
    url: "luxoria.design",
    src: "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_60,c_limit,w_1200/v1788801474/Luxoria_1_caa7j2.png",
  },
  {
    id: "maison-moghadam",
    title: "Maison Moghadam",
    category: "Haute Horlogerie & High Jewellery",
    url: "maisonmoghadam.com",
    src: "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_60,c_limit,w_1200/v1788801500/MaisonMoghadam_vs9nx6.png",
  },
];

type StudioHeroMode = "CREATIVE" | "WEBSITES";

// Custom easing from Emil Kowalski standards (animations.dev)
const EASE_OUT_STRONG = [0.23, 1, 0.32, 1] as const;

export function HeroSection() {
  const [mode, setMode] = useState<StudioHeroMode>("CREATIVE");
  const shouldReduceMotion = useReducedMotion();

  // Container refs for upward smile curve calculation
  const creativeContainerRef = useRef<HTMLDivElement>(null);
  const websiteContainerRef = useRef<HTMLDivElement>(null);
  const creativeCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const websiteCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Pacing: 14 seconds for the 8 posts to pass once; 10 seconds for the 4 websites
  const creativeDuration = 14;
  const websiteDuration = 10;

  // Robust upward smile curve computation that never terminates or drops frames
  useEffect(() => {
    let animationFrameId: number;

    const updateCurves = () => {
      // Always reschedule first so the loop never dies across state transitions
      animationFrameId = requestAnimationFrame(updateCurves);

      const activeContainer =
        mode === "CREATIVE"
          ? creativeContainerRef.current
          : websiteContainerRef.current;
      const activeCards =
        mode === "CREATIVE" ? creativeCardRefs.current : websiteCardRefs.current;

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
  }, [mode]);

  return (
    <section
      id="hero"
      aria-label="Sparklines Studio Showcase"
      className="relative overflow-hidden pt-14 pb-8 sm:pt-18 sm:pb-12 lg:pt-20 lg:pb-14 bg-gradient-to-b from-[#6ba3e8]/25 via-blue-50/35 via-35% to-white transition-colors duration-1000"
    >
      {/* Ambient Top Glow Layer */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[400px] -z-10 bg-gradient-to-b from-[#6ba3e8]/30 via-sky-100/20 to-transparent blur-3xl" />

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
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center min-h-[155px] sm:min-h-[175px] justify-center">
          <AnimatePresence mode="wait">
            {mode === "CREATIVE" ? (
              // STAGE 1: Brand & Creative Identity (Shown while the 8 posts pass once)
              <motion.div
                key="creative-headline"
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        y: -14,
                        filter: "blur(8px)",
                        transition: { duration: 0.45, ease: EASE_OUT_STRONG },
                      }
                }
                transition={{ duration: 0.55, ease: EASE_OUT_STRONG }}
                className="flex flex-col items-center"
              >
                {/* Pill Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE_OUT_STRONG }}
                  className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-white/90 px-3.5 py-1 text-xs font-medium text-orange-950 shadow-xs backdrop-blur-md"
                >
                  <span className="flex h-2 w-2 rounded-full bg-[#f95721] animate-pulse" />
                  <span className="text-zinc-800 font-semibold tracking-tight">
                    Ranked Top Digital Product Agency • 2026
                  </span>
                </motion.div>

                {/* Headline */}
                <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl sm:leading-[1.1]">
                  Building High-Impact{" "}
                  <span className="font-editorial italic font-normal text-zinc-900 tracking-normal">
                    Digital
                  </span>
                  <br />
                  <span className="font-editorial italic font-normal text-zinc-900 tracking-normal">
                    Products
                  </span>{" "}
                  for your brand
                </h1>

                {/* Subtext */}
                <p className="mt-2.5 max-w-xl text-sm sm:text-base text-zinc-600 leading-normal font-medium">
                  We partner with visionary founders and scaling brands to craft intuitive websites,
                  scalable web applications, and unforgettable digital experiences.
                </p>

                {/* Primary CTA Button */}
                <div className="mt-4 sm:mt-5">
                  <motion.div
                    whileHover={{ scale: 1.025, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.16, ease: EASE_OUT_STRONG }}
                  >
                    <Link
                      href="#contact"
                      className="relative inline-flex items-center gap-2 rounded-full bg-zinc-950 px-7 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-colors duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_6px_22px_rgba(249,87,33,0.35)] group overflow-hidden"
                    >
                      <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                      <span>Let&apos;s work together</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              // STAGE 2: Website Productions Showcase (Shown automatically after all 8 posts pass)
              <motion.div
                key="website-headline"
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        y: -14,
                        filter: "blur(8px)",
                        transition: { duration: 0.45, ease: EASE_OUT_STRONG },
                      }
                }
                transition={{ duration: 0.55, ease: EASE_OUT_STRONG }}
                className="flex flex-col items-center"
              >
                {/* Pill Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE_OUT_STRONG }}
                  className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-orange-300/80 bg-white/95 px-3.5 py-1 text-xs font-semibold text-orange-950 shadow-xs backdrop-blur-md ring-2 ring-orange-500/10"
                >
                  <Sparkles className="h-3.5 w-3.5 text-[#f95721] animate-spin" style={{ animationDuration: "9s" }} />
                  <span className="text-zinc-900 font-bold">Featured Website Productions</span>
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-bold text-[#f95721]">
                    4 Bespoke Builds
                  </span>
                </motion.div>

                {/* Headline */}
                <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl sm:leading-[1.1]">
                  Need A Cool{" "}
                  <span className="font-editorial italic font-normal text-zinc-900 tracking-normal">
                    Website?
                  </span>
                  <br />
                  <span className="text-[#f95721] font-editorial italic font-normal">
                    We&apos;ve Got
                  </span>{" "}
                  You Covered
                </h1>

                {/* Subtext */}
                <p className="mt-2.5 max-w-xl text-sm sm:text-base text-zinc-600 leading-normal font-medium">
                  From bespoke architectural portfolios to luxury brand flagships, we engineer
                  captivating, high-converting digital homes.
                </p>

                {/* Single Primary CTA Button */}
                <div className="mt-4 sm:mt-5">
                  <motion.div
                    whileHover={{ scale: 1.025, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.16, ease: EASE_OUT_STRONG }}
                  >
                    <Link
                      href="#contact"
                      className="relative inline-flex items-center gap-2 rounded-full bg-[#f95721] px-7 py-3 text-sm font-semibold text-white shadow-[0_6px_22px_rgba(249,87,33,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] border border-orange-400/40 transition-colors duration-300 hover:bg-[#ea4b16] group overflow-hidden"
                    >
                      <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                      <span>Get Your Custom Website</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ============================================================== */}
      {/* SHOWCASE STAGE: 3D CURVED SMILE CAROUSEL RUNWAY                */}
      {/* ============================================================== */}
      <div
        className="relative mt-4 sm:mt-6 w-full overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-12"
        style={{ perspective: "1400px" }}
      >
        {/* Soft Vignette Fades for Left & Right Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-14 sm:w-32 bg-gradient-to-r from-white via-white/85 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-14 sm:w-32 bg-gradient-to-l from-white via-white/85 to-transparent" />

        <AnimatePresence mode="wait">
          {mode === "CREATIVE" ? (
            // ============================================================
            // 1. CREATIVE POSTS: NOT INFINITE — PASSES EXACTLY ONCE
            // Exactly 8 items. Slides from right to left until all 8 posts
            // pass across the screen, then onAnimationComplete triggers the website!
            // ============================================================
            <motion.div
              key="stage-creative"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: -80,
                filter: "blur(6px)",
                transition: { duration: 0.65, ease: EASE_OUT_STRONG },
              }}
              transition={{ duration: 0.65, ease: EASE_OUT_STRONG }}
              className="relative w-full"
            >
              <div
                ref={creativeContainerRef}
                className="group/track relative flex w-full"
              >
                <motion.div
                  className="flex w-max items-center gap-6 sm:gap-8 py-4 will-change-transform"
                  initial={{ x: "0%" }}
                  animate={{ x: "-86%" }}
                  transition={{
                    ease: "linear",
                    duration: creativeDuration,
                  }}
                  onAnimationComplete={() => {
                    // All 8 posts have completed their single pass!
                    // Seamlessly transition into the website showcase.
                    setMode("WEBSITES");
                  }}
                >
                  {heroShowcasePosts.map((src, index) => (
                    <div
                      key={`creative-post-${index}`}
                      ref={(el) => {
                        creativeCardRefs.current[index] = el;
                      }}
                      className="flex-shrink-0 cursor-pointer will-change-transform"
                    >
                      <div className="group relative overflow-hidden rounded-3xl border border-zinc-200/90 bg-white p-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:scale-105 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(0,0,0,0.12)] hover:border-orange-300 transition-transform duration-250 ease-out">
                        <div className="relative h-[270px] w-[205px] sm:h-[350px] sm:w-[265px] md:h-[390px] md:w-[295px] overflow-hidden rounded-2xl bg-zinc-100">
                          <Image
                            src={src}
                            alt={`Creative work #${index + 1}`}
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
            </motion.div>
          ) : (
            // ============================================================
            // 2. FEATURED WEBSITES: PASSES EXACTLY ONCE
            // Clean viewports: NO dots, NO hover text or dark overlays.
            // ============================================================
            <motion.div
              key="stage-websites"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: -80,
                filter: "blur(6px)",
                transition: { duration: 0.65, ease: EASE_OUT_STRONG },
              }}
              transition={{ duration: 0.65, ease: EASE_OUT_STRONG }}
              className="relative w-full"
            >
              <div
                ref={websiteContainerRef}
                className="group/track relative flex w-full"
              >
                <motion.div
                  className="flex w-max items-center gap-6 sm:gap-8 py-4 will-change-transform"
                  initial={{ x: "0%" }}
                  animate={{ x: "-76%" }}
                  transition={{
                    ease: "linear",
                    duration: websiteDuration,
                  }}
                  onAnimationComplete={() => {
                    // All 4 websites have completed their pass!
                    // Transition back to the creative posts.
                    setMode("CREATIVE");
                  }}
                >
                  {websiteShowcaseProjects.map((project, index) => (
                    <div
                      key={`website-item-${project.id}`}
                      ref={(el) => {
                        websiteCardRefs.current[index] = el;
                      }}
                      className="flex-shrink-0 cursor-pointer will-change-transform"
                    >
                      <div className="group relative overflow-hidden rounded-3xl border border-zinc-200/90 bg-white p-2.5 shadow-[0_14px_38px_rgba(0,0,0,0.08)] hover:scale-105 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(0,0,0,0.15)] hover:border-orange-300 transition-transform duration-250 ease-out">
                        {/* Pure Clean Website Showcase Card (No 3 dots, No hover text overlay) */}
                        <div className="w-[290px] sm:w-[390px] md:w-[450px] h-[195px] sm:h-[260px] md:h-[295px] overflow-hidden rounded-2xl relative bg-zinc-100">
                          <Image
                            src={project.src}
                            alt={project.title}
                            fill
                            sizes="(max-width: 640px) 290px, (max-width: 768px) 390px, 450px"
                            priority={index < 3}
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Distinct Ambient Silhouette Line Echoing the Upward Smile Curve */}
        <div className="pointer-events-none mx-auto -mt-1 h-12 max-w-5xl rounded-[100%] border-b-2 border-orange-500/20 opacity-80" />
      </div>
    </section>
  );
}
