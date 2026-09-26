"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";

// =========================================================================
// 1. BRAND TOOL ICONS (ACCURATE SVG ICONS)
// =========================================================================

function PhotoshopIcon() {
  return (
    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#001e36] border border-[#00c8ff]/30 shadow-md">
      <span className="font-sans font-black text-sm sm:text-base text-[#31a8ff]">Ps</span>
    </div>
  );
}

function IllustratorIcon() {
  return (
    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#330000] border border-[#ff9a00]/30 shadow-md">
      <span className="font-sans font-black text-sm sm:text-base text-[#ff9a00]">Ai</span>
    </div>
  );
}

function LightroomIcon() {
  return (
    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#001e36] border border-[#31a8ff]/30 shadow-md">
      <span className="font-sans font-black text-sm sm:text-base text-[#31a8ff]">Lr</span>
    </div>
  );
}

function PremiereIcon() {
  return (
    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#00005b] border border-[#ea77ff]/30 shadow-md">
      <span className="font-sans font-black text-sm sm:text-base text-[#ea77ff]">Pr</span>
    </div>
  );
}

function FigmaIcon() {
  return (
    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-black border border-white/20 shadow-md">
      <svg viewBox="0 0 38 57" className="h-5 w-5 sm:h-6 sm:w-6" fill="none">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
      </svg>
    </div>
  );
}

function AfterEffectsIcon() {
  return (
    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#00005b] border border-[#9999ff]/30 shadow-md">
      <span className="font-sans font-black text-sm sm:text-base text-[#9999ff]">Ae</span>
    </div>
  );
}

function DaVinciIcon() {
  return (
    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#18181b] border border-white/20 shadow-md">
      <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none">
        <circle cx="8" cy="8" r="4" fill="#EF4444" />
        <circle cx="16" cy="8" r="4" fill="#3B82F6" />
        <circle cx="12" cy="16" r="4" fill="#F59E0B" />
      </svg>
    </div>
  );
}

// CODING TOOLS
function ReactIcon() {
  return (
    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#0f172a] border border-[#00d8ff]/30 shadow-md">
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-5 w-5 sm:h-6 sm:w-6" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
        <g stroke="#00d8ff" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    </div>
  );
}

function NextjsIcon() {
  return (
    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-black border border-white/30 shadow-md">
      <span className="font-sans font-black text-sm sm:text-base text-white tracking-tighter">N</span>
    </div>
  );
}

function TypeScriptIcon() {
  return (
    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#3178c6] border border-white/20 shadow-md">
      <span className="font-sans font-black text-sm sm:text-base text-white">TS</span>
    </div>
  );
}

