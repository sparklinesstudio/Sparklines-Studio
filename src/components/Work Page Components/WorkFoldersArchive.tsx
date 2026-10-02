"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

// =========================================================================
// PROJECT DATA
// =========================================================================

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "oraanj",
    title: "Oraanj Interior Designs",
    category: "Architecture & Web Platform",
    year: "2026",
    description:
      "Bespoke digital architecture for London's premier luxury renovation studio. Cinematic spatial storytelling and organic search funnels.",
    image:
      "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_80,c_fill,w_800,h_600/v1788801541/Oraanj_Interiors_Design_bd8exo.png",
    liveUrl: "https://oraanj-interiors.co.uk/",
  },
  {
    id: "contekst",
    title: "Contekst Studio",
    category: "Architectural Portfolio",
    year: "2026",
    description:
      "Editorial digital portfolio for Belgian architectural masters. Raw materiality, serene whitespace, and ultra-high-resolution galleries.",
    image:
      "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_80,c_fill,w_800,h_600/v1788801506/Contekst_o2pipv.png",
    liveUrl: "https://www.contekst.be/",
  },
  {
    id: "luxoria",
    title: "Luxoria Heritage",
    category: "Luxury Residential & Branding",
    year: "2025",
    description:
      "Multilingual digital flagship serving the French Riviera, Paris, and Monaco for multimillion-euro private estate transformations.",
    image:
      "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_80,c_fill,w_800,h_600/v1788801474/Luxoria_1_caa7j2.png",
    liveUrl: "https://www.luxoria.fr/",
  },
  {
    id: "maison-moghadam",
    title: "Maison Moghadam",
    category: "Haute Antiquity & E-Commerce",
    year: "2025",
    description:
      "Curating 300-year-old weaving histories into a digital boutique for connoisseurs, museums, and private estates.",
    image:
      "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_80,c_fill,w_800,h_600/v1788801500/MaisonMoghadam_vs9nx6.png",
    liveUrl: "https://www.maisonmoghadam.com/",
  },
  {
    id: "5star-decor",
    title: "5 Star Decor",
    category: "Luxury Furnishings & Web",
    year: "2025",
    description:
      "Premium home furnishing e-commerce platform with immersive product showcases and high-conversion funnels.",
    image:
      "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_80,c_fill,w_800,h_600/v1788801519/5_Star_Decor_dxffyl.png",
  },
  {
    id: "decadent-depictions",
    title: "Decadent Depictions",
    category: "Cinematic Video Production",
    year: "2026",
    description:
      "High-production commercial cinematography and viral vertical reels for hospitality and lifestyle brands.",
    image:
      "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_80,c_fill,w_800,h_600/v1790754956/image_5_lrkzwt.webp",
  },
  {
    id: "chiffon-spice",
    title: "Chiffon & Spice",
    category: "Brand Identity & Social",
    year: "2026",
    description:
      "Luxury pastry branding and aesthetic social video series boosting direct-to-consumer pre-orders by 310%.",
    image:
      "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_80,c_fill,w_800,h_600/v1790754957/image_9_jazm8w.webp",
  },
  {
    id: "aura-living",
    title: "Aura Architectural Living",
    category: "Web Platform & 3D Visuals",
    year: "2025",
    description:
      "Modernist property developer portal with interactive floorplans and virtual walkthroughs for high-net-worth clients.",
    image:
      "https://res.cloudinary.com/dbwrnwa3l/image/upload/f_auto,q_80,c_fill,w_800,h_600/v1790754957/image_10_xrm6rx.webp",
  },
];

// =========================================================================
// ANIMATION VARIANTS
// =========================================================================

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

// =========================================================================
// COMPONENT
// =========================================================================

export function WorkFoldersArchive() {
  return (
    <div className="w-full">
      {/* Top helper line */}
      <div className="flex items-center justify-between pb-6 sm:pb-8 px-1 text-xs font-mono text-blue-300/70">
        <span className="tracking-widest uppercase">Selected Projects</span>
        <span>{PROJECTS.length} Works</span>
      </div>

      {/* Masonry-style grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
      >
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className={`group relative ${idx === 0 ? "sm:col-span-2" : ""}`}
          >
            <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0d2754] border border-blue-500/20 shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-shadow duration-500 hover:shadow-[0_16px_50px_rgba(59,130,246,0.2)] hover:border-blue-400/40">
              {/* Specular top edge */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-300/30 to-transparent z-10 pointer-events-none" />

              {/* Image */}
              <div
                className={`relative w-full overflow-hidden ${
                  idx === 0 ? "aspect-[16/8]" : "aspect-[16/11]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.category}`}
                  fill
                  sizes={
                    idx === 0
                      ? "(max-width: 640px) 100vw, 90vw"
                      : "(max-width: 640px) 100vw, 50vw"
                  }
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Bottom gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071224] via-[#071224]/40 to-transparent opacity-90" />
              </div>

              {/* Text overlay at bottom */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 lg:p-8 z-10">
                <div className="flex flex-col gap-3">
                  {/* Category & Year */}
                  <div className="flex items-center gap-3 text-xs font-mono text-blue-300/80">
                    <span className="uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="w-px h-3 bg-blue-400/40" />
                    <span>{project.year}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-bold tracking-tight text-white font-sans leading-tight ${
                      idx === 0
                        ? "text-2xl sm:text-3xl lg:text-4xl"
                        : "text-xl sm:text-2xl"
                    }`}
                  >
                    {project.title}
                  </h3>

                  {/* Description — only on featured (first) or on larger screens */}
                  <p
                    className={`text-sm text-blue-100/70 leading-relaxed max-w-xl ${
                      idx === 0 ? "" : "hidden lg:block"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Action links */}
                  <div className="flex items-center gap-3 pt-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-white border border-white/15 transition-all duration-300 hover:bg-white hover:text-zinc-950"
                      >
                        <span>Visit Live</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 transition-colors hover:text-white"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
