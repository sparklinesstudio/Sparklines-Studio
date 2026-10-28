"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import {
  LiquidGlassCarousel,
  type LiquidGlassCarouselItem,
} from "@/components/ui/liquid-glass-carousel";

// Helper to route external Pinterest CDN images through our CORS proxy for Three.js WebGL
const proxy = (url: string) => `/api/image-proxy?url=${encodeURIComponent(url)}`;

// Exact 8 creative posts from the hero section
const HERO_CREATIVE_ITEMS: LiquidGlassCarouselItem[] = [
  {
    title: "Oraanj Luxury Editorial",
    src: proxy("https://i.pinimg.com/736x/20/4f/2b/204f2bad9d4e2652f5bb09b70d95d506.jpg"),
    aspect: 3 / 4,
  },
  {
    title: "Minimalist Brand Identity",
    src: proxy("https://i.pinimg.com/736x/6b/b7/93/6bb793b3d44ded26b6f65a08afbb6603.jpg"),
    aspect: 3 / 4,
  },
  {
    title: "Contemporary Spatial Concept",
    src: proxy("https://i.pinimg.com/736x/dd/2c/fe/dd2cfe716a89c80033557bc639cb62bc.jpg"),
    aspect: 3 / 4,
  },
  {
    title: "Contekst Architectural Form",
    src: proxy("https://i.pinimg.com/1200x/5c/af/ce/5cafce949cf39a1142b07159e49d526a.jpg"),
    aspect: 3 / 4,
  },
  {
    title: "Cinematic Modern Art Direction",
    src: proxy("https://i.pinimg.com/1200x/f2/9c/18/f29c185315c686d1aec81a932c0de607.jpg"),
    aspect: 3 / 4,
  },
  {
    title: "Haute Horlogerie Showcase",
    src: proxy("https://i.pinimg.com/736x/5e/79/03/5e7903c05db68c4ca299ca030b558846.jpg"),
    aspect: 3 / 4,
  },
  {
    title: "High-Impact Digital Production",
    src: proxy("https://i.pinimg.com/1200x/07/8e/32/078e32e188a4629a61f35f508a066f24.jpg"),
    aspect: 3 / 4,
  },
  {
    title: "Bespoke Brand Strategy",
    src: proxy("https://i.pinimg.com/736x/b9/2e/6f/b92e6fa249e98df9344148ba555a29db.jpg"),
    aspect: 3 / 4,
  },
];

// Exact 4 bespoke website builds from the hero section
const HERO_WEBSITE_ITEMS: LiquidGlassCarouselItem[] = [
  {
    title: "Oraanj Interiors Design",
    src: "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_60,c_limit,w_1200/v1788801541/Oraanj_Interiors_Design_bd8exo.png",
    aspect: 16 / 10,
  },
  {
    title: "Contekst Architecture",
    src: "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_60,c_limit,w_1200/v1788801506/Contekst_o2pipv.png",
    aspect: 16 / 10,
  },
  {
    title: "Luxoria Luxury Concept",
    src: "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_60,c_limit,w_1200/v1788801474/Luxoria_1_caa7j2.png",
    aspect: 16 / 10,
  },
  {
    title: "Maison Moghadam Haute Horlogerie",
    src: "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_60,c_limit,w_1200/v1788801500/MaisonMoghadam_vs9nx6.png",
    aspect: 16 / 10,
  },
];

export function LiquidGlassShowcaseSection() {
  const [activeTab, setActiveTab] = useState<"creative" | "websites">("creative");
  const items = activeTab === "creative" ? HERO_CREATIVE_ITEMS : HERO_WEBSITE_ITEMS;

  return (
    <section
      id="liquid-glass-showcase"
      aria-label="Liquid Glass Portfolio Carousel"
      className="relative overflow-hidden bg-white text-zinc-950 py-16 sm:py-24 lg:py-28 border-b border-zinc-200/80"
    >
      {/* Subtle Studio Blueprint Grid Pattern for Clean Canvas */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000000 1px, transparent 1px),
            linear-gradient(to bottom, #000000 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* ============================================================== */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 sm:gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            {/* Pill Badge */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-white/90 px-3.5 py-1 text-xs font-medium text-orange-950 shadow-xs backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-[#f95721]" />
              <span className="text-zinc-800 font-semibold tracking-tight">
                WebGL Optical Refraction • Liquid Lens
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl font-sans leading-[1.08]">
              Refracted{" "}
              <span className="font-editorial italic font-normal text-zinc-900 tracking-normal">
                Perspectives
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-3.5 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              Experience our flagship creative campaigns through real-time liquid glass optics.
              Drag or flick to glide through our portfolio, and click any item to focus with dynamic depth.
            </p>
          </div>

          {/* Action Tabs & Contact Button */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            {/* Mode Switcher */}
            <div className="inline-flex rounded-full border border-zinc-200 bg-zinc-100 p-1 text-xs font-semibold text-zinc-700 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveTab("creative")}
                className={`rounded-full px-4 py-2 transition-all duration-200 ${
                  activeTab === "creative"
                    ? "bg-white text-zinc-950 shadow-sm"
                    : "hover:text-zinc-950 text-zinc-600"
                }`}
              >
                Creative Posts ({HERO_CREATIVE_ITEMS.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("websites")}
                className={`rounded-full px-4 py-2 transition-all duration-200 ${
                  activeTab === "websites"
                    ? "bg-white text-zinc-950 shadow-sm"
                    : "hover:text-zinc-950 text-zinc-600"
                }`}
              >
                Website Builds ({HERO_WEBSITE_ITEMS.length})
              </button>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-[#f95721] transition-colors"
            >
              <span>Start A Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* ============================================================== */}
        {/* LIQUID GLASS CAROUSEL CONTAINER                                */}
        {/* ============================================================== */}
        <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[640px] rounded-3xl border border-zinc-200/90 bg-white shadow-sm overflow-hidden">
          <LiquidGlassCarousel
            key={activeTab}
            items={items}
            panelHeight={activeTab === "creative" ? 440 : 380}
            gap={18}
            background="#ffffff"
            entry={true}
          />
        </div>
      </div>
    </section>
  );
}

export default LiquidGlassShowcaseSection;
