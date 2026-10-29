"use client";

import React from "react";

const SERVICES_MARQUEE_ITEMS = [
  "Video Production",
  "Technical SEO & Search Dominance",
  "Performance PPC Advertising",
  "Brand Identity Systems",
  "Web Design & Next.js Engineering",
  "Kinetic Motion Design",
  "Conversion Rate Optimization",
  "Creative Direction & Social",
  "E-Commerce Architecture",
];

export function ServicesMarqueeSection() {
  const repeated = [
    ...SERVICES_MARQUEE_ITEMS,
    ...SERVICES_MARQUEE_ITEMS,
    ...SERVICES_MARQUEE_ITEMS,
  ];

  return (
    <section
      aria-label="Services Straight Linear Marquee"
      className="relative w-full overflow-hidden bg-[#1849d6] py-3 sm:py-3.5 border-y border-blue-400/30 select-none shadow-[0_4px_24px_rgba(24,73,214,0.25)]"
    >
      {/* Edge gradient masks for seamless fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-[#1849d6] to-transparent select-none" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-[#1849d6] to-transparent select-none" />

      {/* Straight Infinite Marquee Track with Smooth Hover Pause */}
      <div className="group flex w-max will-change-transform animate-services-straight hover:[animation-play-state:paused]">
        {repeated.map((item, idx) => (
          <div
            key={`services-straight-${idx}`}
            className="flex items-center gap-4 sm:gap-6 px-3 sm:px-5 shrink-0"
          >
            <span className="text-xs sm:text-sm md:text-[15px] font-bold uppercase tracking-[0.16em] text-white whitespace-nowrap font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
              {item}
            </span>
            <span className="text-blue-200 font-light text-base sm:text-lg select-none">
              ✦
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-services-straight {
          animation: servicesStraightScroll 32s linear infinite;
        }

        @keyframes servicesStraightScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}

export default ServicesMarqueeSection;
