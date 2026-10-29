"use client";

import React from "react";

const TRUST_FACTORS = [
  "99.8% Client Satisfaction Rate",
  "150+ Digital Projects Delivered",
  "5.4x Average Client ROAS",
  "100% Confidentiality & Strict NDA Protected",
  "Senior Designers & Engineers Only",
  "24/7 Dedicated Client Communication",
  "100% Milestone-Based Delivery",
  "Rapid 2-Week Sprint Velocity",
  "Top 1% Digital Growth Agency",
];

export function TrustFactorsMarqueeSection() {
  const repeated = [...TRUST_FACTORS, ...TRUST_FACTORS, ...TRUST_FACTORS];

  return (
    <div className="relative w-full overflow-hidden bg-[#1849d6] text-white py-3 sm:py-3.5 border-y border-blue-400/30 select-none shadow-[0_4px_24px_rgba(24,73,214,0.25)]">
      {/* Edge gradient masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-[#1849d6] to-transparent select-none" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-[#1849d6] to-transparent select-none" />

      {/* Marquee moving from Left to Right with Hover Pause */}
      <div className="group flex w-max will-change-transform animate-trust-l-to-r hover:[animation-play-state:paused]">
        {repeated.map((factor, idx) => (
          <div
            key={`trust-factor-${idx}`}
            className="flex items-center gap-4 sm:gap-6 px-3 sm:px-5 shrink-0"
          >
            <span className="text-xs sm:text-sm md:text-[15px] font-bold tracking-[0.16em] uppercase whitespace-nowrap text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] font-sans">
              {factor}
            </span>
            <span className="text-blue-200 font-light text-base sm:text-lg select-none">
              ✦
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-trust-l-to-r {
          animation: trustScrollLeftToRight 30s linear infinite;
        }

        @keyframes trustScrollLeftToRight {
          0% {
            transform: translate3d(-33.333%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}

export default TrustFactorsMarqueeSection;
