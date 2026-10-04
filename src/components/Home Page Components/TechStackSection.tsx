"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, Transition } from "framer-motion";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
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
  accentColor: string;
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
    glowColor: "from-orange-500/25 via-amber-500/10 to-transparent",
    plateBg: "bg-gradient-to-br from-[#1a1a22] via-[#131318] to-[#0c0c10]",
    plateBorder: "border-zinc-600/80",
    plateShadow: "shadow-[0_30px_70px_-15px_rgba(0,0,0,0.75)]",
    plateLabel: "Creative, Motion & 3D Suite",
    labelColor: "text-zinc-200",
    dotColor: "rgba(255, 255, 255, 0.18)",
    accentColor: "#f95721",
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
    glowColor: "from-blue-500/25 via-blue-500/10 to-transparent",
    plateBg: "bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#1e40af]",
    plateBorder: "border-blue-300/60",
    plateShadow: "shadow-[0_30px_70px_-15px_rgba(37,99,235,0.5)]",
    plateLabel: "Engineering & Headless Stack",
    labelColor: "text-blue-100",
    dotColor: "rgba(255, 255, 255, 0.25)",
    accentColor: "#2563eb",
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
    glowColor: "from-orange-500/25 via-orange-500/10 to-transparent",
    plateBg: "bg-gradient-to-br from-white via-zinc-50 to-zinc-100",
    plateBorder: "border-zinc-300",
    plateShadow: "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.14)]",
    plateLabel: "SEO, Ads & Automation Growth",
    labelColor: "text-zinc-800",
    dotColor: "rgba(0, 0, 0, 0.1)",
    accentColor: "#f95721",
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

const LAYER_IDS: ("creative" | "coding" | "growth")[] = ["creative", "coding", "growth"];

