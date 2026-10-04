"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// =========================================================================
// SERVICES DATA (3x2 GRID WITH CLOUDINARY BACKGROUND IMAGES)
// =========================================================================

interface ServiceCardItem {
  id: string;
  titleFirst: string;
  titleSecond: string;
  href: string;
  bgImage: string;
  // Text & button colors that work over the background image
  titleFirstColor: string;
  titleSecondColor: string;
  btnCircleBg: string;
  btnCircleTextColor: string;
  btnTextColor: string;
  // Optional overlay tint to ensure text readability
  overlayClass: string;
}

const SERVICES_DATA: ServiceCardItem[] = [
  // ROW 1
  {
    id: "video-production",
    titleFirst: "Video",
    titleSecond: "Production",
    href: "#contact",
    bgImage:
      "https://res.cloudinary.com/vt5gqi1c/image/upload/v1790451083/video-production-bg.jpg",
    titleFirstColor: "text-white",
    titleSecondColor: "text-white/70",
    btnCircleBg: "bg-white",
    btnCircleTextColor: "text-zinc-950",
    btnTextColor: "text-white",
    overlayClass:
      "bg-gradient-to-r from-black/60 via-black/30 to-transparent",
  },
  {
    id: "ppc-advertising",
    titleFirst: "Pay-per-click",
    titleSecond: "advertising",
    href: "#contact",
    bgImage:
      "https://res.cloudinary.com/vt5gqi1c/image/upload/v1790451181/pay-per-click-bg.jpg",
    titleFirstColor: "text-white",
    titleSecondColor: "text-white/75",
    btnCircleBg: "bg-white",
    btnCircleTextColor: "text-[#f95721]",
    btnTextColor: "text-white",
    overlayClass:
      "bg-gradient-to-r from-black/50 via-black/20 to-transparent",
  },
  {
    id: "social-media",
    titleFirst: "Social Media",
    titleSecond: "Marketing",
    href: "#contact",
    bgImage:
      "https://res.cloudinary.com/vt5gqi1c/image/upload/v1790451192/social-media-marketing-bg.jpg",
    titleFirstColor: "text-white",
    titleSecondColor: "text-white/70",
    btnCircleBg: "bg-white",
    btnCircleTextColor: "text-zinc-950",
    btnTextColor: "text-white",
    overlayClass:
      "bg-gradient-to-r from-black/60 via-black/30 to-transparent",
  },

  // ROW 2
  {
    id: "seo",
    titleFirst: "Search engine",
    titleSecond: "optimization",
    href: "#contact",
    bgImage:
      "https://res.cloudinary.com/vt5gqi1c/image/upload/v1790451362/seo-bg.jpg",
    titleFirstColor: "text-white",
    titleSecondColor: "text-white/75",
    btnCircleBg: "bg-white",
    btnCircleTextColor: "text-[#2563eb]",
    btnTextColor: "text-white",
    overlayClass:
      "bg-gradient-to-r from-black/55 via-black/25 to-transparent",
  },
  {
    id: "web-design",
    titleFirst: "Website",
    titleSecond: "Design",
    href: "#contact",
    bgImage:
      "https://res.cloudinary.com/vt5gqi1c/image/upload/v1790452239/website-design-bg.jpg",
    titleFirstColor: "text-white",
    titleSecondColor: "text-white/70",
    btnCircleBg: "bg-white",
    btnCircleTextColor: "text-zinc-950",
    btnTextColor: "text-white",
    overlayClass:
      "bg-gradient-to-r from-black/55 via-black/25 to-transparent",
  },
  {
    id: "branding",
    titleFirst: "Branding",
    titleSecond: "Identity",
    href: "#contact",
    bgImage:
      "https://res.cloudinary.com/vt5gqi1c/image/upload/v1790452239/branding-bg.jpg",
    titleFirstColor: "text-white",
    titleSecondColor: "text-white/75",
    btnCircleBg: "bg-white",
    btnCircleTextColor: "text-zinc-950",
    btnTextColor: "text-white",
    overlayClass:
      "bg-gradient-to-r from-black/55 via-black/25 to-transparent",
  },
];

// =========================================================================
// MAIN COMPONENT
// =========================================================================

export function ServicesGridSection() {
  return (
    <section
      id="services-grid"
      className="relative bg-[#F4F4F6] py-16 sm:py-24 lg:py-32 border-b border-zinc-200/80 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 sm:gap-6 mb-10 sm:mb-14 lg:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl font-sans leading-[1.08]">
              Crafted for Growth &{" "}
              <span className="font-editorial italic font-normal text-zinc-900 tracking-normal">
                Authority
              </span>
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              High-impact digital services designed to command prestige,
              dominate search rankings, and attract high-budget clients.
            </p>
          </div>

          <div className="hidden md:block flex-shrink-0">
            <Link
              href="#contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-zinc-950/95 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-all duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_6px_20px_rgba(249,87,33,0.35)] active:scale-95 group overflow-hidden"
            >
              <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <span>Discuss a Custom Scope</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* 3x2 Grid — 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-video cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Background Image */}
              <Image
                src={service.bgImage}
                alt={`${service.titleFirst} ${service.titleSecond}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Left-side gradient overlay for text readability */}
              <div
                className={`pointer-events-none absolute inset-0 ${service.overlayClass}`}
              />

              {/* Bottom gradient vignette for extra depth */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Content: Title top-left, Button bottom-left */}
              <div className="relative z-10 flex flex-col justify-between h-full p-5 sm:p-7 lg:p-8">
                {/* Title */}
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight leading-[1.18]">
                    <span
                      className={`block font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] ${service.titleFirstColor}`}
                    >
                      {service.titleFirst}
                    </span>
                    <span
                      className={`block font-medium mt-0.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] ${service.titleSecondColor}`}
                    >
                      {service.titleSecond}
                    </span>
                  </h3>
                </div>

                {/* LEARN MORE button */}
                <div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2.5 group/btn"
                  >
                    <div
                      className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full ${service.btnCircleBg} shadow-md transition-transform duration-300 group-hover:scale-110`}
                    >
                      <ArrowUpRight
                        className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${service.btnCircleTextColor} transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5`}
                      />
                    </div>
                    <span
                      className={`text-[11px] sm:text-xs font-bold tracking-wider uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] ${service.btnTextColor}`}
                    >
                      LEARN MORE
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
