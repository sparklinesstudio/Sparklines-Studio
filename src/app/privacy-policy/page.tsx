"use client";

import React from "react";
import Link from "next/link";
import { Shield, Lock, FileText, ArrowLeft, Mail, Phone } from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { CtaFloatingSection } from "@/components/Home Page Components/CtaFloatingSection";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import "@/app/seo-agency-kolkata/seo-kolkata.css";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "scope",
      title: "1. Scope & Commitment to Privacy",
      content: `Sparklines Studio Inc. ("Sparklines Studio", "we", "our", or "us") provides bespoke digital product design, Next.js web application engineering, video production, and search engine optimization services to businesses worldwide. We take the privacy of our website visitors, prospective partners, and enterprise clients with extreme seriousness. This Privacy Policy outlines the types of information we collect, how it is utilized and safeguarded, and your legal rights under applicable international data protection regulations, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and India's Digital Personal Data Protection Act (DPDP).`,
    },
    {
      id: "information-collected",
      title: "2. Information We Collect",
      content: `We collect personal and technical information only to the extent necessary to deliver our services, communicate with prospective clients, and optimize our digital platform:

• Direct Client Submissions: When you submit an inquiry through our contact form, request a strategy consultation, or email us directly, we collect your full name, business email address, phone/WhatsApp number, company name, website URL, estimated budget range, and project scope details.
• Technical & Device Analytics: When you browse our website, we automatically collect anonymized technical logs, including IP addresses, browser specifications, operating system, referring URL, time spent on specific case studies, and interaction metrics.
• Project & Client Assets: In the course of executing client contracts, we may receive brand guidelines, media assets, codebase repositories, and analytics access under strict mutual non-disclosure agreements (NDAs).`,
    },
    {
      id: "usage",
      title: "3. How We Use Your Data",
      content: `Sparklines Studio processes collected information strictly for legitimate commercial and engineering purposes:

• To evaluate your project requirements and prepare customized feasibility audits, architectural proposals, and milestone timelines.
• To communicate directly regarding ongoing sprints, project deliverables, and milestone signoffs.
• To send bi-weekly editorial dispatches and industry briefs (only if explicitly opted-in; you can unsubscribe at any time with one click).
• To analyze website performance, optimize page load velocities, and detect security vulnerabilities.
• We never sell, rent, monetize, or trade your personal or business data to third-party data brokers or marketing lists under any circumstances.`,
    },
    {
      id: "cookies",
      title: "4. Cookie Policy & Tracking Technologies",
      content: `Our website utilizes standard HTTP cookies and local storage tokens to ensure secure navigation, responsive interface state, and aggregate performance insights:

• Essential Cookies: Necessary for basic routing, mobile navigation drawer state, and form CSRF token validation.
• Analytics Cookies: Anonymized Google Analytics and Vercel Speed Insights tokens that measure aggregate page view velocity, bounce rates, and traffic sources. No personally identifiable information (PII) is stored in these telemetry cookies.
• You can configure your browser to reject all cookies or notify you when a cookie is placed. Note that disabling essential cookies may impact certain dynamic transitions.`,
    },
    {
      id: "third-parties",
      title: "5. Sub-processors & Third-Party Service Providers",
      content: `We partner with trusted, SOC2 and ISO-compliant cloud infrastructure providers to operate our platform:

• Vercel Inc. (Cloud edge hosting, serverless computing, and global CDN delivery)
• Web3Forms (Encrypted contact form transmission and spam-filtered email delivery)
• Cloudinary (High-definition media delivery, video compression, and responsive image caching)
• Google Workspace (Encrypted enterprise communication and scheduling)
All third-party sub-processors are bound by strict Data Processing Agreements (DPAs) and confidentiality terms.`,
    },
    {
      id: "security",
      title: "6. Data Security & Storage Protocols",
      content: `We employ industry-standard administrative, physical, and technical defenses to safeguard your data. All data transmitted to and from our site is encrypted using Transport Layer Security (TLS 1.3/SSL). Internal repository access, client brand boards, and communication channels are restricted to authorized personnel using role-based multi-factor authentication (MFA). While no internet transmission is 100% impenetrable, we actively monitor our stack against unauthorized access or disclosure.`,
    },
    {
      id: "rights",
      title: "7. Your Rights & Data Subject Requests",
      content: `Depending on your geographic jurisdiction, you hold substantial statutory rights over your personal data:

• Right to Access: You may request a verified copy of all personal data Sparklines Studio holds about you.
• Right to Rectification: You may request corrections to any inaccurate, outdated, or incomplete personal records.
• Right to Erasure ("Right to be Forgotten"): You may request complete deletion of your contact records from our active databases, subject to statutory accounting and tax retention obligations.
• Right to Withdraw Consent: You may revoke marketing or dispatch consent at any moment.

To exercise any of these rights, contact our Data Protection Lead directly at sparklinestudio.agency@gmail.com.`,
    },
    {
      id: "contact-privacy",
      title: "8. Contact Our Data Protection Lead",
      content: `If you have any questions, compliance requests, or concerns regarding this Privacy Policy or our data handling practices, please connect with us:

Sparklines Studio Inc.
Kolkata, West Bengal, India
Email: sparklinestudio.agency@gmail.com
Direct Lines: +91 9641861932 / +91 8101520236`,
    },
  ];

  return (
    <div className="bg-[#F7F6F2] text-[#0B0C10] selection:bg-blue-600 selection:text-white min-h-screen flex flex-col justify-between">
      {/* Site Floating Navbar */}
      <HeaderNavigation />

      <main>
        {/* ============================================================== */}
        {/* 1. ATMOSPHERIC LEGAL HERO                                      */}
        {/* ============================================================== */}
        <header className="relative text-white border-b border-[#232630] overflow-hidden bg-[#090B10] pt-28 sm:pt-36 lg:pt-40 min-h-[52vh] flex flex-col justify-between">
          {/* Vertical Edge Labels */}
          <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center items-center gap-2 text-[10px] font-mono tracking-[0.28em] text-zinc-500 uppercase select-none pointer-events-none z-20 whitespace-nowrap">
            <span>LEGAL COMPLIANCE · WB</span>
          </div>
          <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-center items-center gap-2 text-[10px] font-mono tracking-[0.28em] text-zinc-500 uppercase select-none pointer-events-none z-20 whitespace-nowrap">
            <span>DATA PRIVACY ARCHITECTURE</span>
          </div>

          {/* Background Cityscape Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30 z-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#090B10]/92 via-[#090B10]/75 to-[#090B10] z-0" />

          {/* Ambient Blue Horizon Glow */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[360px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none z-0" />

          {/* Hero Content Container */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-14 pt-4 pb-14 sm:pb-18 w-full">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Studio</span>
            </Link>

            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-blue-400 mb-4">
              <Shield className="h-4 w-4" />
              <span>Legal & Transparency Standards</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-sans font-bold tracking-tight text-white leading-[1.08] max-w-3xl">
              Privacy <br />
              <span className="font-editorial italic font-normal text-blue-400">
                Policy.
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-zinc-400 font-mono">
              Last Updated: October 2026 · Sparklines Studio Inc.
            </p>
          </div>
        </header>

        {/* ============================================================== */}
        {/* 2. POLICY CONTENT & ACCORDION SECTIONS                         */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-24 max-w-4xl mx-auto px-5 sm:px-8">
          <div className="rounded-3xl bg-white border border-zinc-200 p-8 sm:p-12 shadow-sm space-y-10">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="border-b border-zinc-100 pb-8 last:border-b-0 last:pb-0"
              >
                <h2 className="text-xl sm:text-2xl font-bold font-sans text-zinc-950 tracking-tight mb-4">
                  {section.title}
                </h2>
                <div className="text-sm sm:text-[15px] text-zinc-700 leading-relaxed whitespace-pre-line font-normal">
                  {section.content}
                </div>
              </div>
            ))}
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
