"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowUp,
  Copy,
  Check,
  Mail,
  Sparkles,
} from "lucide-react";

export function BrandFooterBanner() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@sparklines.studio");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmailInput("");
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const capabilities = [
    { label: "Video Production & Motion", href: "#features" },
    { label: "Next.js Web Engineering", href: "#features" },
    { label: "Performance PPC & Meta Ads", href: "#features" },
    { label: "Technical SEO & Growth", href: "#features" },
    { label: "Brand Identity & Systems", href: "#features" },
    { label: "High-Converting Landers", href: "#features" },
  ];

  const company = [
    { label: "About Sparklines", href: "#about" },
    { label: "Our Creative Stack", href: "#features" },
    { label: "Client Showcase", href: "#work" },
    { label: "Wall of Love", href: "#testimonials" },
    { label: "Careers", href: "#contact", badge: "Hiring" },
    { label: "Contact Us", href: "#contact" },
  ];

  const resources = [
    { label: "Agency ROI Calculator", href: "#contact" },
    { label: "Modern Stack Blueprint", href: "#features" },
    { label: "SEO Performance Checklist", href: "#features" },
    { label: "Brand Guidelines & Press Kit", href: "#about" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  const socialLinks = [
    { name: "Twitter / X", href: "https://x.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Instagram", href: "https://instagram.com" },
    { name: "GitHub", href: "https://github.com" },
    { name: "Dribbble", href: "https://dribbble.com" },
  ];

  const metrics = [
    { value: "$48M+", label: "Revenue Generated for Partners" },
    { value: "14 Days", label: "Average Turnaround & MVP Speed" },
    { value: "99.4%", label: "Client Satisfaction & Retention" },
    { value: "4.9 ★", label: "Clutch & Google Verified Rating" },
  ];

  return (
    <footer className="relative bg-white text-zinc-600 overflow-hidden border-t border-zinc-200/90">
      {/* Top Accent Border Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#f95721]/30 to-transparent pointer-events-none" />

      {/* Subtle Ambient Glows */}
      <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-orange-500/[0.025] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 h-96 w-96 rounded-full bg-sky-500/[0.025] blur-[140px] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-12">
        {/* Tier 1: High-Impact Agency CTA Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 sm:pb-20 border-b border-zinc-200/80 items-start">
          {/* Left Hero Statement & Direct Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Live Client Capacity Status Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 text-xs text-emerald-800 mb-6 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium tracking-wide">
                Booking Open for Q4 & 2026 — 2 spots open
              </span>
            </div>

            {/* Editorial Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 font-editorial leading-[1.15]">
              Let&apos;s build something <br />
              <span className="font-editorial italic font-normal text-zinc-800">
                extraordinary together.
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-zinc-600 max-w-xl leading-relaxed">
              We partner with visionary founders and global brands to design,
              engineer, and scale high-impact digital experiences that dominate
              their category.
            </p>

            {/* Action Buttons Row */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link href="#contact">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950/95 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-[0_8px_25px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/15 transition-all duration-300 hover:bg-[#f95721] hover:border-[#f95721]/50 hover:shadow-[0_10px_30px_rgba(249,87,33,0.38)] active:scale-95 group overflow-hidden cursor-pointer"
                >
                  <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />
                  <span>Start your project</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </Link>

              {/* Direct Email One-Click Copy Pill */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-full bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-200/90 px-5 py-3.5 text-xs sm:text-sm font-medium text-zinc-800 hover:text-zinc-950 transition-all duration-200 active:scale-95 cursor-pointer shadow-xs"
                title="Click to copy email address"
              >
                <Mail className="h-4 w-4 text-[#f95721]" />
                <span>hello@sparklines.studio</span>
                {copied ? (
                  <span className="inline-flex items-center gap-1 text-emerald-600 text-xs ml-1 font-semibold">
                    <Check className="h-3.5 w-3.5" /> Copied
                  </span>
                ) : (
                  <Copy className="h-3.5 w-3.5 text-zinc-400 hover:text-zinc-700 ml-1" />
                )}
              </button>
            </div>
          </div>

          {/* Right Newsletter & Quarterly Briefing Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-zinc-50 border border-zinc-200/90 p-6 sm:p-8 shadow-xs overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#f95721]">
                <Sparkles className="h-4 w-4" />
                <span>The Studio Dispatch</span>
              </div>

              <h3 className="mt-2 text-lg sm:text-xl font-bold text-zinc-950 tracking-tight">
                Insights for ambitious scale-ups
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Bi-weekly playbooks on modern design engineering, high-converting video, and paid media ROI. No spam, ever.
              </p>

              {subscribed ? (
                <div className="mt-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-center">
                  <p className="text-xs sm:text-sm font-medium text-emerald-800 flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" /> You&apos;re subscribed! Welcome to the dispatch.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="mt-6 space-y-3">
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="Enter your work email..."
                      className="w-full rounded-full bg-white border border-zinc-300 px-4 py-3 pr-24 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#f95721] focus:ring-1 focus:ring-[#f95721] transition-all shadow-inner"
                    />
                    <button
                      type="submit"
                      className="absolute right-1.5 top-1.5 bottom-1.5 inline-flex items-center justify-center rounded-full bg-zinc-950 hover:bg-[#f95721] px-5 text-xs font-semibold text-white transition-all duration-200 cursor-pointer active:scale-95 shadow-xs"
                    >
                      Join
                    </button>
                  </div>
                  <p className="text-[11px] text-zinc-500">
                    Trusted by 4,200+ founders and creative directors globally.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Tier 2: Studio Impact & Proof Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-b border-zinc-200/80">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight font-editorial">
                {metric.value}
              </span>
              <span className="mt-1 text-xs sm:text-sm text-zinc-500">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Tier 3: Multi-Column Sitemap Architecture */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 py-12 sm:py-16 border-b border-zinc-200/80">
          {/* Column 1: Capabilities */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-4">
              Capabilities
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {capabilities.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-zinc-600 hover:text-[#f95721] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {company.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Link
                    href={item.href}
                    className="text-zinc-600 hover:text-[#f95721] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                  {item.badge && (
                    <span className="rounded-full bg-orange-50 border border-orange-200/80 px-2 py-0.5 text-[10px] font-semibold text-[#f95721]">
                      {item.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources & Trust */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-4">
              Resources
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {resources.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-zinc-600 hover:text-[#f95721] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Global Studios & Connect */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-4">
              Studios & Connect
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-zinc-600">
              <div>
                <p className="font-medium text-zinc-900">Bangalore HQ</p>
                <p className="text-zinc-500 text-xs">Indiranagar, Bangalore, India</p>
              </div>
              <div>
                <p className="font-medium text-zinc-900">Studio Hours</p>
                <p className="text-zinc-500 text-xs">Mon – Fri · 9:00 AM – 7:00 PM IST</p>
              </div>

              {/* Social Channels List */}
              <div className="pt-2">
                <p className="font-medium text-zinc-900 mb-2.5">Follow Us</p>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-200 px-3 py-1.5 text-xs text-zinc-700 hover:text-zinc-950 transition-colors"
                    >
                      <span>{social.name}</span>
                      <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 4: Monumental Brand Typography Watermark */}
        <div className="relative py-8 sm:py-12 flex items-center justify-center select-none overflow-hidden">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-editorial italic font-normal tracking-tight text-zinc-950/[0.04] hover:text-zinc-950/[0.08] transition-colors duration-700 text-center text-[12vw] leading-none pointer-events-none"
          >
            Sparklines Studio
          </motion.h1>
        </div>

        {/* Tier 5: Bottom Utility & Legal Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-zinc-200/80 text-xs text-zinc-500">
          {/* Brand Mark and Identity */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full overflow-hidden bg-black border border-zinc-200 shadow-xs">
              <Image
                src="https://res.cloudinary.com/vt5gqi1c/image/upload/v1790456941/WhatsApp_Image_2026-09-27_at_02.30.07.jpg"
                alt="Sparklines Studio Logo"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-semibold text-zinc-900">
                Sparklines Studio Inc.
              </span>
              <span className="hidden sm:inline text-zinc-500 ml-2">
                — Built for ambitious brands.
              </span>
            </div>
          </div>

          {/* Operational Status */}
          <div className="flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200/80 px-3 py-1 text-emerald-800 font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span>All systems operational · 99.98% uptime</span>
          </div>

          {/* Copyright & Scroll To Top */}
          <div className="flex items-center gap-6">
            <span>© {currentYear} Sparklines. All rights reserved.</span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-200 px-3.5 py-1.5 text-xs text-zinc-700 hover:text-zinc-950 transition-all cursor-pointer shadow-xs group"
              title="Scroll to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default BrandFooterBanner;