export function TechStackSection() {
  const [activeLayer, setActiveLayer] = useState<"creative" | "coding" | "growth">("creative");
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // Mouse coordinate normalized for subtle 3D interactive parallax tilt
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement>(null);

  // Track promoting card for the "taken out and moved to top" choreography
  const [promotingLayer, setPromotingLayer] = useState<"creative" | "coding" | "growth" | null>(null);
  const [prevActiveLayer, setPrevActiveLayer] = useState<"creative" | "coding" | "growth">("creative");
  const [timerKey, setTimerKey] = useState(0);
  const isMountedRef = useRef(false);

  // -----------------------------------------------------------------------
  // AUTOMATIC 4-SECOND CONTINUOUS CARD CYCLING (Hovering WON'T reset timer)
  // -----------------------------------------------------------------------
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLayer((current) => {
        const currentIndex = LAYER_IDS.indexOf(current);
        const nextIndex = (currentIndex + 1) % LAYER_IDS.length;
        return LAYER_IDS[nextIndex];
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [timerKey]);

  // When user clicks a card or accordion tab, change immediately and start fresh 4s window
  const selectLayer = (layerId: "creative" | "coding" | "growth") => {
    if (layerId === activeLayer) return;
    setActiveLayer(layerId);
    setTimerKey((k) => k + 1); // Restart 4s countdown only on click, NOT on hover
  };

  // -----------------------------------------------------------------------
  // TAKEN-OUT & MOVED-TO-TOP CHOREOGRAPHY
  // -----------------------------------------------------------------------
  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }

    setPromotingLayer(activeLayer);

    const timeout = setTimeout(() => {
      setPromotingLayer(null);
      setPrevActiveLayer(activeLayer);
    }, 750);

    return () => clearTimeout(timeout);
  }, [activeLayer]);

  // Subtle 3D mouse parallax tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setMouseTilt({ x, y });
  };

  const handleMouseLeaveStage = () => {
    setHoveredCardId(null);
    setMouseTilt({ x: 0, y: 0 });
  };

  // Compute position of card right before it was promoted
  const getPreviousStackConfig = (layerId: "creative" | "coding" | "growth") => {
    const prevActiveIdx = LAYER_IDS.indexOf(prevActiveLayer);
    const thisIdx = LAYER_IDS.indexOf(layerId);
    const diff = (thisIdx - prevActiveIdx + 3) % 3;

    if (diff === 1) {
      // Middle card position
      return {
        x: 0,
        y: 2,
        translateZ: 68,
        rotateZ: 0,
        scale: 0.97,
      };
    } else {
      // Bottom card position
      return {
        x: 8,
        y: 20,
        translateZ: 0,
        rotateZ: 1.5,
        scale: 0.91,
      };
    }
  };

  // Compute 3D elevation, scale, depth, and spatial offset for physical stacked layers
  const getLayerStackConfig = (layerId: "creative" | "coding" | "growth") => {
    const isTop = activeLayer === layerId;
    const isHovered = hoveredCardId === layerId;

    if (isTop) {
      return {
        translateZ: isHovered ? 155 : 140,
        y: isHovered ? -24 : -18,
        x: -6,
        rotateZ: -1.5,
        scale: isHovered ? 1.045 : 1.035,
        opacity: 1,
        zIndex: 30,
      };
    }

    const activeIdx = LAYER_IDS.indexOf(activeLayer);
    const thisIdx = LAYER_IDS.indexOf(layerId);
    const diff = (thisIdx - activeIdx + 3) % 3;

    if (diff === 1) {
      // Middle card
      return {
        translateZ: isHovered ? 85 : 68,
        y: isHovered ? -4 : 2,
        x: isHovered ? 4 : 0,
        rotateZ: 0,
        scale: isHovered ? 0.99 : 0.97,
        opacity: isHovered ? 0.96 : 0.88,
        zIndex: 20,
      };
    } else {
      // Bottom card
      return {
        translateZ: isHovered ? 30 : 0,
        y: isHovered ? 14 : 20,
        x: isHovered ? 14 : 8,
        rotateZ: 1.5,
        scale: isHovered ? 0.93 : 0.91,
        opacity: isHovered ? 0.85 : 0.72,
        zIndex: 10,
      };
    }
  };

  return (
    <section
      id="tech-stack"
      className="relative bg-[#FAFAFC] py-16 sm:py-20 lg:py-28 border-b border-zinc-200/80 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        
        {/* ============================================================== */}
        {/* TOP HEADER ROW                                                 */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-start mb-10 sm:mb-14">
          {/* Main Title on Left */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-950 font-sans leading-[1.12]">
              The marketing stack, <br />
              <span className="font-editorial italic font-normal text-blue-600">
                modernized
              </span>
            </h2>
          </div>

          {/* Descriptive Intro on Right */}
          <div className="lg:col-span-6 lg:pt-1">
            <p className="text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
              We replace fragmented workflows and generic templates with integrated
              creative post-production, modern coding architectures, and high-intent acquisition engines
              engineered for luxury studios.
            </p>
          </div>
        </div>

        {/* Mobile / Tablet Quick Layer Switcher */}
        <div className="flex sm:hidden items-center justify-center gap-1.5 p-1 bg-zinc-200/70 rounded-full mb-8 max-w-sm mx-auto">
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
                  selectLayer(layer.id);
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

        {/* ============================================================== */}
        {/* 2-COLUMN MAIN SECTION: 3D STACK GRAPHIC (LEFT) + BREAKDOWN (RIGHT) */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ------------------------------------------------------------ */}
          {/* LEFT COLUMN: INTERACTIVE 3D ISOMETRIC SPRING STACK           */}
          {/* ------------------------------------------------------------ */}
          <div
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeaveStage}
            className="lg:col-span-7 relative flex items-center justify-center select-none py-8 sm:py-12 cursor-pointer"
          >
            {/* Dynamic Colored Backdrop Glow following the Active Layer */}
            <div
              className={`pointer-events-none absolute -inset-6 bg-gradient-to-r ${
                activeLayer === "creative"
                  ? "from-orange-500/20 via-amber-500/10 to-transparent"
                  : activeLayer === "coding"
                  ? "from-blue-600/25 via-indigo-500/10 to-transparent"
                  : "from-orange-500/15 via-zinc-400/10 to-transparent"
              } blur-3xl transition-colors duration-700 opacity-70`}
            />

            {/* Isometric 3D Stage Container with Interactive Parallax Perspective */}
            <div
              className="relative w-full max-w-[360px] sm:max-w-[460px] md:max-w-[500px] lg:max-w-[540px] h-[300px] sm:h-[370px] md:h-[410px] lg:h-[440px] flex items-center justify-center"
              style={{
                perspective: "1200px",
                perspectiveOrigin: "50% 36%",
              }}
            >
              {/* STACKED 3D PLATES CONTAINER with Responsive Tilt + Dynamic Parallax */}
              <motion.div
                className="relative w-[270px] sm:w-[350px] md:w-[400px] lg:w-[440px] h-[195px] sm:h-[250px] md:h-[280px] lg:h-[300px]"
                style={{
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  rotateX: 49 - mouseTilt.y * 14,
                  rotateZ: -29 + mouseTilt.x * 12,
                  rotateY: mouseTilt.x * 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 22,
                  mass: 0.6,
                }}
              >
                {LAYERS.map((layer) => {
                  const stackConfig = getLayerStackConfig(layer.id);
                  const isTop = activeLayer === layer.id;
                  const isHovered = hoveredCardId === layer.id;
                  const isPromoting = promotingLayer === layer.id;
                  const prevConfig = getPreviousStackConfig(layer.id);

                  // Taken out to the side/top and placed on top of stack
                  const animateProps = isPromoting
                    ? {
                        x: [prevConfig.x, prevConfig.x + 85, -6],
                        y: [prevConfig.y, prevConfig.y - 30, -18],
                        translateZ: [prevConfig.translateZ, 250, 140],
                        rotateZ: [prevConfig.rotateZ, 4.5, -1.5],
                        scale: [prevConfig.scale, 1.05, 1.035],
                        opacity: 1,
                      }
                    : {
                        x: stackConfig.x,
                        y: stackConfig.y,
                        translateZ: stackConfig.translateZ,
                        rotateZ: stackConfig.rotateZ,
                        scale: stackConfig.scale,
                        opacity: stackConfig.opacity,
                      };

                  const transitionProps: Transition = isPromoting
                    ? {
                        duration: 0.75,
                        times: [0, 0.42, 1],
                        ease: ["easeOut", "easeInOut"],
                      }
                    : {
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                      };

                  return (
                    <motion.div
                      key={layer.id}
                      onClick={() => selectLayer(layer.id)}
                      onMouseEnter={() => setHoveredCardId(layer.id)}
                      onMouseLeave={() => setHoveredCardId(null)}
                      animate={animateProps}
                      transition={transitionProps}
                      className={`absolute inset-0 rounded-2xl sm:rounded-3xl ${layer.plateBg} ${layer.plateBorder} border ${layer.plateShadow} p-4 sm:p-5 md:p-6 flex flex-col justify-between cursor-pointer will-change-transform`}
                      style={{
                        zIndex: isPromoting ? 50 : stackConfig.zIndex,
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

                      {/* Active Indicator Top Edge Specular Shimmer */}
                      {isTop && (
                        <div className="pointer-events-none absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_rgba(255,255,255,0.9)] transition-opacity duration-300" />
                      )}

                      {/* Plate Top Bar: Layer Badge */}
                      <div className="relative z-10 flex items-center justify-between pb-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`flex h-2.5 w-2.5 rounded-full ${
                              layer.id === "creative"
                                ? "bg-[#f95721] animate-pulse"
                                : layer.id === "coding"
                                ? "bg-cyan-300 animate-pulse"
                                : "bg-emerald-400 animate-pulse"
                            }`}
                          />
                          <span
                            className={`text-[10px] sm:text-xs font-bold tracking-wider uppercase font-mono ${
                              layer.id === "creative"
                                ? "text-zinc-300"
                                : layer.id === "coding"
                                ? "text-blue-100"
                                : "text-zinc-600"
                            }`}
                          >
                            LAYER {layer.layerNum}
                          </span>
                        </div>

                        <span
                          className={`text-[10px] sm:text-xs font-bold tracking-wide ${layer.labelColor}`}
                        >
                          {layer.plateLabel}
                        </span>
                      </div>

                      {/* Surface App Icon Badges Grid */}
                      <div className="relative z-10 grid grid-cols-5 gap-1.5 sm:gap-2.5 md:gap-3 max-w-full my-auto py-1.5">
                        {layer.tools.map((tool) => (
                          <div
                            key={tool.name}
                            title={tool.name}
                            className={`group/icon relative flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-lg sm:rounded-xl md:rounded-2xl ${
                              layer.id === "creative"
                                ? "bg-zinc-800/90 border border-zinc-700/80 shadow-[0_4px_12px_rgba(0,0,0,0.5)] p-1.5 sm:p-2"
                                : layer.id === "coding"
                                ? "bg-white/95 border border-white/60 shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-1.5 sm:p-2"
                                : "bg-white border border-zinc-200/90 shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-1.5 sm:p-2"
                            } transition-transform duration-200 hover:scale-120 hover:z-20`}
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
                        <span
                          className={`text-[9px] sm:text-[10px] uppercase tracking-wider font-mono opacity-70 font-semibold ${
                            layer.id === "creative"
                              ? "text-zinc-400"
                              : layer.id === "coding"
                              ? "text-blue-200"
                              : "text-zinc-500"
                          }`}
                        >
                          {layer.tools.length} PRODUCTION ENGINES
                        </span>
                        <span
                          className={`text-[10px] font-mono font-bold transition-colors ${
                            isTop
                              ? "text-white"
                              : isHovered
                              ? "text-blue-300"
                              : "text-zinc-400"
                          }`}
                        >
                          {isTop ? "● ACTIVE LAYER" : "CLICK TO BRING TO TOP"}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* RIGHT COLUMN: INTERACTIVE ACCORDION BREAKDOWN                */}
          {/* ------------------------------------------------------------ */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5 lg:pl-2">
            {/* Monospace Eyebrow Tagline */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-600 uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              <span>ONE PLATFORM, THREE INTEGRATED TIERS</span>
            </div>

            {/* List of 3 Layers with Interactive Selection & Progress */}
            <div className="space-y-3.5">
              {LAYERS.map((layer) => {
                const isActive = activeLayer === layer.id;

                return (
                  <div
                    key={layer.id}
                    onClick={() => {
                      selectLayer(layer.id);
                    }}
                    className={`group cursor-pointer transition-all duration-300 p-4 sm:p-5 rounded-2xl relative overflow-hidden ${
                      isActive
                        ? "bg-white shadow-[0_8px_28px_rgba(37,99,235,0.08)] border border-blue-200 ring-2 ring-blue-500/20"
                        : "hover:bg-zinc-100/70 opacity-75 hover:opacity-100 border border-transparent"
                    }`}
                  >
                    {/* Item Title with Colored Indicator Bullet */}
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-2.5 w-2.5 rounded-sm ${layer.bulletColor} transition-transform duration-300 ${
                            isActive ? "scale-125 ring-2 ring-blue-400/40" : "group-hover:scale-110"
                          }`}
                        />
                        <h3
                          className={`text-base sm:text-lg lg:text-xl font-bold tracking-tight transition-colors font-editorial italic ${
                            isActive ? "text-zinc-950" : "text-zinc-700 group-hover:text-zinc-950"
                          }`}
                        >
                          {layer.title}
                        </h3>
                      </div>

                      {isActive && (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs shrink-0">
                          <Check className="h-3 w-3 stroke-[2.5]" />
                        </span>
                      )}
                    </div>

                    {/* Smooth Expandable Narrative */}
                    <div className="pl-5.5">
                      <p
                        className={`text-xs sm:text-sm font-sans leading-relaxed transition-colors duration-200 ${
                          isActive ? "text-zinc-600" : "text-zinc-500 line-clamp-2"
                        }`}
                      >
                        {isActive ? layer.description : layer.summary}
                      </p>
                    </div>

                    {/* 4-Second Visual Progress Indicator under Active Card (Uninterrupted by hover) */}
                    <div className="h-[2.5px] w-full bg-zinc-100 rounded-full mt-3 overflow-hidden">
                      {isActive && (
                        <motion.div
                          key={`timer-${activeLayer}-${timerKey}`}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 4, ease: "linear" }}
                          className="h-full bg-blue-600 rounded-full"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Discuss Scope Action Button */}
            <div className="pt-2">
              <Link
                href="#contact"
                className="relative inline-flex items-center gap-2 rounded-full bg-zinc-950/95 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-all duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_6px_20px_rgba(249,87,33,0.35)] active:scale-95 group overflow-hidden"
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
