"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function HeaderNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Works", href: "/work" },
    { label: "Services", href: "/#services-grid" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <div className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <header
        className={`pointer-events-auto relative flex w-full max-w-4xl items-center justify-between rounded-full px-4 sm:px-6 py-2 sm:py-2.5 transition-all duration-300 bg-white border border-zinc-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.08)]`}
      >
        {/* Brand Mark (Logo) - prominent and enlarged */}
        <Link
          href="/"
          className="flex items-center py-0.5 transition-transform active:scale-95 group"
        >
          <div className="relative h-10 sm:h-12 w-36 sm:w-84 flex items-center overflow-hidden">
            <Image
              src="/logo.png"
              alt="Sparklines Studio"
              fill
              className="object-contain scale-[2.2] origin-left"
              priority
            />
          </div>
        </Link>

        {/* Center Pill Navigation Links: About, Works, Services, Contact */}
        <nav className="hidden md:flex items-center gap-1 rounded-full ios-segment p-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="ios-segment-pill rounded-full px-4 py-1.5 text-xs font-semibold text-zinc-600 active:scale-95"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Button (iPhone Crystal / Dynamic Island Glass Pill) */}
        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="relative inline-flex items-center gap-1.5 rounded-full bg-zinc-950/95 px-4 py-2 sm:px-5 sm:py-2 text-xs font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-all duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_6px_20px_rgba(249,87,33,0.35)] active:scale-95 group overflow-hidden"
          >
            <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden h-8 w-8 items-center justify-center rounded-full bg-white/80 border border-white/60 shadow-xs text-zinc-800 hover:bg-white active:scale-95 transition-all"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu (iPhone Frosted Glass Card) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="absolute top-full inset-x-0 mt-3 rounded-3xl bg-white border border-zinc-200/90 p-5 shadow-2xl md:hidden"
            >
              <div className="absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none rounded-full" />
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-white/80 active:bg-white/95 transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="text-zinc-400">→</span>
                  </Link>
                ))}
                <div className="pt-2 border-t border-black/5">
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative flex w-full items-center justify-center gap-2 rounded-full bg-zinc-950/95 py-3 text-xs font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-all duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_6px_20px_rgba(249,87,33,0.35)] active:scale-95 group overflow-hidden"
                  >
                    <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                    <span>Start a Project</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
