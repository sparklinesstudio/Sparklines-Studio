"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

// Add any new image URLs here; they are automatically looped into the continuous carousel!
export const heroShowcasePosts: string[] = [
  "https://i.pinimg.com/736x/ca/b0/3c/cab03c121d96f013bde500c5df8e2278.jpg",
  "https://i.pinimg.com/736x/ca/b0/3c/cab03c121d96f013bde500c5df8e2278.jpg",
  "https://i.pinimg.com/736x/ca/b0/3c/cab03c121d96f013bde500c5df8e2278.jpg",
  "https://i.pinimg.com/736x/ca/b0/3c/cab03c121d96f013bde500c5df8e2278.jpg",
  "https://i.pinimg.com/736x/ca/b0/3c/cab03c121d96f013bde500c5df8e2278.jpg",
  "https://i.pinimg.com/736x/ca/b0/3c/cab03c121d96f013bde500c5df8e2278.jpg",
  "https://i.pinimg.com/736x/ca/b0/3c/cab03c121d96f013bde500c5df8e2278.jpg",
  "https://i.pinimg.com/736x/ca/b0/3c/cab03c121d96f013bde500c5df8e2278.jpg",
];

export function HeroSection() {
  // Duplicate array so it loops smoothly from 0% to -50% without any jump
  const loopImages = [...heroShowcasePosts, ...heroShowcasePosts];
  // Calculate dynamic animation duration based on image count so speed is consistently smooth
  const carouselDuration = Math.max(heroShowcasePosts.length * 3.8, 24);

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pt-40 lg:pb-28 bg-gradient-to-b from-blue-400 via-gray-50 via-38% to-white"
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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-white/80 px-4 py-1.5 text-xs font-medium text-orange-950 shadow-sm backdrop-blur-md"
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
            className="mt-6 max-w-xl text-base text-zinc-700 sm:text-lg leading-relaxed font-medium"
          >
            We partner with visionary founders and scaling brands to craft intuitive websites,
            scalable web applications, and unforgettable digital experiences.
          </motion.p>

          {/* Primary Orange CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-2.5 rounded-full bg-[#f95721] px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-orange-500/25 transition-all duration-300 hover:bg-[#ea4b16] hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              <span>Let's work together</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Endless Non-Stop Carousel with Inward Curve */}
      <motion.div
        id="works"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
        className="relative mt-16 sm:mt-24 w-full overflow-hidden scroll-mt-28"
      >
        {/* Inward Curve 3D Perspective Stage */}
        <div
          className="relative mx-auto w-full py-6 [perspective:1400px]"
          style={{
            perspectiveOrigin: "center top",
          }}
        >
          {/* Subtle Left & Right Soft Edge Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent" />

          {/* Curved Stage with Cylindrical Inward Tilt */}
          <div
            className="[transform-style:preserve-3d] transition-transform duration-700"
            style={{
              transform: "rotateX(7deg) scale(0.985)",
            }}
          >
            {/* Infinite Non-Stop Sliding Track */}
            <motion.div
              className="flex w-max items-center gap-5 sm:gap-7"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: carouselDuration,
                repeat: Infinity,
              }}
            >
              {loopImages.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  className="group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-3xl border border-zinc-200/90 bg-white p-2.5 shadow-[0_12px_36px_rgba(0,0,0,0.07)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(249,87,33,0.15)] hover:border-orange-300"
                  style={{
                    transform: "translateZ(0)",
                  }}
                >
                  {/* Aspect-Ratio Card for Post Artwork */}
                  <div className="relative h-[280px] w-[210px] sm:h-[370px] sm:w-[275px] md:h-[410px] md:w-[305px] overflow-hidden rounded-2xl bg-zinc-100">
                    <Image
                      src={src}
                      alt={`Sparklines Studio creative work #${(index % heroShowcasePosts.length) + 1}`}
                      fill
                      sizes="(max-width: 640px) 210px, (max-width: 768px) 275px, 305px"
                      priority={index < 4}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Subtle Glassmorphic Sheen on Hover */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Badge on Hover */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-zinc-900 shadow-sm backdrop-blur-md">
                        Project #{(index % heroShowcasePosts.length) + 1}
                      </span>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f95721] text-white shadow-sm">
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Inward Arch Bottom Glow / Silhouette curve */}
        <div className="pointer-events-none mx-auto -mt-6 h-8 max-w-4xl rounded-[100%] bg-gradient-to-b from-orange-500/10 to-transparent blur-xl" />
      </motion.div>
    </section>
  );
}
