"use client";

import React, { useState, useEffect, Suspense, useMemo } from "react";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ParticleSphere, type ImageEntry } from "@/components/ui/cosmos-3d-orbit-gallery";
import {
  ArrowUpRight,
  Layers,
  Video,
  Monitor,
  Image as ImageIcon,
} from "lucide-react";

// ============================================================================
// IMAGE DIMENSIONS
//  - Posts:    1 : 1   → 1.8 × 1.8
//  - Videos:   9 : 16  → 1.0 × 1.78
//  - Websites: 16: 9   → 2.8 × 1.575
// ============================================================================

/** Proxy Pinterest URLs so WebGL TextureLoader can fetch cross-origin */
const proxy = (url: string) =>
  url.includes("pinimg.com")
    ? `/api/proxy-image?url=${encodeURIComponent(url)}`
    : url;

// 1. Social Post Carousels — square 1:1
const POST_CAROUSEL: ImageEntry[] = [
  "https://i.pinimg.com/736x/20/4f/2b/204f2bad9d4e2652f5bb09b70d95d506.jpg",
  "https://i.pinimg.com/736x/6b/b7/93/6bb793b3d44ded26b6f65a08afbb6603.jpg",
  "https://i.pinimg.com/736x/dd/2c/fe/dd2cfe716a89c80033557bc639cb62bc.jpg",
  "https://i.pinimg.com/1200x/5c/af/ce/5cafce949cf39a1142b07159e49d526a.jpg",
  "https://i.pinimg.com/1200x/f2/9c/18/f29c185315c686d1aec81a932c0de607.jpg",
  "https://i.pinimg.com/736x/5e/79/03/5e7903c05db68c4ca299ca030b558846.jpg",
  "https://i.pinimg.com/1200x/07/8e/32/078e32e188a4629a61f35f508a066f24.jpg",
  "https://i.pinimg.com/736x/b9/2e/6f/b92e6fa249e98df9344148ba555a29db.jpg",
].map((url) => ({ url: proxy(url), width: 1.8, height: 1.8 }));

// 2. Video Carousel Posters — portrait 9:16
const VIDEO_CAROUSEL: ImageEntry[] = [
  "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714905/decadentdepictions_ssspin.io_1790714806.jpg",
  "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714840/minipagebioarchive_ssspin.io_1790714828.jpg",
  "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714352/IMG_5738.MOV.jpg",
  "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714705/Video-36346.jpg",
  "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714315/lv_0_20260930014015.jpg",
  "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714449/chiffonandspice_ssspin.io_1790714410.jpg",
  "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714269/lv_0_20260930013757.jpg",
  "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714439/chiffonandspice_ssspin.io_1790714426.jpg",
  "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714249/IMG_5657.MOV.jpg",
].map((url) => ({ url, width: 1.0, height: 1.78 }));

// 3. Website Carousel — widescreen 16:9
const WEBSITE_CAROUSEL: ImageEntry[] = [
  "https://res.cloudinary.com/dbwrnwa3l/image/upload/v1790754956/image_6_umbc1s.webp",
  "https://res.cloudinary.com/dbwrnwa3l/image/upload/v1790754956/image_5_lrkzwt.webp",
  "https://res.cloudinary.com/dbwrnwa3l/image/upload/v1790754957/image_9_jazm8w.webp",
  "https://res.cloudinary.com/dbwrnwa3l/image/upload/v1790754957/image_10_xrm6rx.webp",
  "https://res.cloudinary.com/dbwrnwa3l/image/upload/v1790754957/image_11_zeojr0.webp",
  "https://res.cloudinary.com/dbwrnwa3l/image/upload/v1790754956/image_7_twmzja.webp",
  "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_60,c_limit,w_1200/v1788801541/Oraanj_Interiors_Design_bd8exo.png",
  "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_60,c_limit,w_1200/v1788801506/Contekst_o2pipv.png",
  "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_60,c_limit,w_1200/v1788801474/Luxoria_1_caa7j2.png",
  "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_60,c_limit,w_1200/v1788801500/MaisonMoghadam_vs9nx6.png",
].map((url) => ({ url, width: 2.8, height: 1.575 }));

// Interleaved master list — posts, then video, then web, seamlessly mixed
const ALL_IMAGES: ImageEntry[] = [
  ...POST_CAROUSEL,
  ...VIDEO_CAROUSEL,
  ...WEBSITE_CAROUSEL,
];

type FilterKey = "ALL" | "POSTS" | "VIDEOS" | "WEBSITES";

const FILTERS: { key: FilterKey; label: string; icon: React.ComponentType<{ className?: string }>; images: ImageEntry[] }[] = [
  { key: "ALL",      label: "All Works",     icon: Layers,    images: ALL_IMAGES       },
  { key: "POSTS",    label: "Social Posts",  icon: ImageIcon, images: POST_CAROUSEL    },
  { key: "VIDEOS",   label: "Video Reels",   icon: Video,     images: VIDEO_CAROUSEL   },
  { key: "WEBSITES", label: "Web Builds",    icon: Monitor,   images: WEBSITE_CAROUSEL },
];

