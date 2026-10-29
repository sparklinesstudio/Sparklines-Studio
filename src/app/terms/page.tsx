"use client";

import React from "react";
import Link from "next/link";
import { FileText, Scale, ArrowLeft, ShieldCheck, Mail } from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import "@/app/seo-agency-kolkata/seo-kolkata.css";

export default function TermsPage() {
  const sections = [
    {
      id: "agreement",
      title: "1. Acceptance of Terms & Engagement Model",
      content: `By engaging Sparklines Studio Inc. ("Sparklines Studio", "we", "us", or "the Agency") for creative production, Next.js web application development, branding, or performance SEO marketing, or by browsing this website, you ("the Client", "User", or "you") unconditionally agree to be bound by these Terms and Conditions. Individual Statements of Work (SOW), master service agreements, and proposal schedules executed between Sparklines Studio and the Client incorporate these terms by reference.`,
    },
    {
      id: "scope-milestones",
      title: "2. Scope of Services, Deliverables & Sprints",
      content: `All agency engagements proceed under agreed Statements of Work defining deliverables, estimated timelines, milestone phases, and required engineering sprints:

• Creative & Technical Sprints: Sprints initiate upon receipt of initial milestone deposit and kickoff assets. We iterate transparently through Figma boards, staging environments, and weekly asynchronous Loom briefings.
• Scope Variations: Any material additions, new features, or scope expansions requested during active sprints will be scoped separately via an addendum or charged at our prevailing technical sprint rate.
• Staging & Deployment: Web builds are deployed to private staging URLs on Vercel for client acceptance testing prior to production domain cutover.`,
    },
    {
      id: "client-obligations",
      title: "3. Client Obligations & Approval Windows",
      content: `Timely project completion depends on active collaboration. The Client agrees to:

• Provide necessary brand guidelines, photography, copywriting, credentials, and third-party API access in a timely manner.
• Respond to milestone review requests within five (5) business days. In the absence of written feedback or requested revisions within this window, deliverables shall be deemed accepted, and the squad may proceed to the next milestone sprint.`,
    },
    {
      id: "ip-ownership",
      title: "4. Intellectual Property Rights & Ownership",
      content: `We believe in clean, undisputed ownership:

• Client Ownership: Upon settlement of all outstanding invoices and milestone fees, the Client acquires 100% exclusive ownership of all final bespoke deliverables, including finalized brand visual identities, custom vector logos, bespoke graphic collateral, and custom production codebases.
• Pre-existing IP & Tools: Sparklines Studio retains all right, title, and interest in our proprietary development scaffolding, reusable UI libraries, boilerplate components, and internal workflows. The Client is granted an irrevocable, perpetual, royalty-free license to use these embedded libraries as part of their delivered product.
• Showcase Rights: Unless restricted by a mutually executed Non-Disclosure Agreement (NDA), Sparklines Studio reserves the right to display completed designs, case studies, and performance metrics in our portfolio, awards submissions, and marketing channels.`,
    },
    {
      id: "refund",
      title: "5. Payment Schedules, Billing & Refund Policy",
      content: `• Milestone Payments: Fixed-scope projects are billed according to clear milestones (e.g. 50% mobilization deposit, 25% design signoff, 25% production deployment). Retainers are billed monthly in advance on the 1st of each calendar month.
• Invoicing Terms: Invoices are payable within seven (7) business days of issuance. Overdue accounts may be subject to a 1.5% monthly late fee and temporary pause of active sprint resources.
• Refund Policy: Due to the intensive allocation of senior engineering, video production, and design talent, all mobilization deposits and completed milestone disbursements are strictly non-refundable. If an engagement is paused or terminated early by the Client, fees will be calculated pro-rata against hours and deliverables completed up to the written date of termination.`,
    },
    {
      id: "confidentiality",
      title: "6. Confidentiality & Non-Disclosure",
      content: `Both parties agree to treat all proprietary codebases, trade secrets, business metrics, and confidential project disclosures with the utmost care. Sparklines Studio regularly executes mutual NDAs before reviewing pitch decks or repository access. Confidential information will not be disclosed to any third party without prior written consent, except as required by law.`,
    },
    {
      id: "warranties-liability",
      title: "7. Warranties & Limitation of Liability",
      content: `• Code Warranty: Sparklines Studio provides a thirty (30) day bug-fix warranty following production deployment to remediate any technical defects or browser inconsistencies within the agreed scope.
• Limitation of Liability: To the maximum extent permitted by applicable law, in no event shall Sparklines Studio, its partners, or directors be liable for indirect, punitive, or consequential damages, lost profits, or business interruption. Our total cumulative liability arising out of any engagement shall not exceed the total fees paid by the Client to Sparklines Studio under the specific Statement of Work during the preceding three (3) months.`,
    },
    {
      id: "accessibility",
      title: "8. Accessibility Statement & Web Standards",
      content: `Sparklines Studio engineers websites to meet modern Web Content Accessibility Guidelines (WCAG 2.1 Level AA) standards. We prioritize semantic HTML, keyboard navigability, high color contrast ratios, and ARIA landmarks to ensure seamless digital experiences for all users across diverse assistive technologies.`,
    },
    {
      id: "governing-law",
      title: "9. Governing Law & Dispute Resolution",
      content: `These Terms and all disputes arising hereunder shall be governed by and construed in accordance with the laws of India. Both parties agree that any legal proceedings or dispute resolution shall be subject to the exclusive jurisdiction of the competent courts located in Kolkata, West Bengal, India.`,
    },
    {
      id: "contact-legal",
      title: "10. Inquiries & Legal Notices",
      content: `For legal notices, contract inquiries, or Statement of Work clarification, please direct all formal correspondence to:

Sparklines Studio Inc.
Legal & Compliance Operations
Kolkata, West Bengal, India
Email: sparklinestudio.agency@gmail.com
Direct: +91 9641861932`,
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
            <span>LEGAL ARCHITECTURE · WB</span>
          </div>
          <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-center items-center gap-2 text-[10px] font-mono tracking-[0.28em] text-zinc-500 uppercase select-none pointer-events-none z-20 whitespace-nowrap">
            <span>TERMS OF ENGAGEMENT</span>
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
              <Scale className="h-4 w-4" />
              <span>Professional Standards & Terms</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-sans font-bold tracking-tight text-white leading-[1.08] max-w-3xl">
              Terms & <br />
              <span className="font-editorial italic font-normal text-blue-400">
                Conditions.
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-zinc-400 font-mono">
              Last Updated: October 2026 · Sparklines Studio Inc.
            </p>
          </div>
        </header>

        {/* ============================================================== */}
        {/* 2. TERMS & CONDITIONS CONTENT                                  */}
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
      <BrandFooterBanner />
    </div>
  );
}
