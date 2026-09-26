"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function HeaderNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#features" },
    { label: "Expertise", href: "#expertise" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200/60 transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-[#f95721]"
            >
              <polyline points="3 17 9 11 13 15 21 7" />
              <polyline points="17 7 21 7 21 11" />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight text-zinc-900">
            Sparklines<span className="text-zinc-500 font-normal ml-1">Studio</span>
          </span>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative transition-colors hover:text-zinc-950 py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-xs font-semibold tracking-wide text-white transition-all duration-200 hover:bg-zinc-800 hover:shadow-md hover:shadow-zinc-900/10 active:scale-95"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex md:hidden p-2 text-zinc-700 hover:text-zinc-900 rounded-lg hover:bg-zinc-100 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-zinc-200 bg-white px-6 py-6 md:hidden"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-700 hover:text-zinc-950"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-zinc-900 py-3 text-sm font-semibold text-white"
                >
                  Get in touch
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
