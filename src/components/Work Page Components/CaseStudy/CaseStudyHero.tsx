"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";

export interface CaseStudyHeroProps {
  title: string;
  client: string;
  clientLogo?: string;
  category: string;
  industry: string;
  year: string;
  tagline: string;
  coverImage: string;
  videoUrl?: string;
  liveUrl?: string;
  onPlayClick?: () => void;
}

export function CaseStudyHero({
  title,
  client,
  clientLogo,
  category,
  industry,
  year,
  tagline,
  coverImage,
  videoUrl,
  liveUrl,
  onPlayClick,
}: CaseStudyHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-10 sm:pt-32 sm:pb-12 lg:pt-36 lg:pb-14 bg-gradient-to-b from-blue-600/[0.08] via-zinc-100/40 to-white">
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-[500px] w-[500px] -z-10 rounded-full bg-blue-600/[0.07] blur-[140px]" />
      <div className="pointer-events-none absolute top-10 -right-20 h-[450px] w-[450px] -z-10 rounded-full bg-orange-600/[0.06] blur-[130px]" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Top Navigation Row: Back Link & Client Logo */}
        <div className="flex items-center justify-between gap-4 pb-6 mb-8 border-b border-zinc-200/80">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </Link>

          {/* Client Logo / Monogram */}
          <div className="flex items-center gap-3">
            {clientLogo ? (
              <div className="relative h-7 w-24 sm:w-28 opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src={clientLogo}
                  alt={client}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200/80 shadow-xs">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                <span className="text-xs font-semibold text-zinc-900 font-sans tracking-wide">
                  {client}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Hero Meta & Title Header */}
        <div className="max-w-4xl">
          {/* Metadata pill row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-zinc-500 font-sans mb-4"
          >
            <span className="font-mono text-blue-600 font-semibold uppercase tracking-wider">
              {category}
            </span>
            <span>·</span>
            <span>{industry}</span>
            <span>·</span>
            <span>{year}</span>
            {liveUrl && (
              <>
                <span>·</span>
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-900 font-medium hover:text-[#ea580c] transition-colors"
                >
                  <span>Visit Live</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </>
            )}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-950 font-sans leading-[1.08]"
          >
            {title}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-sans max-w-3xl"
          >
            {tagline}
          </motion.p>
        </div>

        {/* Hero Media Showcase (Image or Video) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 sm:mt-10 relative aspect-[16/9] w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-zinc-950 border border-zinc-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] group"
        >
          {/* Specular highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent z-10" />

          {/* Cover Image or Video Loop */}
          {videoUrl ? (
            <video
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              poster={coverImage}
              className="h-full w-full object-cover"
            />
          ) : (
            <Image
              src={coverImage}
              alt={title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}

          {/* Gradient Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Play Button Trigger if video action provided */}
          {onPlayClick && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                onClick={onPlayClick}
                className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/95 text-zinc-950 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#ea580c] hover:text-white cursor-pointer group/btn"
              >
                <Play className="h-6 w-6 sm:h-8 sm:w-8 translate-x-0.5 fill-current transition-transform duration-300 group-hover/btn:scale-105" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
