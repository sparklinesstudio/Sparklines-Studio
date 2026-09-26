"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// =========================================================================
// 1. TOOL DEFINITIONS & LOGO ASSETS
// =========================================================================

interface ToolItem {
  name: string;
  logo: string;
}

interface LayerData {
  id: "creative" | "coding" | "growth";
  title: string;
  tagline: string;
  summary: string;
  description: string;
  bulletColor: string;
  plateBg: string;
  plateBorder: string;
  plateShadow: string;
  plateLabel: string;
  labelColor: string;
  dotColor: string;
  tools: ToolItem[];
}

const LAYERS: LayerData[] = [
  {
    id: "creative",
    title: "Creative & Post-Production Suite",
    tagline: "LAYER 01 — DIGITAL DESIGN & MOTION",
    summary:
      "Enterprise design and visual production pipeline powered by Adobe Photoshop, Lightroom, Illustrator, and After Effects for cinematic brand aesthetics.",
    description:
      "We craft high-fidelity visual identities, luxury photo editing, motion graphics, and vector design systems. From editorial retouching in Lightroom to vector typography in Illustrator and dynamic video reels in After Effects, our creative pipeline delivers prestige quality.",
    bulletColor: "bg-zinc-950",
    plateBg: "bg-[#16161a]",
    plateBorder: "border-zinc-700/60",
    plateShadow: "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65)]",
    plateLabel: "Creative & Design Suite",
    labelColor: "text-zinc-300",
    dotColor: "rgba(255, 255, 255, 0.16)",
    tools: [
      {
        name: "Photoshop",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/960px-Adobe_Photoshop_CC_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      },
      {
        name: "Illustrator",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1280px-Adobe_Illustrator_CC_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      },
      {
        name: "Lightroom",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/960px-Adobe_Photoshop_Lightroom_CC_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      },
      {
        name: "After Effects",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/1280px-Adobe_After_Effects_CC_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      },
    ],
  },
  {
    id: "coding",
    title: "Modern Engineering & Architecture",
    tagline: "LAYER 02 — NEXT-GEN FULL STACK",
    summary:
      "Modern full-stack applications engineered with React, Next.js, Vue, Python, and Ruby for ultra-fast, scalable digital products.",
    description:
      "We build resilient digital infrastructure with modern JavaScript frameworks and robust backend services. By leveraging Next.js Turbopack, React, Vue, Python APIs, and Ruby services, our software scales effortlessly with zero latency under high traffic.",
    bulletColor: "bg-[#2563eb]",
    plateBg: "bg-gradient-to-br from-[#2563eb] to-[#1d4ed8]",
    plateBorder: "border-blue-400/40",
    plateShadow: "shadow-[0_25px_60px_-15px_rgba(37,99,235,0.4)]",
    plateLabel: "Modern Engineering & Code",
    labelColor: "text-blue-100",
    dotColor: "rgba(255, 255, 255, 0.22)",
    tools: [
      {
        name: "React",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20220125121207",
      },
      {
        name: "Next.js",
        logo: "https://images.icon-icons.com/2389/PNG/512/next_js_logo_icon_145038.png",
      },
      {
        name: "Vue.js",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/330px-Vue.js_Logo_2.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      },
      {
        name: "Python",
        logo: "https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png",
      },
      {
        name: "Ruby",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1280px-Ruby_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      },
    ],
  },
  {
    id: "growth",
    title: "SEO, Performance Ads & Analytics",
    tagline: "LAYER 03 — DATA & CLIENT ACQUISITION",
    summary:
      "Precision client acquisition pipeline powered by SEMrush, Ahrefs, Google Ads, Meta Ads, and AI conversational search optimization.",
    description:
      "We orchestrate hyper-targeted multi-channel acquisition campaigns. By pairing competitor intelligence from SEMrush and Ahrefs with high-intent Google Search Ads, targeted Meta portfolio campaigns, and ChatGPT AI search visibility, we capture serious, high-budget client inquiries.",
    bulletColor: "bg-zinc-400",
    plateBg: "bg-white",
    plateBorder: "border-zinc-200/90",
    plateShadow: "shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)]",
    plateLabel: "SEO, Ads & AI Growth",
    labelColor: "text-zinc-700",
    dotColor: "rgba(0, 0, 0, 0.08)",
    tools: [
      {
        name: "SEMrush",
        logo: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/semrush-zme8l9vhze0enwovmg83p.png/semrush-j4srj3ovt2sagrna6kcqb.png?_a=DATAiZAAZAA0",
      },
      {
        name: "Ahrefs",
        logo: "https://www.pngall.com/wp-content/uploads/16/Ahrefs-Logo-PNG-Pic.png",
      },
      {
        name: "Google Ads",
        logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-ads-icon.png",
      },
      {
        name: "Meta Ads",
        logo: "https://pngimg.com/uploads/meta/meta_PNG5.png",
      },
      {
        name: "ChatGPT AI",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/960px-ChatGPT-Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      },
    ],
  },
];

