"use client";

import React from "react";
import TextLoop from "@/components/ui/TextLoop";

export function ServicesMarqueeSection() {
  return (
    <section
      aria-label="Services Wave Ribbon Marquee"
      className="relative w-full overflow-hidden bg-[#1849d6] py-2 sm:py-3 border-y border-blue-400/30 select-none shadow-[0_4px_24px_rgba(24,73,214,0.25)]"
    >
      <div className="w-full max-w-full overflow-hidden flex items-center justify-center">
        <TextLoop
          text="Sparklines Studio ✦ Video Production ✦ Web Engineering ✦ Performance PPC ✦ Technical SEO ✦ Brand Identity"
          shape="wave"
          speed={85}
          direction="forward"
          separator="✦"
          curviness={32}
          tilt={0}
          fontSize={22}
          fontWeight={800}
          letterSpacing={1.5}
          uppercase
          ribbon
          ribbonColor="#ffffff"
          color="#1849d6"
          ribbonWidth={44}
          edgeFade={0}
          cross={false}
          crossAngle={16}
          draggable={false}
          scrollBoost={0}
          outline={false}
          pauseOnHover
          outlineWidth={1.5}
          viewHeight={130}
        />
      </div>
    </section>
  );
}

export default ServicesMarqueeSection;
