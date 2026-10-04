"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface CaseStudyImageSectionProps {
  title?: string;
  subtitle?: string;
  image: string;
  secondaryImage?: string;
  caption?: string;
  aspectRatio?: "21/9" | "16/9" | "16/10" | "4/3";
  isFullWidth?: boolean;
}

export function CaseStudyImageSection({
  title,
  subtitle,
  image,
  secondaryImage,
  caption,
  aspectRatio = "16/9",
  isFullWidth = false,
}: CaseStudyImageSectionProps) {
  const aspectClass =
    aspectRatio === "21/9"
      ? "aspect-[21/9]"
      : aspectRatio === "16/10"
      ? "aspect-[16/10]"
      : aspectRatio === "4/3"
      ? "aspect-[4/3]"
      : "aspect-[16/9]";

  return (
    <section className="relative py-10 sm:py-14 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {(title || subtitle) && (
          <div className="mb-6 max-w-3xl">
            {title && (
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-zinc-950 font-sans">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="mt-1 text-sm sm:text-base text-zinc-500 font-sans leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {secondaryImage ? (
          /* Dual Side-by-Side Images */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className={`relative ${aspectClass} w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-sm bg-zinc-100 group`}>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent z-10" />
              <Image
                src={image}
                alt={title || "Project Asset 1"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className={`relative ${aspectClass} w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-sm bg-zinc-100 group`}>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent z-10" />
              <Image
                src={secondaryImage}
                alt={title || "Project Asset 2"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </div>
        ) : (
          /* Single Image Showcase */
          <div className={`relative ${aspectClass} w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-sm bg-zinc-100 group ${isFullWidth ? "" : "max-w-6xl mx-auto"}`}>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent z-10" />
            <Image
              src={image}
              alt={title || "Project Feature"}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
        )}

        {caption && (
          <p className="mt-3 text-xs text-zinc-400 font-sans text-center">
            {caption}
          </p>
        )}
      </div>
    </section>
  );
}
