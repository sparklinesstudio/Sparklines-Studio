"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Sliders, Layers, Sparkles, Film } from "lucide-react";

export interface BTSItem {
  image: string;
  caption: string;
  role?: string;
}

export interface CaseStudyBTSProps {
  title?: string;
  directorNote?: string;
  cameraSpecs?: string;
  lensKit?: string;
  lightingSetup?: string;
  colorScience?: string;
  btsGallery: BTSItem[];
  rawImage?: string;
  gradedImage?: string;
}

export function CaseStudyBTS({
  title = "Behind The Scenes & Production Craft",
  directorNote,
  cameraSpecs = "ARRI Alexa Mini LF (Open Gate 4.5K)",
  lensKit = "Cooke Anamorphic /i Full Frame Plus 2x",
  lightingSetup = "Aputure 1200d Pro + Astera Titan Wireless Pixel Tubes",
  colorScience = "DaVinci Resolve Studio · ACES Color Managed Workflow",
  btsGallery,
  rawImage,
  gradedImage,
}: CaseStudyBTSProps) {
  const [showGraded, setShowGraded] = useState(true);

  return (
    <section className="relative py-14 sm:py-18 bg-white border-y border-zinc-200/80 overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-10 right-0 h-[400px] w-[400px] rounded-full bg-orange-600/[0.05] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 left-0 h-[400px] w-[400px] rounded-full bg-blue-600/[0.05] blur-[140px]" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <Camera className="h-4 w-4 text-[#ea580c]" />
            <span className="font-mono text-xs font-semibold tracking-widest text-[#ea580c] uppercase">
              Production Documentation
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-950 font-sans leading-[1.14]">
            {title.includes("&") ? (
              <>
                <span>{title.split("&")[0].trim()} &amp;</span>{" "}
                <span className="font-editorial italic font-normal text-zinc-900 tracking-normal">
                  {title.split("&")[1].trim()}
                </span>
              </>
            ) : (
              title
            )}
          </h2>
          {directorNote && (
            <p className="mt-3 text-base sm:text-lg text-zinc-600 leading-relaxed font-sans">
              {directorNote}
            </p>
          )}
        </div>

        {/* Technical Gear Specifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 shadow-xs">
            <div className="flex items-center gap-2 mb-1.5 text-zinc-400">
              <Camera className="h-4 w-4 text-blue-600" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider">
                Cinema Camera
              </span>
            </div>
            <p className="text-sm font-semibold text-zinc-900 font-sans">
              {cameraSpecs}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 shadow-xs">
            <div className="flex items-center gap-2 mb-1.5 text-zinc-400">
              <Film className="h-4 w-4 text-[#ea580c]" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider">
                Optics & Lenses
              </span>
            </div>
            <p className="text-sm font-semibold text-zinc-900 font-sans">
              {lensKit}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 shadow-xs">
            <div className="flex items-center gap-2 mb-1.5 text-zinc-400">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider">
                Lighting Rig
              </span>
            </div>
            <p className="text-sm font-semibold text-zinc-900 font-sans">
              {lightingSetup}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 shadow-xs">
            <div className="flex items-center gap-2 mb-1.5 text-zinc-400">
              <Sliders className="h-4 w-4 text-[#ea580c]" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider">
                Color Grade
              </span>
            </div>
            <p className="text-sm font-semibold text-zinc-900 font-sans">
              {colorScience}
            </p>
          </div>
        </div>

        {/* Optional Color Grade RAW vs Final Toggle */}
        {rawImage && gradedImage && (
          <div className="mb-10 p-6 rounded-3xl bg-zinc-900 text-white border border-zinc-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-[#ea580c]">
                  Precision Post-Production
                </p>
                <h3 className="text-lg font-semibold text-white font-sans mt-0.5">
                  RAW Sensor Capture vs. Final Master Grade
                </h3>
              </div>
              <div className="inline-flex rounded-full bg-zinc-800 p-1 border border-zinc-700">
                <button
                  type="button"
                  onClick={() => setShowGraded(false)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    !showGraded
                      ? "bg-zinc-700 text-white shadow-xs"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Log Flat Sensor
                </button>
                <button
                  type="button"
                  onClick={() => setShowGraded(true)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    showGraded
                      ? "bg-[#ea580c] text-white shadow-xs"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Final Master LUT
                </button>
              </div>
            </div>

            <div className="relative aspect-[21/9] sm:aspect-[2.39/1] w-full overflow-hidden rounded-2xl bg-black">
              <Image
                src={showGraded ? gradedImage : rawImage}
                alt="Color Grading Comparison"
                fill
                className="object-cover transition-opacity duration-300"
              />
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-zinc-300">
                {showGraded ? "● Rec.709 Finished Master Grade" : "○ ARRI LogC4 RAW Sensor"}
              </div>
            </div>
          </div>
        )}

        {/* BTS Stills Gallery (Masonry / Responsive Grid) */}
        {btsGallery && btsGallery.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Layers className="h-4 w-4 text-blue-600" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500">
                On-Set Action & Film Crew Gallery
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {btsGallery.map((item, idx) => (
                <div
                  key={`bts-${idx}`}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-200/90 shadow-xs"
                >
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    {item.role && (
                      <span className="font-mono text-[10px] uppercase text-[#ea580c] font-semibold mb-0.5">
                        {item.role}
                      </span>
                    )}
                    <p className="text-xs font-medium text-white/90 leading-snug">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
