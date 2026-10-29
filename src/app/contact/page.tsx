"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  ChevronDown,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { CtaFloatingSection } from "@/components/Home Page Components/CtaFloatingSection";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import "@/app/seo-agency-kolkata/seo-kolkata.css";

const STUDIO_SERVICES = [
  "Video Production & Motion",
  "Pay-per-click Advertising (PPC)",
  "Social Media Marketing",
  "Search Engine Optimization (SEO)",
  "Next.js Web Design & Engineering",
  "Branding & Visual Identity",
  "Full Growth Retainer / Custom Scope",
];

const BUDGET_OPTIONS = [
  "Under ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "₹3,00,000 – ₹8,00,000",
  "₹8,00,000+ / Enterprise Retainer",
  "Flexible / Need Scoping Call",
];

export default function ContactPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    website: "",
    service: STUDIO_SERVICES[0],
    budget: BUDGET_OPTIONS[1],
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sparklinestudio.agency@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const fullMessage = `
Service: ${formData.service}
Budget: ${formData.budget}
Email: ${formData.email}
Website: ${formData.website || "Not provided"}

Message:
${formData.message || `Inquiry regarding ${formData.service}`}
`.trim();

    try {
      // 1. Try submitting via the Next.js API route first
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          number: formData.number,
          website: formData.website,
          service: formData.service,
          message: fullMessage,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Redirect to thank you page immediately
        router.push("/thank-you");
        return;
      }

      // Fallback: direct Web3Forms client-side call
      const directKey =
        process.env.NEXT_PUBLIC_FORM_ACCESS_KEY ||
        "1cbfea18-60e8-44fe-b580-5d84c46310b2";

      const directRes = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: directKey,
          name: formData.name,
          phone: formData.number,
          email: formData.email,
          website: formData.website || "Not provided",
          service: formData.service,
          message: fullMessage,
          subject: `New Lead: ${formData.name} - ${formData.service}`,
        }),
      });

      const directData = await directRes.json();
      if (directData.success) {
        router.push("/thank-you");
        return;
      }

      setErrorMessage(
        data.message ||
          directData.message ||
          "Failed to submit. Please call or email us directly."
      );
    } catch (err: unknown) {
      console.error("Form submit error:", err);

      // Final fallback try directly
      try {
        const directKey =
          process.env.NEXT_PUBLIC_FORM_ACCESS_KEY ||
          "1cbfea18-60e8-44fe-b580-5d84c46310b2";

        const directRes = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: directKey,
            name: formData.name,
            phone: formData.number,
            email: formData.email,
            website: formData.website || "Not provided",
            service: formData.service,
            message: fullMessage,
            subject: `New Lead: ${formData.name} - ${formData.service}`,
          }),
        });
        const directData = await directRes.json();
        if (directData.success) {
          router.push("/thank-you");
          return;
        }
      } catch {
        // ignore
      }

      setErrorMessage(
        "Something went wrong while sending your request. Please call or email us directly."
      );
    } finally {
      setLoading(false);
    }
  };

  const contactFaqs = [
    {
      q: "What happens after I submit this inquiry?",
      a: "Within 24 hours (usually much faster), a Senior Partner or Technical Lead manually evaluates your domain, technical stack, and competitive footprint. We reply with initial feasibility insights and propose a 30-minute discovery call.",
    },
    {
      q: "Can we sign a mutual Non-Disclosure Agreement (NDA)?",
      a: "Absolutely. Over 80% of our enterprise and high-growth partners require mutual NDAs before sharing roadmaps, pitch decks, or proprietary codebase repositories. We are happy to review your template or provide ours.",
    },
    {
      q: "How does Sparklines structure project pricing and retainers?",
      a: "We do not believe in opaque hourly agency billing. We operate strictly on fixed milestone scopes (for brand builds, video production, and bespoke Next.js web applications) or transparent monthly performance retainers (for SEO, PPC, and full-stack growth).",
    },
    {
      q: "How fast can we kick off our project?",
      a: "Once scope, milestones, and initial sprint goals are finalized, our dedicated engineering and creative squads typically initiate Sprint 0 within 5 to 7 business days.",
    },
  ];

  return (
    <div className="bg-[#F7F6F2] text-[#0B0C10] selection:bg-blue-600 selection:text-white min-h-screen flex flex-col justify-between">
      {/* Site Floating Navbar */}
      <HeaderNavigation />

      <main>
        {/* ============================================================== */}
        {/* 1. ATMOSPHERIC HERO SECTION (MATCHING SEO-AGENCY-KOLKATA)       */}
        {/* ============================================================== */}
        <header className="relative text-white border-b border-[#232630] overflow-hidden bg-[#090B10] pt-28 sm:pt-36 lg:pt-40 min-h-[64vh] flex flex-col justify-between">
          {/* Left Vertical Edge Label */}
          <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center items-center gap-2 text-[10px] font-mono tracking-[0.28em] text-zinc-500 uppercase select-none pointer-events-none z-20 whitespace-nowrap">
            <span>EST. 2024 — KOLKATA, WB</span>
          </div>

          {/* Right Vertical Edge Label */}
          <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-center items-center gap-2 text-[10px] font-mono tracking-[0.28em] text-zinc-500 uppercase select-none pointer-events-none z-20 whitespace-nowrap">
            <span>INDEX #001 · INITIATE DIRECT TRANSMISSION</span>
          </div>

          {/* Cityscape Background Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30 z-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#090B10]/92 via-[#090B10]/75 to-[#090B10] z-0" />

          {/* Ambient Blue Horizon Glow */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[360px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none z-0" />
          <div className="ambient-glow-blue absolute top-16 right-[10%] w-[26rem] h-[26rem] rounded-full z-0 opacity-50 pointer-events-none" />

          {/* Background Giant Infinite Watermark Marquee */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none select-none z-0">
            <div className="watermark-marquee-wrap">
              <div className="flex shrink-0 items-center whitespace-nowrap text-[8rem] sm:text-[12rem] md:text-[15rem] font-bold leading-none text-white/[0.04] tracking-tight uppercase font-sans">
                <span className="pr-16">// INITIATE CONTACT //</span>
                <span className="pr-16">// INITIATE CONTACT //</span>
                <span className="pr-16">// INITIATE CONTACT //</span>
              </div>
              <div
                className="flex shrink-0 items-center whitespace-nowrap text-[8rem] sm:text-[12rem] md:text-[15rem] font-bold leading-none text-white/[0.04] tracking-tight uppercase font-sans"
                aria-hidden="true"
              >
                <span className="pr-16">// INITIATE CONTACT //</span>
                <span className="pr-16">// INITIATE CONTACT //</span>
                <span className="pr-16">// INITIATE CONTACT //</span>
              </div>
            </div>
          </div>

          {/* Hero Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-4 pb-16 sm:pb-20 w-full">
            {/* Top Status Eyebrow */}
            <div className="hero-fade-up flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.22em] text-zinc-400 mb-6 sm:mb-8">
              <span className="w-2 h-2 bg-blue-600 inline-block shadow-sm shadow-blue-600/60" />
              <span>DIRECT INQUIRY · Q1/Q2 PARTNERSHIPS OPEN</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-fade-up hero-delay-1 text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-white leading-[1.08] max-w-4xl">
              Let&apos;s Build Something <br />
              <span className="font-editorial italic font-normal text-blue-400">
                Extraordinary Together.
              </span>
            </h1>

            {/* Subheading */}
            <p className="hero-fade-up hero-delay-2 mt-6 max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
              Whether you need category-defining branding, cinematic video production,
              or high-converting Next.js web applications — connect directly with our
              leads. We review every submission within 24 hours.
            </p>
          </div>
        </header>

        {/* ============================================================== */}
        {/* 2. MAIN CONTACT SECTION: FORM & DIRECT AGENCY DETAILS          */}
        {/* ============================================================== */}
        <section className="relative py-16 sm:py-24 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Connect & Proof Details (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Studio Info Card */}
              <div className="rounded-3xl bg-white border border-zinc-200 p-7 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-600 mb-3">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Kolkata HQ & Global Delivery</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 font-sans tracking-tight">
                  Direct Studio Access
                </h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  No account managers or generic sales queues. You speak directly
                  with engineers, designers, and growth architects who do the work.
                </p>

                {/* Contact List */}
                <div className="mt-6 space-y-5 border-t border-zinc-100 pt-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase text-zinc-400">
                        Direct Lines
                      </p>
                      <div className="flex flex-col gap-1 mt-1 font-semibold text-zinc-900 text-sm">
                        <a
                          href="tel:9641861932"
                          className="hover:text-blue-600 transition-colors"
                        >
                          +91 9641861932
                        </a>
                        <a
                          href="tel:8101520236"
                          className="hover:text-blue-600 transition-colors"
                        >
                          +91 8101520236
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email with 1-Click Copy */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="w-full">
                      <p className="text-xs font-mono uppercase text-zinc-400">
                        Email Inquiries
                      </p>
                      <div className="flex items-center justify-between gap-2 mt-1">
                        <a
                          href="mailto:sparklinestudio.agency@gmail.com"
                          className="text-sm font-semibold text-zinc-900 hover:text-blue-600 transition-colors break-all"
                        >
                          sparklinestudio.agency@gmail.com
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="p-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-950 transition-colors"
                          title="Copy email"
                        >
                          {copied ? (
                            <Check className="h-3.5 w-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Studio Location */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase text-zinc-400">
                        Physical Studio
                      </p>
                      <p className="text-sm font-semibold text-zinc-900 mt-1">
                        Kolkata, West Bengal, India
                      </p>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        Salt Lake Sector V Tech Hub
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Strip */}
              <div className="rounded-3xl bg-zinc-950 text-white p-7 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 h-36 w-36 bg-blue-600/30 rounded-full blur-[50px] pointer-events-none" />
                <h4 className="text-lg font-bold font-sans tracking-tight flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-blue-400" />
                  <span>The Sparklines Commitment</span>
                </h4>
                <div className="mt-5 space-y-3.5 text-xs sm:text-sm text-zinc-300">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Guaranteed NDA protection prior to technical disclosure</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Detailed roadmap & architecture audit within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Fixed milestone pricing with zero hidden surcharges</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white border border-zinc-200/90 p-7 sm:p-10 shadow-xl relative">
                <div className="flex items-center justify-between pb-6 border-b border-zinc-100 mb-7">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-sans text-zinc-950 tracking-tight">
                      Project Specification
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                      Tell us about your objectives. We will review and prepare a custom scope.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-medium border border-blue-100">
                    <Clock className="h-3 w-3" />
                    <span>Response &lt; 24h</span>
                  </div>
                </div>

                {errorMessage && (
                  <div className="mb-6 rounded-2xl bg-rose-50 border border-rose-200 p-4 text-xs sm:text-sm text-rose-800 flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 shrink-0 text-rose-600 mt-0.5" />
                    <div>
                      <p className="font-semibold">Submission Alert</p>
                      <p className="mt-0.5 text-xs text-rose-700">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-2"
                      >
                        Your Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all shadow-inner"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-2"
                      >
                        Work Email <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Phone & Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="number"
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-2"
                      >
                        Phone / WhatsApp <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="number"
                        name="number"
                        required
                        value={formData.number}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all shadow-inner"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="website"
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-2"
                      >
                        Website / Domain URL
                      </label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://yourbrand.com"
                        className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Service Needed Selection */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-2"
                    >
                      Primary Capability Needed
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-2xl border border-zinc-200 bg-zinc-50/50 px-4 py-3.5 pr-10 text-sm text-zinc-900 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all cursor-pointer shadow-inner"
                      >
                        {STUDIO_SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                    </div>
                  </div>

                  {/* Budget Options */}
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-2"
                    >
                      Estimated Budget / Investment Range
                    </label>
                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-2xl border border-zinc-200 bg-zinc-50/50 px-4 py-3.5 pr-10 text-sm text-zinc-900 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all cursor-pointer shadow-inner"
                      >
                        {BUDGET_OPTIONS.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                    </div>
                  </div>

                  {/* Project Scope / Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-2"
                    >
                      Brief Project Overview
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your goals, timeline, and current roadblocks..."
                      className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4 text-sm text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all resize-none shadow-inner"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="relative flex w-full items-center justify-center gap-2.5 rounded-full bg-zinc-950 hover:bg-blue-600 active:scale-98 py-4 px-8 text-sm font-semibold text-white shadow-xl transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden"
                  >
                    <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-white" />
                        <span>Transmitting Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief & Request Audit</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-zinc-400 font-mono">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy-policy" className="underline hover:text-zinc-600">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms" className="underline hover:text-zinc-600">
                      Terms of Service
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. FREQUENTLY ASKED QUESTIONS SECTION (ACCORDION)              */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-20 border-t border-zinc-200/80 bg-white">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600">
                Transparent Collaboration
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-sans text-zinc-950 tracking-tight mt-2">
                Frequently Asked Inquiries
              </h2>
            </div>

            <div className="space-y-4">
              {contactFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-zinc-200 overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-5 sm:p-6 text-left font-semibold text-zinc-900 hover:text-blue-600 transition-colors"
                    >
                      <span className="text-base sm:text-lg">{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Blue Theme Footer */}
      <CtaFloatingSection />

      {/* Global Brand Footer */}
      <BrandFooterBanner />
    </div>
  );
}
