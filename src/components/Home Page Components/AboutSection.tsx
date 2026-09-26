"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  const stats = [
    { value: "500+", label: "Products & features launched" },
    { value: "98%", label: "Client retention & satisfaction" },
    { value: "$2M+", label: "Avg. revenue growth created" },
    { value: "15+", label: "Global industry recognitions" },
  ];

  return (
    <section id="about" className="relative bg-white py-20 lg:py-24 scroll-mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top 2-Column Grid: Left Content & Right Founder Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Section Label */}
            <div className="flex items-center gap-2 mb-6">
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
              className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl lg:text-4xl sm:leading-snug"
            >
              We're a digital product design and development agency, crafting expressive websites,
              apps, and brands. With a streamlined process and passionate team, we turn ideas into
              lasting, high-quality digital products.
            </motion.h2>

            {/* Two-Column Supporting Narrative */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 border-t border-zinc-100 pt-6">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm sm:text-base leading-relaxed text-zinc-600"
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
                className="text-sm sm:text-base leading-relaxed text-zinc-600"
              >
                Our agile sprints eliminate friction between design and engineering. By utilizing
                Next.js Turbopack, modern component architectures, and edge deployment pipelines, we
                ship world-class software that scales effortlessly with your business.
              </motion.p>
            </div>
          </div>

          {/* Right Column: Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="group relative aspect-[4/5] w-full max-w-[520px] lg:max-w-none overflow-hidden rounded-3xl bg-zinc-100">
              <Image
                src="https://res.cloudinary.com/vt5gqi1c/image/upload/v1790454553/founder-image.jpg"
                alt="Sparklines Studio Founder"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* 4 Stats Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-2 gap-8 border-t border-zinc-100 pt-10 sm:pt-12 sm:grid-cols-4">
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
