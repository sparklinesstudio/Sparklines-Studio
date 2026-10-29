"use client";

import React from "react";
import TextLoop from "@/components/ui/TextLoop";

export function ServicesMarqueeSection() {
  return (
    <section
      aria-label="Services Wave Ribbon Marquee"
      className="relative w-full overflow-hidden bg-white py-6 sm:py-10 border-y border-zinc-200/80 select-none"
    >
      <TextLoop
        text="Sparklines Studio ✦ Video Production ✦ Web Engineering ✦ Performance PPC ✦ Technical SEO ✦ Brand Identity"
        shape="wave"
        speed={90}
        direction="forward"
        separator="✦"
        curviness={90}
        tilt={0}
        fontSize={46}
        fontWeight={800}
        letterSpacing={2}
        uppercase
        ribbon
        ribbonColor="#5227FF"
        ribbonWidth={86}
        edgeFade={0}
        cross={false}
        crossAngle={16}
        draggable={false}
        scrollBoost={0}
        outline={false}
        pauseOnHover
        outlineWidth={1.5}
      />
    </section>
  );
}

export default ServicesMarqueeSection;
