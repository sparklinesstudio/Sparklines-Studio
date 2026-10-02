"use client";

import React from "react";

const SERVICES_LIST = [
  "Video Production",
  "Pay-Per-Click Advertising",
  "Social Media Marketing",
  "Search Engine Optimization",
  "Website Design & Development",
  "Branding & Identity",
  "Content Marketing",
  "Conversion Rate Optimization",
  "Creative Direction",
  "Motion Graphics",
];

export function ServicesMarqueeSection() {
  // Multiply for seamless loop
  const repeatedServices = [...SERVICES_LIST, ...SERVICES_LIST, ...SERVICES_LIST];

  return (
    <div className="relative w-full overflow-hidden bg-[#1849d6] text-white py-4 sm:py-5 border-y border-blue-400/30 select-none shadow-[0_4px_24px_rgba(24,73,214,0.25)]">
      {/* Edge gradient fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-[#1849d6] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-[#1849d6] to-transparent" />

      {/* Marquee moving from Left to Right */}
      <div className="flex w-max will-change-transform animate-services-l-to-r">
        {repeatedServices.map((service, idx) => (
          <div
            key={`service-item-${service}-${idx}`}
            className="flex items-center gap-6 sm:gap-8 px-4 sm:px-6"
          >
            <span className="text-base sm:text-lg md:text-xl font-extrabold tracking-wider uppercase whitespace-nowrap text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
              {service}
            </span>
            <span className="text-blue-200 font-black text-xl sm:text-2xl px-2 select-none">
              *
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-services-l-to-r {
          animation: servicesScrollLeftToRight 28s linear infinite;
        }

        @keyframes servicesScrollLeftToRight {
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
