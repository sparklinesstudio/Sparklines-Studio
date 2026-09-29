"use client";

import React, { useState, useEffect } from "react";
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
  layerNum: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  bulletColor: string;
  glowColor: string;
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
    layerNum: "01",
    title: "Creative & Post-Production Suite",
    tagline: "LAYER 01 — DIGITAL DESIGN, 3D & MOTION",
    summary:
      "Enterprise design and visual production pipeline powered by Adobe Photoshop, Illustrator, Premiere Pro, After Effects, DaVinci Resolve, Final Cut Pro, Blender, and Canva.",
    description:
      "We craft high-fidelity visual identities, luxury photo editing, 3D spatial motion, and cinema-grade video grading. From 3D CGI rendering in Blender to RAW color grading in DaVinci Resolve, editorial video cuts in Premiere Pro & Final Cut Pro, and vector typography in Illustrator, our creative pipeline delivers prestige quality.",
    bulletColor: "bg-zinc-950",
    glowColor: "from-orange-500/20 via-orange-500/5 to-transparent",
    plateBg: "bg-gradient-to-br from-[#1a1a1f] via-[#131317] to-[#0c0c0f]",
    plateBorder: "border-zinc-700/70",
    plateShadow: "shadow-[0_30px_70px_-15px_rgba(0,0,0,0.75)]",
    plateLabel: "Creative, Motion & 3D Suite",
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
        name: "Premiere Pro",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1280px-Adobe_Premiere_Pro_CC_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      },
      {
        name: "After Effects",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/1280px-Adobe_After_Effects_CC_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      },
      {
        name: "DaVinci Resolve",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
      },
      {
        name: "Final Cut Pro",
        logo: "https://static.wikia.nocookie.net/ipod/images/4/48/Final_Cut_Pro_10.5_icon.png/revision/latest?cb=20210301093845",
      },
      {
        name: "Blender",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/3840px-Blender_logo_no_text.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      },
      {
        name: "Canva",
        logo: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBb8YkqrmoFjcMUJULGOJelCR90tAYHMSoZgl4SvMca1c11ZbSdWRWKmpW4bu1ZTnctmNR_L.31zj.1uNN3gpno0-&format=source",
      },
    ],
  },
  {
    id: "coding",
    layerNum: "02",
    title: "Modern Engineering & Architecture",
    tagline: "LAYER 02 — NEXT-GEN FULL STACK & COMMERCE",
    summary:
      "Modern web applications and headless e-commerce engineered with React, Next.js, Vue, Angular, WordPress, Shopify, Python, and Ruby.",
    description:
      "We build resilient digital infrastructure and bespoke e-commerce platforms. By leveraging Next.js Turbopack, React, Vue, Angular frontend architectures alongside high-converting Shopify flagships, custom WordPress builds, Python APIs, and Ruby services, our digital builds scale effortlessly under high volume.",
    bulletColor: "bg-[#2563eb]",
    glowColor: "from-blue-500/20 via-blue-500/5 to-transparent",
    plateBg: "bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#1e40af]",
    plateBorder: "border-blue-400/40",
    plateShadow: "shadow-[0_30px_70px_-15px_rgba(37,99,235,0.45)]",
    plateLabel: "Engineering & Headless Stack",
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
        name: "Angular",
        logo: "https://images.seeklogo.com/logo-png/33/2/angular-logo-png_seeklogo-331629.png",
      },
      {
        name: "WordPress",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
      },
      {
        name: "Shopify",
        logo: "https://cdn.iconscout.com/icon/free/png-256/free-shopify-logo-icon-svg-download-png-2945149.png?f=webp",
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
    layerNum: "03",
    title: "SEO, Performance Ads & Automation",
    tagline: "LAYER 03 — DATA, ADS, AUTOMATION & GEO",
    summary:
      "Precision client acquisition pipeline powered by SEMrush, Ahrefs, Screaming Frog, Google Ads, Meta Ads, Zapier, ChatGPT, and Gemini.",
    description:
      "We orchestrate hyper-targeted multi-channel acquisition campaigns and seamless workflow automations. By combining technical site audits via Screaming Frog and competitor intelligence from SEMrush and Ahrefs with high-intent Google Search Ads, targeted Meta campaigns, Zapier automated client funnels, and Generative Engine Optimization (GEO) across ChatGPT and Gemini, we capture high-budget client inquiries.",
    bulletColor: "bg-[#f95721]",
    glowColor: "from-orange-500/20 via-orange-500/5 to-transparent",
    plateBg: "bg-gradient-to-br from-white via-zinc-50 to-zinc-100",
    plateBorder: "border-zinc-200/90",
    plateShadow: "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]",
    plateLabel: "SEO, Ads & Automation Growth",
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
        name: "Screaming Frog",
        logo: "https://vectorseek.com/wp-content/uploads/2023/11/Screaming-Frog-Logo-Vector.svg--290x300.png",
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
        name: "Zapier",
        logo: "https://static.cdnlogo.com/logos/z/80/zapier_thumb.png",
      },
      {
        name: "ChatGPT",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/960px-ChatGPT-Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      },
      {
        name: "Gemini",
        logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png",
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

  // -----------------------------------------------------------------------
  // AUTOMATIC 5-SECOND CARD CYCLING
  // Cycles every 5 seconds continuously. Hovering never resets the timer.
  // Clicking a card switches immediately and starts a fresh 5-second cycle.
  // -----------------------------------------------------------------------
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLayer((current) => {
        if (current === "creative") return "coding";
        if (current === "coding") return "growth";
        return "creative";
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [activeLayer]);

  // Compute 3D elevation and stacking index so active card is always on TOP
  const getLayerStackConfig = (layerId: "creative" | "coding" | "growth") => {
    if (activeLayer === layerId) {
      return {
        translateZ: 110,
        zIndex: 30,
        scale: 1.025,
        opacity: 1,
      };
    }

    const activeIdx = layerIds.indexOf(activeLayer);
    const thisIdx = layerIds.indexOf(layerId);
    const diff = (thisIdx - activeIdx + 3) % 3;

    if (diff === 1) {
      return {
        translateZ: 55,
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
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-start mb-8 sm:mb-12">
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

        {/* Mobile / Tablet Quick Layer Switcher */}
        <div className="flex sm:hidden items-center justify-center gap-1.5 p-1 bg-zinc-200/70 rounded-full mb-6 max-w-sm mx-auto">
          {LAYERS.map((layer) => {
            const isActive = activeLayer === layer.id;
            const shortName =
              layer.id === "creative"
                ? "Creative"
                : layer.id === "coding"
                ? "Coding"
                : "Growth & AI";

            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => {
                  setActiveLayer(layer.id);
                }}
                className={`flex-1 py-1.5 px-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-white text-zinc-950 shadow-sm"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {shortName}
              </button>
            );
          })}
        </div>

        {/* 2-Column Main Section: 3D Stack Graphic (Left) + Breakdown (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: FULLY RESPONSIVE 3D ISOMETRIC STACK GRAPHIC */}
          <div className="lg:col-span-7 relative flex items-center justify-center select-none py-6 sm:py-8">
            {/* Ambient Dynamic Background Glow */}
            <div
              className={`pointer-events-none absolute -inset-6 bg-gradient-to-r ${
                activeLayer === "creative"
                  ? "from-orange-500/15 via-amber-500/5 to-transparent"
                  : activeLayer === "coding"
                  ? "from-blue-500/15 via-indigo-500/5 to-transparent"
                  : "from-zinc-500/10 via-orange-500/5 to-transparent"
              } blur-3xl transition-colors duration-700 opacity-60`}
            />

            {/* Isometric 3D Stage Container */}
            <div
              className="relative w-full max-w-[360px] sm:max-w-[460px] md:max-w-[500px] lg:max-w-[540px] h-[280px] sm:h-[350px] md:h-[390px] lg:h-[420px] flex items-center justify-center"
              style={{
                perspective: "1100px",
                perspectiveOrigin: "50% 32%",
              }}
            >
              {/* STACKED 3D PLATES CONTAINER with responsive tilt */}
              <div
                className="relative w-[260px] sm:w-[340px] md:w-[390px] lg:w-[430px] h-[190px] sm:h-[245px] md:h-[275px] lg:h-[295px] transition-transform duration-700 ease-out"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateX(50deg) rotateZ(-30deg) rotateY(0deg)",
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
                      className={`absolute inset-0 rounded-2xl sm:rounded-3xl ${layer.plateBg} ${layer.plateBorder} border ${layer.plateShadow} p-3.5 sm:p-5 md:p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-2xl`}
                      style={{
                        zIndex: stackConfig.zIndex,
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* Surface Dot Matrix Pattern */}
                      <div
                        className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl"
                        style={{
                          backgroundImage: `radial-gradient(${layer.dotColor} 1.2px, transparent 1.2px)`,
                          backgroundSize: "14px 14px",
                        }}
                      />

                      {/* Active Indicator Top Edge Light Bevel */}
                      {isTop && (
                        <div className="pointer-events-none absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
                      )}

                      {/* Plate Top Bar: Layer Badge */}
                      <div className="relative z-10 flex items-center justify-between pb-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`flex h-2 w-2 rounded-full ${
                              layer.id === "creative"
                                ? "bg-[#f95721] animate-pulse"
                                : layer.id === "coding"
                                ? "bg-cyan-300 animate-pulse"
                                : "bg-emerald-500 animate-pulse"
                            }`}
                          />
                          <span className={`text-[10px] sm:text-xs font-bold tracking-wider uppercase font-mono ${
                            layer.id === "creative"
                              ? "text-zinc-400"
                              : layer.id === "coding"
                              ? "text-blue-200"
                              : "text-zinc-500"
                          }`}>
                            LAYER {layer.layerNum}
                          </span>
                        </div>

                        <span className={`text-[10px] sm:text-xs font-semibold tracking-wide ${layer.labelColor}`}>
                          {layer.plateLabel}
                        </span>
                      </div>

                      {/* Surface App Icon Badges Grid (Enhanced UI with all new tools) */}
                      <div className="relative z-10 grid grid-cols-5 gap-1.5 sm:gap-2.5 md:gap-3 max-w-full my-auto py-1">
                        {layer.tools.map((tool) => (
                          <div
                            key={tool.name}
                            title={tool.name}
                            className={`flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-lg sm:rounded-xl md:rounded-2xl ${
                              layer.id === "creative"
                                ? "bg-zinc-800/90 border border-zinc-700/80 shadow-[0_4px_12px_rgba(0,0,0,0.5)] p-1.5 sm:p-2"
                                : layer.id === "coding"
                                ? "bg-white/95 border border-white/60 shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-1.5 sm:p-2"
                                : "bg-white border border-zinc-200/90 shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-1.5 sm:p-2"
                            } transition-transform duration-200 hover:scale-115`}
                          >
                            <img
                              src={tool.logo}
                              alt={tool.name}
                              className="h-full w-full object-contain"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Front Edge Subtle Accent */}
                      <div className="relative z-10 flex justify-between items-center pt-0.5">
                        <span className={`text-[9px] sm:text-[10px] uppercase tracking-wider font-mono opacity-60 ${
                          layer.id === "creative"
                            ? "text-zinc-400"
                            : layer.id === "coding"
                            ? "text-blue-200"
                            : "text-zinc-500"
                        }`}>
                          {layer.tools.length} PRODUCTION ENGINES
                        </span>
                        <span className="text-[10px] text-zinc-400 font-mono">
                          {isTop ? "ACTIVE" : "CLICK TO EXPAND"}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: DYNAMIC CONTENT BASED ON TOP ACTIVE LAYER */}
          {/* Note: As requested, tool logos are removed from this right column */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5 lg:pl-2">
            {/* Monospace Eyebrow Tagline */}
            <div className="text-[11px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
              ONE PLATFORM, THREE LAYERS — BUILT FOR PERFORMANCE & PRESTIGE
            </div>

            {/* List of 3 Layers with Interactive Selection & 5-Second Progress */}
            <div className="space-y-3 sm:space-y-4">
              {LAYERS.map((layer) => {
                const isActive = activeLayer === layer.id;

                return (
                  <div
                    key={layer.id}
                    onClick={() => {
                      setActiveLayer(layer.id);
                    }}
                    className={`group cursor-pointer transition-all duration-300 p-4 sm:p-5 rounded-2xl relative overflow-hidden ${
                      isActive
                        ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-zinc-200/90 ring-1 ring-zinc-950/5"
                        : "hover:bg-zinc-100/60 opacity-80 hover:opacity-100 border border-transparent"
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
                        className={`text-base sm:text-lg lg:text-xl font-bold tracking-tight transition-colors font-editorial ${
                          isActive ? "text-zinc-950" : "text-zinc-700 group-hover:text-zinc-950"
                        }`}
                      >
                        {layer.title}
                      </h3>
                    </div>

                    {/* Active Layer Dynamic Narrative (Clean text, NO logos on the right) */}
                    <AnimatePresence mode="wait">
                      {isActive ? (
                        <motion.div
                          key="active-desc"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 pl-5.5 font-sans">
                            {layer.description}
                          </p>
                        </motion.div>
                      ) : (
                        <p className="text-xs text-zinc-500 pl-5.5 font-sans line-clamp-2">
                          {layer.summary}
                        </p>
                      )}
                    </AnimatePresence>

                    {/* 5-Second Visual Progress Indicator under Active Card (Uninterrupted by hover) */}
                    {isActive && (
                      <motion.div
                        key={`timer-${activeLayer}`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="h-[2px] bg-[#f95721] rounded-full mt-3.5"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Discuss Scope Action Button */}
            <div className="pt-2">
              <Link
                href="#contact"
                className="relative inline-flex items-center gap-2 rounded-full bg-zinc-950/95 px-6 sm:px-7 py-3 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-all duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_6px_20px_rgba(249,87,33,0.35)] active:scale-95 group overflow-hidden"
              >
                <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />
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
