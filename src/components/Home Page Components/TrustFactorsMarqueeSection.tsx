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
    <div className="relative w-full overflow-hidden bg-[#1849d6] text-white py-4 sm:py-5 border-y border-blue-400/30 select-none shadow-[0_4px_24px_rgba(24,73,214,0.25)]">
      {/* Edge gradient masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-[#1849d6] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-[#1849d6] to-transparent" />

      {/* Marquee moving from Left to Right */}
      <div className="flex w-max will-change-transform animate-trust-l-to-r">
        {repeated.map((factor, idx) => (
          <div
            key={`trust-factor-${factor}-${idx}`}
            className="flex items-center gap-6 sm:gap-8 px-4 sm:px-6"
          >
            <span className="text-base sm:text-lg md:text-xl font-extrabold tracking-wider uppercase whitespace-nowrap text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
              {factor}
            </span>
            <span className="text-blue-200 font-black text-xl sm:text-2xl px-2 select-none">
              *
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-trust-l-to-r {
          animation: trustScrollLeftToRight 28s linear infinite;
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
