"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  const stats = [
    { value: "500+", label: "Products & features launched" },
    { value: "98%", label: "Client retention & satisfaction" },
    { value: "$2M+", label: "Avg. revenue growth created" },
    { value: "15+", label: "Global industry recognitions" },
  ];

  return (
    <section id="about" className="relative bg-white py-20 lg:py-12 scroll-mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-[#f95721]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            About
          </span>
        </div>

        {/* Main Narrative Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-2xl font-bold tracking-tight text-zinc-950 sm:text-4xl sm:leading-snug"
        >
          We're a digital product design and development agency, crafting expressive websites,
          apps, and brands. With a streamlined process and passionate team, we turn ideas into
          lasting, high-quality digital products.
        </motion.h2>

        {/* Two-Column Supporting Narrative */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16 border-t border-zinc-100 pt-8">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base leading-relaxed text-zinc-600"
          >
            We believe extraordinary products stem from a relentless commitment to craft and
            strategic clarity. From initial architecture to final micro-interaction details, our
            team engineers solutions that are as resilient under peak load as they are aesthetically
            captivating.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base leading-relaxed text-zinc-600"
          >
            Our agile sprints eliminate friction between design and engineering. By utilizing
            Next.js Turbopack, modern component architectures, and edge deployment pipelines, we
            ship world-class software that scales effortlessly with your business.
          </motion.p>
        </div>

        {/* 4 Stats Grid */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-zinc-100 pt-12 sm:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-1"
            >
              <div className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-zinc-500 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