// =========================================================================
// 2. MAIN COMPONENT: TechStackSection
// =========================================================================

export function TechStackSection() {
  const [activeLayer, setActiveLayer] = useState<"creative" | "coding" | "growth">("creative");

  const layerIds: ("creative" | "coding" | "growth")[] = ["creative", "coding", "growth"];

  // Compute 3D elevation and stacking index so active card is always on TOP
  const getLayerStackConfig = (layerId: "creative" | "coding" | "growth") => {
    if (activeLayer === layerId) {
      return {
        translateZ: 130,
        zIndex: 30,
        scale: 1.02,
        opacity: 1,
      };
    }

    const activeIdx = layerIds.indexOf(activeLayer);
    const thisIdx = layerIds.indexOf(layerId);
    const diff = (thisIdx - activeIdx + 3) % 3;

    if (diff === 1) {
      return {
        translateZ: 65,
        zIndex: 20,
        scale: 0.98,
        opacity: 0.92,
      };
    } else {
      return {
        translateZ: 0,
        zIndex: 10,
        scale: 0.94,
        opacity: 0.82,
      };
    }
  };

  return (
    <section
      id="tech-stack"
      className="relative bg-[#FAFAFC] py-14 sm:py-20 lg:py-24 border-b border-zinc-200/80 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Top Header Row Matching Reference Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-start mb-10 sm:mb-14">
          {/* Main Title on Left */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 font-editorial leading-[1.14]">
              The marketing stack, <br />
              <span className="font-editorial italic font-normal text-zinc-800">
                modernized
              </span>
            </h2>
          </div>

          {/* Descriptive Intro on Right */}
          <div className="lg:col-span-6 lg:pt-1">
            <p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
              We replace fragmented workflows and generic templates with integrated
              creative post-production, modern coding architectures, and high-intent acquisition engines
              engineered for luxury studios.
            </p>
          </div>
        </div>

        {/* 2-Column Main Section: 3D Stack Graphic (Left) + Breakdown (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: 3D ISOMETRIC STACK GRAPHIC */}
          <div className="lg:col-span-7 relative flex items-center justify-center select-none overflow-hidden sm:overflow-visible">
            {/* Ambient Background Radial Glow */}
            <div className="pointer-events-none absolute -inset-4 bg-radial from-blue-100/30 via-transparent to-transparent blur-3xl opacity-50" />

            {/* Isometric 3D Stage Container */}
            <div
              className="relative w-full max-w-[440px] sm:max-w-[480px] h-[260px] xs:h-[280px] sm:h-[320px] md:h-[350px] flex items-center justify-center"
              style={{
                perspective: "1100px",
                perspectiveOrigin: "50% 30%",
              }}
            >
              {/* STACKED 3D PLATES CONTAINER */}
              <div
                className="relative w-[240px] xs:w-[270px] sm:w-[330px] md:w-[360px] h-[170px] xs:h-[190px] sm:h-[220px] md:h-[240px] transition-transform duration-700 ease-out"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateX(58deg) rotateZ(-38deg) rotateY(0deg)",
                }}
              >
                {LAYERS.map((layer) => {
                  const stackConfig = getLayerStackConfig(layer.id);
                  const isTop = activeLayer === layer.id;

                  return (
                    <motion.div
                      key={layer.id}
                      onClick={() => setActiveLayer(layer.id)}
                      animate={{
                        translateZ: stackConfig.translateZ,
                        scale: stackConfig.scale,
                        opacity: stackConfig.opacity,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`absolute inset-0 rounded-[22px] xs:rounded-[26px] sm:rounded-[32px] ${layer.plateBg} ${layer.plateBorder} border ${layer.plateShadow} p-3.5 xs:p-4 sm:p-6 flex flex-col justify-between cursor-pointer transition-shadow duration-300 hover:shadow-2xl`}
                      style={{
                        zIndex: stackConfig.zIndex,
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* Surface Dot Matrix Pattern */}
                      <div
                        className="pointer-events-none absolute inset-0 rounded-[22px] xs:rounded-[26px] sm:rounded-[32px]"
                        style={{
                          backgroundImage: `radial-gradient(${layer.dotColor} 1.2px, transparent 1.2px)`,
                          backgroundSize: "14px 14px",
                        }}
                      />

                      {/* Active Indicator Top Edge Light */}
                      {isTop && (
                        <div className="pointer-events-none absolute inset-x-6 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                      )}

                      {/* Surface App Icon Badges Grid */}
                      <div className="relative z-10 grid grid-cols-4 gap-2 xs:gap-2.5 sm:gap-3 max-w-[90%] pt-0.5">
                        {layer.tools.map((tool) => (
                          <div
                            key={tool.name}
                            title={tool.name}
                            className={`flex h-9 w-9 xs:h-10 xs:w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg xs:rounded-xl sm:rounded-2xl ${
                              layer.id === "creative"
                                ? "bg-zinc-900/90 border border-zinc-700/80 shadow-md p-1.5 xs:p-2"
                                : "bg-white/95 border border-white/60 shadow-md p-1.5 xs:p-2"
                            } transition-transform duration-200 hover:scale-110`}
                          >
                            <img
                              src={tool.logo}
                              alt={tool.name}
                              className="h-full w-full object-contain"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Front Edge Label */}
                      <div className="relative z-10 flex justify-end items-end pt-2 sm:pt-3">
                        <span className={`text-[10px] xs:text-xs sm:text-sm font-semibold tracking-wide ${layer.labelColor}`}>
                          {layer.plateLabel}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: DYNAMIC CONTENT BASED ON TOP ACTIVE LAYER */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pl-2">
            {/* Monospace Eyebrow Tagline */}
            <div className="text-[11px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
              ONE PLATFORM, THREE LAYERS — BUILT FOR PERFORMANCE & PRESTIGE
            </div>

            {/* List of 3 Layers with Interactive Selection */}
            <div className="space-y-4 sm:space-y-5">
              {LAYERS.map((layer) => {
                const isActive = activeLayer === layer.id;

                return (
                  <div
                    key={layer.id}
                    onClick={() => setActiveLayer(layer.id)}
                    className={`group cursor-pointer transition-all duration-300 p-4 sm:p-5 -mx-3 sm:-mx-4 rounded-xl sm:rounded-2xl ${
                      isActive
                        ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-zinc-200/90 ring-1 ring-zinc-950/5"
                        : "hover:bg-zinc-100/60 opacity-75 hover:opacity-100"
                    }`}
                  >
                    {/* Item Title with Colored Square Bullet */}
                    <div className="flex items-center gap-3 mb-1.5">
                      <div
                        className={`h-2.5 w-2.5 rounded-sm ${layer.bulletColor} transition-transform duration-300 ${
                          isActive ? "scale-125" : "group-hover:scale-110"
                        }`}
                      />
                      <h3
                        className={`text-lg sm:text-xl font-bold tracking-tight transition-colors font-editorial ${
                          isActive ? "text-zinc-950" : "text-zinc-700 group-hover:text-zinc-950"
                        }`}
                      >
                        {layer.title}
                      </h3>
                    </div>

                    {/* Active Layer Dynamic Narrative */}
                    <AnimatePresence mode="wait">
                      {isActive ? (
                        <motion.div
                          key="active-desc"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 pl-5.5 font-sans mb-3">
                            {layer.description}
                          </p>

                          {/* Active Tools Pill List */}
                          <div className="flex flex-wrap gap-1.5 pl-5.5 pt-0.5">
                            {layer.tools.map((tool) => (
                              <span
                                key={tool.name}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200"
                              >
                                <img
                                  src={tool.logo}
                                  alt={tool.name}
                                  className="h-3 w-3 object-contain"
                                  loading="lazy"
                                />
                                {tool.name}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ) : (
                        <p className="text-xs text-zinc-500 pl-5.5 font-sans line-clamp-2">
                          {layer.summary}
                        </p>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Discuss Scope Action Button */}
            <div className="pt-1 pl-1">
              <Link
                href="#contact"
                className="relative inline-flex items-center gap-2 rounded-full bg-zinc-950/95 px-6 sm:px-7 py-3 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-all duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_6px_20px_rgba(249,87,33,0.35)] active:scale-95 group overflow-hidden"
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
