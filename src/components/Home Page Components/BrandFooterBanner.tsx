"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function BrandFooterBanner() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", href: "#hero" },
    { label: "Work", href: "#hero" },
    { label: "Services", href: "#features" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  const socialLinks = [
    { name: "Twitter / X", href: "https://x.com" },
    { name: "GitHub", href: "https://github.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Dribbble", href: "https://dribbble.com" },
  ];

  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Scenic Wildflower Meadow Brand Banner */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <div className="relative h-[280px] sm:h-[380px] lg:h-[440px] w-full overflow-hidden rounded-3xl shadow-xl">
          {/* Scenic Meadow Background Gradient & Hills */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#60a5fa] via-[#93c5fd] to-[#d97706]" />

          {/* Distant Hills & Valley Vector */}
          <svg
            viewBox="0 0 1200 400"
            className="absolute inset-0 h-full w-full object-cover"
            preserveAspectRatio="none"
          >
            {/* Distant blue mountains */}
            <path
              d="M0 240 Q 250 180, 500 220 T 950 190 Q 1100 210, 1200 230 L 1200 400 L 0 400 Z"
              fill="#3b82f6"
              opacity="0.35"
            />
            {/* Rolling green hills */}
            <path
              d="M0 260 Q 300 210, 650 250 T 1200 240 L 1200 400 L 0 400 Z"
              fill="#15803d"
              opacity="0.75"
            />
            <path
              d="M0 290 Q 200 260, 450 280 T 900 270 Q 1100 285, 1200 295 L 1200 400 L 0 400 Z"
              fill="#16a34a"
              opacity="0.9"
            />
            {/* Warm golden meadow foreground */}
            <path
              d="M0 320 Q 350 290, 700 310 T 1200 300 L 1200 400 L 0 400 Z"
              fill="#ea580c"
              opacity="0.9"
            />
            <path
              d="M0 340 Q 250 320, 600 335 T 1200 330 L 1200 400 L 0 400 Z"
              fill="#c2410c"
              opacity="0.95"
            />
          </svg>

          {/* Golden Sun & Soft Horizon Shimmer */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 h-44 w-44 rounded-full bg-amber-200/50 blur-2xl pointer-events-none" />

          {/* Wildflowers overlay pattern (dots and flowers) */}
          <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />

          {/* Stylized Wildflower Blossoms */}
          <div className="absolute bottom-4 inset-x-0 flex justify-around px-8 z-10 pointer-events-none opacity-90">
            {["#ea580c", "#facc15", "#f43f5e", "#ffffff", "#ea580c", "#fbbf24", "#ec4899", "#ffffff", "#f97316"].map(
              (color, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center"
                  style={{ transform: `translateY(${Math.sin(idx) * 12}px)` }}
                >
                  <div
                    className="h-3 w-3 rounded-full shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                  <div className="h-6 w-0.5 bg-emerald-800/80 mt-0.5" />
                </div>
              )
            )}
          </div>

          {/* Giant Artistic Headline "Sparklines" */}
          <div className="relative z-20 flex h-full items-end justify-center pb-8 sm:pb-12 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-editorial italic font-normal tracking-tight text-white drop-shadow-md select-none text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] leading-none"
            >
              Sparklines
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Footer Navigation Bar Below Banner */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-zinc-100 pb-8 md:flex-row">
          {/* Brand mark */}
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 text-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 text-[#f95721]"
              >
                <polyline points="3 17 9 11 13 15 21 7" />
                <polyline points="17 7 21 7 21 11" />
              </svg>
            </div>
            <span className="text-sm font-semibold tracking-tight text-zinc-900">
              Sparklines Studio
            </span>
          </div>

          {/* Page Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-zinc-500">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-zinc-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-semibold text-zinc-600">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f95721] transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="flex flex-col items-center justify-between pt-6 text-xs text-zinc-400 sm:flex-row">
          <p>© {currentYear} Sparklines Studio Inc. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Engineered with Next.js, React 19, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
