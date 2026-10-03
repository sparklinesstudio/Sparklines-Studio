"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function HeaderNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Esc key or resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Works", href: "/work", highlight: true },
    { label: "Services", href: "/#services-grid" },
    { label: "Contact", href: "/#contact" },
  ];

  const isWorksActive = pathname === "/work" || pathname.startsWith("/work/");

  return (
    <div className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <header
        className={`pointer-events-auto relative flex w-full max-w-4xl items-center justify-between rounded-full px-4 sm:px-6 py-2 sm:py-2.5 transition-all duration-300 bg-[#E8E8EB] ${
          scrolled
            ? "border border-[#d2d2d6] shadow-[0_12px_32px_rgba(0,0,0,0.1)] py-1.5 sm:py-2"
            : "border border-[#d8d8dc] shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
        }`}
      >
        {/* Brand Mark (Logo) - Absolutely NO background, sits seamlessly on navbar */}
        <Link
          href="/"
          className="flex items-center py-0.5 transition-transform active:scale-95 group focus:outline-hidden"
          aria-label="Sparklines Studio Home"
        >
          <Image
            src="/logo.png"
            alt="Sparklines Studio"
            width={135}
            height={40}
            className="h-6 sm:h-7 w-auto object-contain transition-opacity duration-200 group-hover:opacity-85"
            priority
          />
        </Link>

        {/* Center Pill Navigation Links: About, Works, Services, Contact */}
        <nav className="hidden md:flex items-center gap-1 rounded-full bg-black/[0.05] p-1 border border-black/[0.03]">
          {navLinks.map((link) => {
            const isActive =
              (link.href === "/work" && isWorksActive) ||
              (link.href === "/" && pathname === "/");

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 active:scale-95 ${
                  isActive
                    ? "bg-white text-zinc-950 shadow-xs"
                    : "text-zinc-600 hover:text-zinc-950 hover:bg-black/[0.04]"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {link.label}
                  {link.highlight && (
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f95721]" />
                  )}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button (High-End Obsidian Glass Pill) */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <Link
            href="/#contact"
            className="relative inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-4 sm:px-5 py-2 text-xs font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.16)] transition-all duration-300 hover:bg-[#f95721] hover:shadow-[0_6px_20px_rgba(249,87,33,0.35)] active:scale-95 group overflow-hidden"
          >
            <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden h-8 w-8 items-center justify-center rounded-full bg-black/[0.05] hover:bg-black/[0.08] active:scale-95 text-zinc-800 transition-all"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu Card */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ type: "spring", damping: 26, stiffness: 360 }}
              className="absolute top-full inset-x-0 mt-2.5 rounded-3xl bg-[#E8E8EB] border border-[#d2d2d6] p-5 shadow-2xl md:hidden overflow-hidden"
            >
              {/* Mobile Header with brand logo without background */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.08]">
                <Image
                  src="/logo.png"
                  alt="Sparklines Studio"
                  width={110}
                  height={32}
                  className="h-5 w-auto object-contain"
                />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Menu
                </span>
              </div>

              {/* Nav links */}
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive =
                    (link.href === "/work" && isWorksActive) ||
                    (link.href === "/" && pathname === "/");

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-white text-zinc-950 font-bold shadow-xs"
                          : "text-zinc-700 hover:bg-black/[0.04] active:bg-black/[0.07]"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {link.label}
                        {link.highlight && (
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded-md bg-orange-100 text-[#f95721] font-bold">
                            Archive
                          </span>
                        )}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-zinc-400" />
                    </Link>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <div className="pt-3 mt-3 border-t border-black/[0.08]">
                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative flex w-full items-center justify-center gap-2 rounded-full bg-zinc-950 py-3 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#f95721] active:scale-95 group overflow-hidden"
                >
                  <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}

