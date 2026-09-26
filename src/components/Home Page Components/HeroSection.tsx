"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Add any new image URLs here; they are automatically looped into the continuous carousel!
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

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Duplicate images for a seamless loop
  const loopImages = [
    ...heroShowcasePosts,
    ...heroShowcasePosts,
    ...heroShowcasePosts,
  ];

  // Dynamic animation duration based on image count so speed is consistently smooth
  const carouselDuration = Math.max(heroShowcasePosts.length * 4.5, 30);

  // Dynamic upward curve computation: cards bend upwards towards left and right ends
  useEffect(() => {
    let animationFrameId: number;

    const updateCurves = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      const halfWidth = containerRect.width / 2;

      cardRefs.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();

        // Calculate normalized distance from screen center (-1 to +1)
        const cardCenter = rect.left + rect.width / 2;
        const dist = (cardCenter - centerX) / (halfWidth || 1);

        // Parabolic upward curve (smile shape):
        // Center: dist = 0 -> curveY = 0px
        // Left & right ends: dist = ±1 -> curveY ≈ -42px (curved upwards!)
        const curveY = Math.pow(dist, 2) * -42;
        // Tangent rotation along the upward curve
        const rotate = Math.max(-6, Math.min(6, dist * 4.5));

        card.style.setProperty("--curve-y", `${curveY}px`);
        card.style.setProperty("--curve-rotate", `${rotate}deg`);
      });

      animationFrameId = requestAnimationFrame(updateCurves);
    };

    animationFrameId = requestAnimationFrame(updateCurves);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-24 pb-8 sm:pt-32 sm:pb-10 lg:pt-36 lg:pb-12 bg-gradient-to-b from-blue-400 via-gray-50 via-38% to-white"
    >
      {/* Ambient Top Glow Layer */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 -z-10 bg-radial from-white/40 via-transparent to-transparent opacity-80" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Content */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-white/90 px-4 py-1.5 text-xs font-medium text-orange-950 shadow-sm backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#f95721] animate-pulse" />
            <span className="text-zinc-800 font-semibold">
              Ranked Top Digital Product Agency • 2026
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-6xl sm:leading-[1.12]"
          >
            Building High-Impact{" "}
            <span className="font-editorial italic font-normal text-zinc-900 tracking-normal">
              Digital
            </span>
            <br />
            <span className="font-editorial italic font-normal text-zinc-900 tracking-normal">
              Products
            </span>{" "}
            for your brand
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-5 max-w-xl text-base text-zinc-700 sm:text-lg leading-relaxed font-medium"
          >
            We partner with visionary founders and scaling brands to craft intuitive websites,
            scalable web applications, and unforgettable digital experiences.
          </motion.p>

          {/* Primary CTA Button matching Navbar Crystal Glass Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 sm:mt-7"
          >
            <Link
              href="#contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-zinc-950/95 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-all duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_6px_20px_rgba(249,87,33,0.35)] active:scale-95 group overflow-hidden"
            >
              <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <span>Let's work together</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Endless Non-Stop Carousel with Inward Upward Curve */}
      <motion.div
        id="works"
        ref={containerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="relative mt-6 sm:mt-8 w-full overflow-hidden scroll-mt-28 pt-10 pb-4"
      >
        {/* Subtle Left & Right Soft Edge Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent" />

        {/* Continuous Marquee Track */}
        <div className="group/track relative flex w-full">
          <motion.div
            className="flex w-max items-center gap-5 sm:gap-6 py-4 group-hover/track:[animation-play-state:paused]"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              ease: "linear",
              duration: carouselDuration,
              repeat: Infinity,
            }}
          >
            {loopImages.map((src, index) => (
              <div
                key={`${src}-${index}`}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-3xl border border-zinc-200/90 bg-white p-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(0,0,0,0.12)] hover:border-orange-300 will-change-transform"
                style={{
                  transform:
                    "translateY(var(--curve-y, 0px)) rotate(var(--curve-rotate, 0deg))",
                }}
              >
                {/* Artwork Container without separate image scale or hover badges */}
                <div className="relative h-[270px] w-[205px] sm:h-[350px] sm:w-[265px] md:h-[390px] md:w-[295px] overflow-hidden rounded-2xl bg-zinc-100">
                  <Image
                    src={src}
                    alt={`Sparklines Studio creative work #${(index % heroShowcasePosts.length) + 1}`}
                    fill
                    sizes="(max-width: 640px) 205px, (max-width: 768px) 265px, 295px"
                    priority={index < 4}
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Upward Arc Ambient Silhouette Line echoing the curve */}
        <div className="pointer-events-none mx-auto -mt-2 h-10 max-w-5xl rounded-[100%] border-b border-orange-500/10 opacity-70" />
      </motion.div>
    </section>
  );
}
