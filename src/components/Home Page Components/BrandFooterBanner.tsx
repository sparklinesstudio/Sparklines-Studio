"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUp, Check } from "lucide-react";

export function BrandFooterBanner() {
  const currentYear = new Date().getFullYear();
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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

  const boringStuff = [
    { label: "Contact Us", href: "/contact" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Refund Policy", href: "/terms#refund" },
    { label: "Cookie Policy", href: "/privacy-policy#cookies" },
    { label: "Accessibility Statement", href: "/terms#accessibility" },
  ];

  const helpfulLinks = [
    { label: "Selected Works", href: "/work" },
    { label: "Studio Capabilities", href: "/services" },
    { label: "Kolkata SEO Lab", href: "/seo-agency-kolkata" },
    { label: "Video Production", href: "/services/video-production" },
    { label: "House of Kolam Flagship", href: "/work/branding/house-of-kolam" },
    { label: "Client Testimonials", href: "/#testimonials" },
  ];

  return (
    <footer className="relative w-full bg-white text-zinc-600 overflow-hidden border-t border-zinc-200/90 selection:bg-orange-500/20 selection:text-orange-950">
      {/* Top Subtle Warm Ambient Accent */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-300 to-transparent pointer-events-none" />

      {/* Full Width Container */}
      <div className="relative w-full px-6 sm:px-10 lg:px-16 xl:px-20 pt-16 sm:pt-20 lg:pt-24 pb-8">
        {/* 4 Editorial Columns Matching Reference Aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-14 sm:pb-16 border-b border-zinc-200/80 items-start">
          {/* Column 1: Our Mission (4 cols on lg) */}
          <div className="lg:col-span-4 pr-0 lg:pr-6">
            <h3 className="font-editorial text-2xl sm:text-3xl text-zinc-950 font-normal tracking-tight mb-4 sm:mb-5">
              Our Mission
            </h3>
            <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed font-normal">
              We&apos;re not just another digital agency. We&apos;re brand architects,
              growth engineers, and creative producers crafting digital flagships
              from the ground up. We partner with ambitious founders and global
              brands who demand category leadership, verified search authority,
              and cinematic conversion.
            </p>
          </div>

          {/* Column 2: The Boring Stuff (2.5 cols on lg) */}
          <div className="lg:col-span-2 sm:pl-2">
            <h3 className="font-editorial text-2xl sm:text-3xl text-zinc-950 font-normal tracking-tight mb-4 sm:mb-5">
              The Boring Stuff
            </h3>
            <ul className="space-y-2.5 text-sm">
              {boringStuff.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-600 hover:text-zinc-950 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Helpful Links (2.5 cols on lg) */}
          <div className="lg:col-span-2">
            <h3 className="font-editorial text-2xl sm:text-3xl text-zinc-950 font-normal tracking-tight mb-4 sm:mb-5">
              Helpful Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {helpfulLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-600 hover:text-zinc-950 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Join the Inner Circle / Newsletter (4 cols on lg) */}
          <div className="lg:col-span-4">
            <h3 className="font-editorial text-2xl sm:text-3xl text-zinc-950 font-normal tracking-tight mb-4 sm:mb-5">
              Join the Inner Circle
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed mb-5">
              Save hours of trial and error. Receive curated briefings on design
              engineering, high-converting video, and search dominance.
            </p>

            {subscribed ? (
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-center">
                <p className="text-xs sm:text-sm font-medium text-emerald-800 flex items-center justify-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" /> You&apos;re subscribed! Welcome to the dispatch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Your email"
                  className="w-full rounded-full bg-zinc-50 border border-zinc-300 px-5 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-all shadow-inner"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#F2DE9C] hover:bg-[#ebd083] active:scale-98 text-zinc-950 font-bold uppercase tracking-wider text-xs py-3.5 transition-all shadow-md shadow-amber-900/10 cursor-pointer text-center"
                >
                  SIGN UP
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Monumental Brand Typography Across Full Width — Scaled Proportional To NEVER Cut Out */}
        <div className="w-full py-8 sm:py-12 lg:py-16 flex items-center justify-center select-none overflow-hidden">
          <h1 className="font-editorial font-normal tracking-tight text-zinc-950 text-[clamp(2rem,7.8vw,9.5rem)] leading-none text-center select-none whitespace-nowrap pointer-events-none transition-colors duration-500">
            Sparklines Studio
          </h1>
        </div>

        {/* Bottom Utility Bar: Copyright & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-zinc-200/80 text-xs text-zinc-500">
          <span>© {currentYear}, Sparklines Studio. All rights reserved.</span>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-200 px-4 py-1.5 text-xs text-zinc-700 hover:text-zinc-950 transition-all cursor-pointer shadow-xs group"
            title="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default BrandFooterBanner;
