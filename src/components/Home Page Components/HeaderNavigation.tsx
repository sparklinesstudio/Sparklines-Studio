"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeaderNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Esc key or desktop resize
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

  // Close mobile menu automatically on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Works", href: "/work" },
    { label: "Services", href: "/#services-grid" },
    { label: "Contact", href: "/#contact" },
  ];

  const isWorksActive =
    pathname === "/work" ||
    pathname.startsWith("/work/") ||
    pathname === "/works" ||
    pathname.startsWith("/works/");

  return (
    <>
      {/* Floating Top Navbar Container */}
      <div className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <header
          className={`pointer-events-auto relative flex w-full max-w-5xl items-center justify-between rounded-full px-5 sm:px-6 py-2 sm:py-2.5 transition-all duration-300 bg-white/95 backdrop-blur-md ${
            scrolled
              ? "border border-zinc-300 shadow-[0_12px_36px_rgba(0,0,0,0.1)] py-1.5 sm:py-2"
              : "border border-zinc-200/80 shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
          }`}
        >
          {/* Brand Mark (Logo) */}
          <Link
            href="/"
            className="flex items-center py-0.5 transition-transform active:scale-95 group focus:outline-hidden"
            aria-label="Sparklines Studio Home"
          >
            {!logoError ? (
              <Image
                src="/logo.png"
                alt="Sparklines Studio"
                width={140}
                height={42}
                unoptimized
                priority
                onError={() => setLogoError(true)}
                className="h-6 sm:h-7 w-auto object-contain transition-opacity duration-200 group-hover:opacity-85"
              />
            ) : (
              <span className="flex items-center gap-2 font-bold text-zinc-950 tracking-tight text-base sm:text-lg">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-950 text-white font-mono text-xs font-black">
                  SS
                </span>
                <span>
                  Sparklines<span className="text-[#f95721]">.</span>
                </span>
              </span>
            )}
          </Link>

          {/* Center Pill Navigation Links: About, Works, Services, Contact */}
          <nav className="hidden md:flex items-center gap-1 rounded-full bg-zinc-100/80 p-1 border border-zinc-200/60">
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
                      ? "bg-zinc-950 text-white shadow-xs"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Button & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <Button href="/#contact" size="sm" className="group">
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex md:hidden h-8 w-8 items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 active:scale-95 text-zinc-800 transition-all border border-zinc-200/60"
              aria-label="Open navigation menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Slide-in Drawer from the Right with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            {/* Backdrop Overlay */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              aria-hidden="true"
            />

            {/* Slide-over Drawer Panel */}
            <motion.aside
              key="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm h-full bg-white shadow-[-16px_0_48px_rgba(0,0,0,0.22)] flex flex-col justify-between p-6 z-[101] overflow-y-auto"
              aria-label="Mobile navigation"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-zinc-100">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center"
                  aria-label="Sparklines Studio Home"
                >
                  {!logoError ? (
                    <Image
                      src="/logo.png"
                      alt="Sparklines Studio"
                      width={130}
                      height={38}
                      unoptimized
                      onError={() => setLogoError(true)}
                      className="h-6 w-auto object-contain"
                    />
                  ) : (
                    <span className="flex items-center gap-2 font-bold text-zinc-950 tracking-tight text-base">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-zinc-950 text-white font-mono text-xs font-black">
                        SS
                      </span>
                      <span>
                        Sparklines<span className="text-[#f95721]">.</span>
                      </span>
                    </span>
                  )}
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="h-9 w-9 rounded-full bg-zinc-100 hover:bg-zinc-200 active:scale-95 flex items-center justify-center text-zinc-700 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Navigation Links with Staggered Entrance */}
              <div className="flex flex-col space-y-2 py-6 my-auto">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400 mb-2 px-1">
                  Navigation
                </p>
                {navLinks.map((link, idx) => {
                  const isActive =
                    (link.href === "/work" && isWorksActive) ||
                    (link.href === "/" && pathname === "/");

                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.05 * idx + 0.1,
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold transition-all ${
                          isActive
                            ? "bg-zinc-950 text-white shadow-sm"
                            : "text-zinc-800 hover:bg-zinc-100 active:bg-zinc-200/60"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`text-xs font-mono tracking-wider ${
                              isActive ? "text-zinc-400" : "text-zinc-400"
                            }`}
                          >
                            0{idx + 1}
                          </span>
                          <span>{link.label}</span>
                        </span>
                        <ArrowUpRight
                          className={`h-4 w-4 ${
                            isActive ? "text-white" : "text-zinc-400"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Drawer Footer Actions & Agency Contact */}
              <div className="space-y-4 pt-4 border-t border-zinc-100">
                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative flex w-full items-center justify-center gap-2 rounded-full bg-zinc-950 py-3.5 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#f95721] active:scale-95 group overflow-hidden"
                >
                  <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <div className="flex flex-col gap-1 text-[11px] text-zinc-500 font-mono pt-1">
                  <span className="uppercase tracking-widest text-[9px] text-zinc-400">
                    Sparklines Studio · Kolkata
                  </span>
                  <a
                    href="mailto:hello@sparklines.studio"
                    className="hover:text-zinc-900 transition-colors"
                  >
                    hello@sparklines.studio
                  </a>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
