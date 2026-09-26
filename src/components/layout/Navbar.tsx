"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/60 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Logo />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link href="#contact" className="hidden sm:inline-flex">
            <Button size="sm" className="group">
              <span>Start a Project</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-200 bg-white px-4 py-6 md:hidden dark:border-zinc-800 dark:bg-zinc-950">
          <nav className="flex flex-col space-y-4">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full"
              >
                <Button className="w-full">Start a Project</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