// ============================================================================
// MAIN SECTION COMPONENT
// ============================================================================

export function CosmicOrbitGallerySection() {
  const [mounted, setMounted]         = useState(false);
  const [active, setActive]           = useState<FilterKey>("ALL");
  const [isSpinning, setIsSpinning]   = useState(true);
  const [canvasKey, setCanvasKey]     = useState(0);

  useEffect(() => { setMounted(true); }, []);

  const currentImages = useMemo(
    () => FILTERS.find((f) => f.key === active)!.images,
    [active]
  );

  return (
    <section
      id="cosmic-orbit-gallery"
      aria-label="Interactive 3D Portfolio Orbit Gallery"
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "100svh", minHeight: 600 }}
    >
      {/* ================================================================ */}
      {/* FULL-SCREEN THREE.JS CANVAS                                       */}
      {/* ================================================================ */}
      {mounted && (
        <Canvas
          key={`c-${canvasKey}`}
          // Camera elevated slightly — recreates the reference image perspective
          camera={{ position: [0, 6, 22], fov: 50 }}
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
          style={{ background: "black" }}
        >
          {/* Soft starfield-like ambient */}
          <ambientLight intensity={0.4} color="#e0f2fe" />
          {/* Warm key from top-right */}
          <pointLight position={[12, 14, 10]} intensity={2.5} color="#93c5fd" />
          {/* Cool fill from bottom-left */}
          <pointLight position={[-12, -8, -10]} intensity={1.6} color="#38bdf8" />

          <Suspense fallback={null}>
            <ParticleSphere
              images={currentImages}
              theme="blue"
              particleCount={1400}
              sphereRadius={9}
              rotationSpeedY={isSpinning ? 0.0006 : 0}
              rotationSpeedX={0}
            />
          </Suspense>

          <OrbitControls
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            minDistance={8}
            maxDistance={28}
            autoRotate={false}
          />
        </Canvas>
      )}

      {/* Loading skeleton while Three.js boots */}
      {!mounted && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black gap-3">
          <div className="h-9 w-9 rounded-full border-2 border-blue-400 border-t-transparent animate-spin" />
          <span className="text-[11px] tracking-widest text-blue-400/70 font-mono uppercase">
            Initialising Orbit…
          </span>
        </div>
      )}

      {/* ================================================================ */}
      {/* OVERLAY — text in upper-center, pills at the very bottom          */}
      {/* ================================================================ */}

      {/* ── Centered headline (mimics reference image typography) ── */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-start px-6 pt-14 sm:pt-20 text-center z-10">
        <h2
          className="text-white font-instrument-serif font-normal tracking-tight leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          The creative cosmos of<br />
          <span
            className="italic"
            style={{
              background: "linear-gradient(90deg, #bfdbfe 0%, #e0f2fe 50%, #93c5fd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sparklines Studio.
          </span>
        </h2>

        <p className="mt-4 max-w-lg text-sm sm:text-base text-white/50 font-sans leading-relaxed">
          A spatial orbit of our hero social media campaigns, cinematic video
          productions, and award-winning web platforms. Drag &amp; explore every angle.
        </p>
      </div>

      {/* ── Bottom bar: filter pills + actions ── */}
      <div className="pointer-events-auto absolute bottom-0 inset-x-0 z-20 px-4 pb-6 sm:pb-8 flex flex-col items-center gap-3">
        {/* Filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {FILTERS.map(({ key, label, icon: Icon, images }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 backdrop-blur-md border ${
                active === key
                  ? "bg-blue-600 border-blue-400/60 text-white shadow-[0_0_16px_rgba(37,99,235,0.7)]"
                  : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="h-3 w-3" />
              {label}
              <span className="opacity-50">({images.length})</span>
            </button>
          ))}

          {/* Spin toggle */}
          <button
            onClick={() => setIsSpinning((s) => !s)}
            className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md"
          >
            {isSpinning ? "⏸ Pause" : "▶ Spin"}
          </button>

          {/* Reset */}
          <button
            onClick={() => setCanvasKey((k) => k + 1)}
            className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md"
          >
            ↺ Reset
          </button>
        </div>

        {/* CTA links */}
        <div className="flex items-center gap-3">
          <Link
            href="/works"
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 hover:bg-blue-500 px-5 py-2 text-xs font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all hover:scale-105"
          >
            View All Case Studies
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/services/web-development"
            className="text-xs text-white/40 hover:text-white/70 transition-colors underline underline-offset-4"
          >
            Web Production →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CosmicOrbitGallerySection;