function TailwindIcon() {
  return (
    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#0b1120] border border-[#38bdf8]/30 shadow-md">
      <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 fill-[#38bdf8]">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    </div>
  );
}

function NodeIcon() {
  return (
    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#052e16] border border-[#22c55e]/30 shadow-md">
      <svg viewBox="0 0 32 32" className="h-5 w-5 sm:h-6 sm:w-6 fill-[#22c55e]">
        <path d="M16 2.5l11.5 6.6v13.8L16 29.5 4.5 22.9V9.1L16 2.5z" />
      </svg>
    </div>
  );
}

function PostgresIcon() {
  return (
    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#1e293b] border border-[#38bdf8]/30 shadow-md">
      <span className="font-sans font-bold text-xs sm:text-sm text-[#38bdf8]">SQL</span>
    </div>
  );
}

function FramerMotionIcon() {
  return (
    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-black border border-white/20 shadow-md">
      <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5 fill-white">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
    </div>
  );
}

// SEO & ADS TOOLS
function SemrushIcon() {
  return (
    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#ff642d] border border-white/30 shadow-md">
      <span className="font-sans font-black text-xs sm:text-sm text-white tracking-tight">SEM</span>
    </div>
  );
}

function AhrefsIcon() {
  return (
    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#0052cc] border border-white/30 shadow-md">
      <span className="font-sans font-black text-sm sm:text-base text-white">a</span>
    </div>
  );
}

function GoogleAdsIcon() {
  return (
    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-white border border-zinc-200 shadow-md">
      <div className="flex items-center gap-0.5">
        <div className="h-4 w-2 rounded-full bg-[#4285F4] transform -rotate-12" />
        <div className="h-5 w-2 rounded-full bg-[#FBBC05] transform rotate-12" />
        <div className="h-2 w-2 rounded-full bg-[#34A853]" />
      </div>
    </div>
  );
}

function MetaAdsIcon() {
  return (
    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#0081fb] border border-white/30 shadow-md">
      <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 fill-white">
        <path d="M12 4.332c-3.15 0-5.83 1.96-7.39 4.888C3.12 11.96 2 15.02 2 17.668c0 2.21 1.79 4 4 4 2.22 0 4.19-1.22 5.25-3.04 1.06 1.82 3.03 3.04 5.25 3.04 2.21 0 4-1.79 4-4 0-2.65-1.12-5.71-2.61-8.448C17.83 6.292 15.15 4.332 12 4.332zm-4.75 14.5c-1.24 0-2.25-1.01-2.25-2.25 0-1.89.84-4.28 2.05-6.52 1.15-2.12 2.65-3.56 4.2-3.56.59 0 1.14.21 1.6.59-1.39 2.2-3.23 6.55-5.6 11.74zm9.5 0c-2.37-5.19-4.21-9.54-5.6-11.74.46-.38 1.01-.59 1.6-.59 1.55 0 3.05 1.44 4.2 3.56 1.21 2.24 2.05 4.63 2.05 6.52 0 1.24-1.01 2.25-2.25 2.25z" />
      </svg>
    </div>
  );
}

function GA4Icon() {
  return (
    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#f59e0b] border border-white/30 shadow-md">
      <div className="flex items-end gap-1 h-5">
        <div className="w-1.5 h-2 bg-white rounded-t" />
        <div className="w-1.5 h-3.5 bg-white rounded-t" />
        <div className="w-1.5 h-5 bg-white rounded-t" />
      </div>
    </div>
  );
}

function SearchConsoleIcon() {
  return (
    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-white border border-zinc-200 shadow-md">
      <span className="font-sans font-black text-xs sm:text-sm text-[#4285F4]">GSC</span>
    </div>
  );
}

// =========================================================================
// 2. LAYER CONFIGURATIONS
// =========================================================================

interface LayerData {
  id: "creative" | "coding" | "growth";
  title: string;
  tagline: string;
  description: string;
  bulletColor: string;
  plateBg: string;
  plateBorder: string;
  plateShadow: string;
  plateLabel: string;
  labelColor: string;
  dotColor: string;
  icons: React.FC[];
}

const LAYERS: LayerData[] = [
  {
    id: "creative",
    title: "Creative & Post-Production Suite",
    tagline: "ONE PLATFORM, THREE LAYERS — BUILT FOR PRESTIGE & PERFORMANCE",
    description:
      "Enterprise design and visual production pipeline powered by Adobe Creative Cloud (Photoshop, Lightroom, Illustrator, Premiere Pro, After Effects), Figma design systems, and DaVinci cinema color grading.",
    bulletColor: "bg-zinc-950",
    plateBg: "bg-[#16161a]",
    plateBorder: "border-zinc-700/60",
    plateShadow: "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65)]",
    plateLabel: "Creative & Design Suite",
    labelColor: "text-zinc-300",
    dotColor: "rgba(255, 255, 255, 0.12)",
    icons: [
      PhotoshopIcon,
      IllustratorIcon,
      LightroomIcon,
      PremiereIcon,
      FigmaIcon,
      AfterEffectsIcon,
      DaVinciIcon,
    ],
  },
  {
    id: "coding",
    title: "Modern Engineering & Architecture",
    tagline: "NEXT-GEN FULL STACK ARCHITECTURE",
    description:
      "High-velocity web development powered by React, Next.js Turbopack, TypeScript, Tailwind CSS, PostgreSQL, and Framer Motion micro-interactions engineered for sub-second load times.",
    bulletColor: "bg-[#2563eb]",
    plateBg: "bg-gradient-to-br from-[#2563eb] to-[#1d4ed8]",
    plateBorder: "border-blue-400/40",
    plateShadow: "shadow-[0_25px_60px_-15px_rgba(37,99,235,0.45)]",
    plateLabel: "Engineering & Frontend",
    labelColor: "text-blue-100",
    dotColor: "rgba(255, 255, 255, 0.18)",
    icons: [
      ReactIcon,
      NextjsIcon,
      TypeScriptIcon,
      TailwindIcon,
      NodeIcon,
      PostgresIcon,
      FramerMotionIcon,
    ],
  },
  {
    id: "growth",
    title: "SEO, Performance Ads & Analytics",
    tagline: "DATA & GROWTH ENGINE",
    description:
      "Precision client acquisition infrastructure leveraging SEMrush, Ahrefs, Google Ads, Meta Ads Manager, Google Analytics 4, and Search Console to capture high-intent inquiries and scale revenue.",
    bulletColor: "bg-zinc-400",
    plateBg: "bg-white",
    plateBorder: "border-zinc-200/90",
    plateShadow: "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]",
    plateLabel: "Data, Ads & Context",
    labelColor: "text-zinc-700",
    dotColor: "rgba(0, 0, 0, 0.08)",
    icons: [
      SemrushIcon,
      AhrefsIcon,
      GoogleAdsIcon,
      MetaAdsIcon,
      GA4Icon,
      SearchConsoleIcon,
    ],
  },
];

// =========================================================================
// 3. MAIN TECH STACK COMPONENT
// =========================================================================

export function TechStackSection() {
  const [activeLayer, setActiveLayer] = useState<"creative" | "coding" | "growth">("creative");

  return (
    <section
      id="tech-stack"
      className="relative bg-[#FAFAFC] py-20 sm:py-28 lg:py-36 border-b border-zinc-200/80 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Top Header Row Matching Uploaded Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 lg:mb-24">
          {/* Main Title on Left */}
          <div className="lg:col-span-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 font-editorial leading-[1.12]">
              The production stack, <br />
              <span className="font-editorial italic font-normal text-zinc-800">
                modernized
              </span>
            </h2>
          </div>

          {/* Descriptive Intro on Right */}
          <div className="lg:col-span-6 lg:pt-2">
            <p className="text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
              We replace fragmented freelancers and outdated processes with unified
              creative suites, modern component architecture, and high-precision ad pipelines
              engineered to drive qualified high-ticket clients.
            </p>
          </div>
        </div>

        {/* 2-Column Main Section: 3D Stack Graphic (Left) + Breakdown (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: 3D ISOMETRIC STACK GRAPHIC */}
          <div className="lg:col-span-7 relative flex items-center justify-center py-6 sm:py-12 select-none">
            {/* Ambient Background Radial Glow */}
            <div className="pointer-events-none absolute -inset-4 sm:-inset-10 bg-radial from-blue-100/40 via-transparent to-transparent blur-3xl opacity-60" />

            {/* Isometric 3D Stage Container */}
            <div
              className="relative w-full max-w-[480px] sm:max-w-[540px] aspect-[4/3] flex items-center justify-center"
              style={{
                perspective: "1200px",
                perspectiveOrigin: "50% 30%",
              }}
            >
              {/* STACKED 3D PLATES CONTAINER */}
              <div
                className="relative w-[300px] sm:w-[380px] h-[220px] sm:h-[260px] transition-transform duration-700 ease-out"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateX(58deg) rotateZ(-38deg) rotateY(0deg)",
                }}
              >
                {/* -------------------------------------------------------- */}
                {/* LAYER 3: BOTTOM PLATE (SEO, Ads & Context - Stone White) */}
                {/* -------------------------------------------------------- */}
                <motion.div
                  onClick={() => setActiveLayer("growth")}
                  animate={{
                    translateZ: activeLayer === "growth" ? 30 : 0,
                    scale: activeLayer === "growth" ? 1.04 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`absolute inset-0 rounded-[28px] sm:rounded-[36px] bg-white border border-zinc-200/90 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.12)] p-4 sm:p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-2xl`}
                  style={{
                    transform: "translateZ(0px)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Surface Dot Matrix Pattern */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[28px] sm:rounded-[36px] opacity-60"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />

                  {/* Surface App Icon Badges Grid */}
                  <div className="relative z-10 grid grid-cols-4 gap-2.5 sm:gap-3 max-w-[80%] pt-1">
                    <SemrushIcon />
                    <AhrefsIcon />
                    <GoogleAdsIcon />
                    <MetaAdsIcon />
                    <GA4Icon />
                    <SearchConsoleIcon />
                  </div>

                  {/* Front Edge Label */}
                  <div className="relative z-10 flex justify-end items-end pt-3 sm:pt-4">
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-700">
                      SEO & Analytics Engine
                    </span>
                  </div>
                </motion.div>

                {/* -------------------------------------------------------- */}
                {/* LAYER 2: MIDDLE PLATE (Coding & Engineering - Blue)     */}
                {/* -------------------------------------------------------- */}
                <motion.div
                  onClick={() => setActiveLayer("coding")}
                  animate={{
                    translateZ:
                      activeLayer === "coding"
                        ? 100
                        : activeLayer === "growth"
                        ? 60
                        : 70,
                    scale: activeLayer === "coding" ? 1.04 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`absolute inset-0 rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] border border-blue-400/40 shadow-[0_30px_70px_-15px_rgba(37,99,235,0.45)] p-4 sm:p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-2xl`}
                  style={{
                    transform: "translateZ(70px)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Surface Dot Matrix Pattern */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[28px] sm:rounded-[36px] opacity-40"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(255, 255, 255, 0.22) 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />

                  {/* Surface App Icon Badges Grid */}
                  <div className="relative z-10 grid grid-cols-4 gap-2.5 sm:gap-3 max-w-[80%] pt-1">
                    <ReactIcon />
                    <NextjsIcon />
                    <TypeScriptIcon />
                    <TailwindIcon />
                    <NodeIcon />
                    <PostgresIcon />
                    <FramerMotionIcon />
                  </div>

                  {/* Front Edge Label */}
                  <div className="relative z-10 flex justify-end items-end pt-3 sm:pt-4">
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-blue-100">
                      Engineering & Frontend
                    </span>
                  </div>
                </motion.div>

                {/* -------------------------------------------------------- */}
                {/* LAYER 1: TOP PLATE (Creative Suite - Dark Graphite)     */}
                {/* -------------------------------------------------------- */}
                <motion.div
                  onClick={() => setActiveLayer("creative")}
                  animate={{
                    translateZ: activeLayer === "creative" ? 170 : 140,
                    scale: activeLayer === "creative" ? 1.04 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`absolute inset-0 rounded-[28px] sm:rounded-[36px] bg-[#16161a] border border-zinc-700/60 shadow-[0_35px_80px_-15px_rgba(0,0,0,0.7)] p-4 sm:p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-2xl`}
                  style={{
                    transform: "translateZ(140px)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Surface Dot Matrix Pattern */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[28px] sm:rounded-[36px] opacity-40"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(255, 255, 255, 0.16) 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />

                  {/* Surface App Icon Badges Grid */}
                  <div className="relative z-10 grid grid-cols-4 gap-2.5 sm:gap-3 max-w-[80%] pt-1">
                    <PhotoshopIcon />
                    <IllustratorIcon />
                    <LightroomIcon />
                    <PremiereIcon />
                    <FigmaIcon />
                    <AfterEffectsIcon />
                    <DaVinciIcon />
                  </div>

                  {/* Front Edge Label */}
                  <div className="relative z-10 flex justify-end items-end pt-3 sm:pt-4">
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-300">
                      Creative & Design Suite
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 3-TIER LAYER BREAKDOWN */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-10 lg:pl-4">
            {/* Monospace Eyebrow Tagline */}
            <div className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
              ONE PLATFORM, THREE LAYERS — BUILT FOR PERFORMANCE & PRESTIGE
            </div>

            {/* List of 3 Layers with Interactive Selection */}
            <div className="space-y-8 sm:space-y-10">
              {LAYERS.map((layer) => {
                const isActive = activeLayer === layer.id;

                return (
                  <div
                    key={layer.id}
                    onClick={() => setActiveLayer(layer.id)}
                    className={`group cursor-pointer transition-all duration-300 p-4 -mx-4 rounded-2xl ${
                      isActive ? "bg-white/80 shadow-sm border border-zinc-200/80" : "hover:bg-zinc-100/60"
                    }`}
                  >
                    {/* Item Title with Colored Square Bullet */}
                    <div className="flex items-center gap-3.5 mb-2.5">
                      <div
                        className={`h-2.5 w-2.5 rounded-sm ${layer.bulletColor} transition-transform duration-300 ${
                          isActive ? "scale-125" : "group-hover:scale-110"
                        }`}
                      />
                      <h3
                        className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                          isActive ? "text-zinc-950 font-editorial" : "text-zinc-800 group-hover:text-zinc-950 font-editorial"
                        }`}
                      >
                        {layer.title}
                      </h3>
                    </div>

                    {/* Item Description */}
                    <p className="text-sm sm:text-[15px] leading-relaxed text-zinc-600 pl-6 font-sans">
                      {layer.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Discuss Scope Action Button */}
            <div className="pt-2 pl-2">
              <Link
                href="#contact"
                className="relative inline-flex items-center gap-2 rounded-full bg-zinc-950/95 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-all duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_6px_20px_rgba(249,87,33,0.35)] active:scale-95 group overflow-hidden"
              >
                <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                <span>Explore Full Capabilities</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
