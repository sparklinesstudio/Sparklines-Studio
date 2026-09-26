"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function VideoBanner() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[400px] w-full max-w-5xl rounded-full bg-gradient-to-tr from-orange-400/10 via-amber-300/10 to-blue-400/10 blur-3xl opacity-80" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50/70 px-3.5 py-1 text-xs font-semibold text-orange-950 shadow-xs mb-4"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#f95721] animate-pulse" />
            <span>Showreel & Experience</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl"
          >
            Crafting experiences that{" "}
            <span className="font-editorial italic font-normal text-zinc-900">
              move brands forward
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-zinc-600 leading-relaxed"
          >
            A continuous glimpse into our design philosophy, creative direction, and high-performance digital craft.
          </motion.p>
        </div>

        {/* Cinematic Autoplaying Looped Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Subtle Outer Glowing Frame */}
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[36px] border border-zinc-200/80 bg-zinc-950 p-1 sm:p-2 shadow-2xl shadow-zinc-900/10">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl sm:rounded-[30px] bg-zinc-900">
              <iframe
                src="https://www.youtube.com/embed/wwIt5ZvROrs?autoplay=1&mute=1&loop=1&playlist=wwIt5ZvROrs&playsinline=1&controls=1&rel=0&modestbranding=1"
                title="Sparklines Studio Brand Video"
                className="absolute inset-0 h-full w-full object-cover border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* Bottom Ambient Glow Reflection */}
          <div className="pointer-events-none mx-auto -mt-6 h-12 max-w-3xl rounded-[100%] bg-gradient-to-b from-[#f95721]/15 to-transparent blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

// Keep backward compatibility with existing imports
export { VideoBanner as OrangeBanner };
