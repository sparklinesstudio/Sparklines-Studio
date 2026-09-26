"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, Layers, ChevronRight } from "lucide-react";
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
  tileBg: string;
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
    plateShadow: "shadow-[0_35px_80px_-15px_rgba(0,0,0,0.7)]",
    plateLabel: "Creative & Design Suite",
    labelColor: "text-zinc-300",
    dotColor: "rgba(255, 255, 255, 0.16)",
    tileBg: "bg-zinc-900/90 border-zinc-700/60 shadow-lg",
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
      "Modern full-stack applications engineered with React, Next.js, Vue, Python, and Ruby on Rails for ultra-fast, scalable digital products.",
    description:
      "We build resilient digital infrastructure with modern JavaScript frameworks and robust backend services. By leveraging Next.js Turbopack, React, Vue, Python APIs, and Ruby services, our software scales effortlessly with zero latency under high traffic.",
    bulletColor: "bg-[#2563eb]",
    plateBg: "bg-gradient-to-br from-[#2563eb] to-[#1d4ed8]",
    plateBorder: "border-blue-400/40",
    plateShadow: "shadow-[0_30px_70px_-15px_rgba(37,99,235,0.45)]",
    plateLabel: "Modern Engineering & Code",
    labelColor: "text-blue-100",
    dotColor: "rgba(255, 255, 255, 0.22)",
    tileBg: "bg-white/95 border-white/40 shadow-lg",
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
    plateShadow: "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]",
    plateLabel: "SEO, Ads & AI Growth",
    labelColor: "text-zinc-700",
    dotColor: "rgba(0, 0, 0, 0.08)",
    tileBg: "bg-white border-zinc-200/80 shadow-md",
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

  // Cycle to next card when tapping the top plate or clicking next
  const layerIds: ("creative" | "coding" | "growth")[] = ["creative", "coding", "growth"];
  const cycleNextLayer = () => {
    const currentIndex = layerIds.indexOf(activeLayer);
    const nextIndex = (currentIndex + 1) % layerIds.length;
    setActiveLayer(layerIds[nextIndex]);
  };

  // Compute 3D elevation and stacking index so active card is always on TOP
  const getLayerStackConfig = (layerId: "creative" | "coding" | "growth") => {
    if (activeLayer === layerId) {
      // Top layer: elevated and on top
      return {
        translateZ: 150,
        zIndex: 30,
        scale: 1.03,
        opacity: 1,
      };
    }

    // Determine secondary and tertiary order relative to active layer
    const activeIdx = layerIds.indexOf(activeLayer);
    const thisIdx = layerIds.indexOf(layerId);
    const diff = (thisIdx - activeIdx + 3) % 3;

    if (diff === 1) {
      // Middle card
      return {
        translateZ: 75,
        zIndex: 20,
        scale: 0.98,
        opacity: 0.92,
      };
    } else {
      // Bottom card
      return {
        translateZ: 0,
        zIndex: 10,
        scale: 0.94,
        opacity: 0.82,
      };
    }
  };

  const currentActiveLayerData = LAYERS.find((l) => l.id === activeLayer)!;

  return (
    <section
      id="tech-stack"
      className="relative bg-[#FAFAFC] py-20 sm:py-28 lg:py-36 border-b border-zinc-200/80 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Top Header Row Matching Reference Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14 lg:mb-20">
          {/* Main Title on Left */}
          <div className="lg:col-span-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 font-editorial leading-[1.12]">
              The marketing stack, <br />
              <span className="font-editorial italic font-normal text-zinc-800">
                modernized
              </span>
            </h2>
          </div>

          {/* Descriptive Intro on Right */}
          <div className="lg:col-span-6 lg:pt-2">
            <p className="text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
              We replace fragmented workflows and generic templates with integrated
              creative post-production, modern coding architectures, and high-intent acquisition engines
              engineered for luxury studios.
            </p>
          </div>
        </div>

        {/* 2-Column Main Section: 3D Stack Graphic (Left) + Breakdown (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: 3D ISOMETRIC STACK GRAPHIC */}
          <div className="lg:col-span-7 relative flex flex-col items-center justify-center py-6 sm:py-10 select-none">
            {/* Ambient Background Radial Glow */}
            <div className="pointer-events-none absolute -inset-4 sm:-inset-10 bg-radial from-blue-100/40 via-transparent to-transparent blur-3xl opacity-60" />

            {/* Click-to-cycle Hint Pill */}
            <div className="mb-6 flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md px-3.5 py-1.5 text-xs font-medium text-zinc-600 border border-zinc-200/80 shadow-sm cursor-pointer hover:bg-white transition-colors"
              onClick={cycleNextLayer}
            >
              <Layers className="h-3.5 w-3.5 text-[#f95721]" />
              <span>Click any card to bring to top</span>
              <ChevronRight className="h-3 w-3 text-zinc-400" />
            </div>

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
                        duration: 0.55,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`absolute inset-0 rounded-[28px] sm:rounded-[36px] ${layer.plateBg} ${layer.plateBorder} border ${layer.plateShadow} p-5 sm:p-7 flex flex-col justify-between cursor-pointer transition-shadow duration-300 hover:shadow-2xl`}
                      style={{
                        zIndex: stackConfig.zIndex,
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* Surface Dot Matrix Pattern */}
                      <div
                        className="pointer-events-none absolute inset-0 rounded-[28px] sm:rounded-[36px]"
                        style={{
                          backgroundImage: `radial-gradient(${layer.dotColor} 1.2px, transparent 1.2px)`,
                          backgroundSize: "16px 16px",
                        }}
                      />

                      {/* Active Indicator Top Edge Light */}
                      {isTop && (
                        <div className="pointer-events-none absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                      )}

                      {/* Surface App Icon Badges Grid (Exact Logos Provided by User) */}
                      <div className="relative z-10 grid grid-cols-4 gap-2.5 sm:gap-3.5 max-w-[85%] pt-1">
                        {layer.tools.map((tool) => (
                          <div
                            key={tool.name}
                            title={tool.name}
                            className={`flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-xl sm:rounded-2xl ${
                              layer.id === "creative"
                                ? "bg-zinc-900/90 border border-zinc-700/80 shadow-md p-2"
                                : "bg-white/95 border border-white/60 shadow-md p-2"
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
                      <div className="relative z-10 flex justify-end items-end pt-3 sm:pt-4">
                        <span className={`text-xs sm:text-sm font-semibold tracking-wide ${layer.labelColor}`}>
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
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 lg:pl-4">
            {/* Monospace Eyebrow Tagline */}
            <div className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
              ONE PLATFORM, THREE LAYERS — BUILT FOR PERFORMANCE & PRESTIGE
            </div>

            {/* List of 3 Layers with Interactive Selection */}
            <div className="space-y-6 sm:space-y-8">
              {LAYERS.map((layer) => {
                const isActive = activeLayer === layer.id;

                return (
                  <div
                    key={layer.id}
                    onClick={() => setActiveLayer(layer.id)}
                    className={`group cursor-pointer transition-all duration-300 p-5 -mx-4 rounded-2xl ${
                      isActive
                        ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-zinc-200/90 ring-1 ring-zinc-950/5"
                        : "hover:bg-zinc-100/70 opacity-75 hover:opacity-100"
                    }`}
                  >
                    {/* Item Title with Colored Square Bullet */}
                    <div className="flex items-center gap-3.5 mb-2">
                      <div
                        className={`h-2.5 w-2.5 rounded-sm ${layer.bulletColor} transition-transform duration-300 ${
                          isActive ? "scale-125" : "group-hover:scale-110"
                        }`}
                      />
                      <h3
                        className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors font-editorial ${
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
                          transition={{ duration: 0.35 }}
                        >
                          <p className="text-sm sm:text-[15px] leading-relaxed text-zinc-600 pl-6 font-sans mb-3.5">
                            {layer.description}
                          </p>

                          {/* Active Tools Pill List */}
                          <div className="flex flex-wrap gap-2 pl-6 pt-1">
                            {layer.tools.map((tool) => (
                              <span
                                key={tool.name}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200"
                              >
                                <img
                                  src={tool.logo}
                                  alt={tool.name}
                                  className="h-3.5 w-3.5 object-contain"
                                  loading="lazy"
                                />
                                {tool.name}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ) : (
                        <p className="text-xs sm:text-sm text-zinc-500 pl-6 font-sans line-clamp-2">
                          {layer.summary}
                        </p>
                      )}
                    </AnimatePresence>
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
