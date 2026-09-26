"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  Code2,
  Zap,
  RefreshCw,
  Users2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Activity,
  Cpu,
} from "lucide-react";

interface FeatureItem {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  checklist: string[];
}

export function FeatureTabsSection() {
  const [activeTab, setActiveTab] = useState("emergency-fix");

  const features: FeatureItem[] = [
    {
      id: "emergency-fix",
      icon: Wrench,
      title: "Emergency Bug Fixing",
      description:
        "Critical production issues identified and resolved swiftly. We safeguard your uptime, prevent revenue loss, and protect customer trust.",
      checklist: [
        "24/7 emergency response SLA under 60 minutes",
        "Zero-downtime hotfixes and safe atomic rollbacks",
        "Comprehensive root-cause diagnosis and regression test suites",
      ],
    },
    {
      id: "full-stack",
      icon: Code2,
      title: "Full-Stack Web Development",
      description:
        "End-to-end development leveraging Next.js App Router, React 19, TypeScript, and high-performance serverless backends.",
      checklist: [
        "Modern composable architectures tailored for speed",
        "Type-safe APIs and optimized database querying",
        "Strict adherence to accessibility and SEO best practices",
      ],
    },
    {
      id: "velocity",
      icon: Zap,
      title: "Sprint Velocity & Optimization",
      description:
        "Supercharge your product cadence. We audit performance bottlenecks, refine build pipelines, and accelerate feature shipping.",
      checklist: [
        "Core Web Vitals scores guaranteed in the top 95th percentile",
        "Bundle splitting and edge caching configurations",
        "CI/CD pipeline refactoring for sub-minute deployments",
      ],
    },
    {
      id: "modernization",
      icon: RefreshCw,
      title: "Legacy System Modernization",
      description:
        "Transform aging codebases into clean, scalable architectures without stopping feature delivery or interrupting customers.",
      checklist: [
        "Incremental migration patterns without risky rewrites",
        "Automated data validation and schema integrity",
        "Massive reductions in maintenance costs and technical debt",
      ],
    },
    {
      id: "team-extension",
      icon: Users2,
      title: "On-Demand Team Extension",
      description:
        "Plug elite senior frontend and backend engineers into your existing squads. Instant alignment, zero overhead, maximum output.",
      checklist: [
        "Vetted senior engineers with proven agency experience",
        "Seamless integration with your Slack, GitHub, and Jira workflows",
        "Flexible scaling up or down based on your roadmap demands",
      ],
    },
  ];

  const currentFeature = features.find((f) => f.id === activeTab) || features[0];

  return (
    <section id="services" className="relative bg-zinc-50/60 py-24 sm:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-3 py-1 text-xs font-semibold text-orange-800">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f95721]" />
            On Demand
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            Level up your development game
          </h2>
          <p className="mt-4 text-base text-zinc-600">
            Everything your team needs to build, stabilize, and scale mission-critical digital
            products at startup speed with enterprise reliability.
          </p>
        </div>

        {/* Interactive Grid: Left Tabs & Right Live Preview Card */}
        <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Interactive Feature Accordion / Selector */}
          <div className="space-y-4 lg:col-span-6">
            {features.map((feature) => {
              const isActive = activeTab === feature.id;
              const Icon = feature.icon;

              return (
                <div
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`cursor-pointer rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "border-orange-200 bg-white p-6 shadow-lg shadow-orange-500/5 ring-1 ring-orange-400/20"
                      : "border-zinc-200/80 bg-white/60 p-5 hover:border-zinc-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                          isActive
                            ? "bg-[#f95721] text-white"
                            : "bg-zinc-100 text-zinc-600"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3
                        className={`text-base font-semibold transition-colors ${
                          isActive ? "text-zinc-950" : "text-zinc-700"
                        }`}
                      >
                        {feature.title}
                      </h3>
                    </div>
                    <span
                      className={`text-xs font-semibold transition-transform duration-300 ${
                        isActive ? "text-[#f95721] translate-x-1" : "text-zinc-400"
                      }`}
                    >
                      →
                    </span>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                          {feature.description}
                        </p>
                        <ul className="mt-4 space-y-2 border-t border-zinc-100 pt-4">
                          {feature.checklist.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs font-medium text-zinc-700"
                            >
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Interactive Preview Card Matching Design Mockup */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200/90 bg-gradient-to-br from-amber-100/70 via-orange-100/40 to-white p-6 sm:p-10 shadow-xl">
              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-400/20 blur-3xl" />

              <AnimatePresence mode="wait">
                {activeTab === "emergency-fix" && (
                  <motion.div
                    key="emergency-fix"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl border border-white/80 bg-white/95 p-6 sm:p-8 shadow-md backdrop-blur-md"
                  >
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                          Live Monitor
                        </span>
                        <h4 className="text-lg font-bold text-zinc-900">
                          Emergency Bug Fixing
                        </h4>
                      </div>
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600 border border-emerald-200">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                        All Systems Nominal
                      </div>
                    </div>

                    {/* Animated Sparkline Graphic */}
                    <div className="my-6">
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-xs font-medium text-zinc-500">
                          Mean Time to Resolution (MTTR)
                        </span>
                        <span className="text-xl font-extrabold text-[#f95721]">
                          42 mins
                        </span>
                      </div>

                      <div className="h-36 w-full rounded-xl bg-zinc-50/80 p-3 border border-zinc-100 relative overflow-hidden flex items-end">
                        <svg
                          viewBox="0 0 300 100"
                          className="h-full w-full overflow-visible"
                        >
                          <defs>
                            <linearGradient
                              id="sparklineGrad"
                              x1="0%"
                              y1="0%"
                              x2="0%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#f95721" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#f95721" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M 0 70 Q 50 85, 100 35 T 200 45 T 300 15 L 300 100 L 0 100 Z"
                            fill="url(#sparklineGrad)"
                          />
                          <path
                            d="M 0 70 Q 50 85, 100 35 T 200 45 T 300 15"
                            fill="none"
                            stroke="#f95721"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                          />
                          <circle cx="300" cy="15" r="4.5" fill="#f95721" />
                          <circle
                            cx="300"
                            cy="15"
                            r="8"
                            fill="none"
                            stroke="#f95721"
                            strokeWidth="2"
                            className="animate-ping"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Metric Pills */}
                    <div className="grid grid-cols-3 gap-3 text-center border-t border-zinc-100 pt-4">
                      <div className="rounded-lg bg-zinc-50 p-2">
                        <p className="text-[10px] text-zinc-500">SLA Met</p>
                        <p className="text-sm font-bold text-zinc-900">100%</p>
                      </div>
                      <div className="rounded-lg bg-zinc-50 p-2">
                        <p className="text-[10px] text-zinc-500">Resolved</p>
                        <p className="text-sm font-bold text-emerald-600">328 / 328</p>
                      </div>
                      <div className="rounded-lg bg-zinc-50 p-2">
                        <p className="text-[10px] text-zinc-500">Rollbacks</p>
                        <p className="text-sm font-bold text-zinc-900">0</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "full-stack" && (
                  <motion.div
                    key="full-stack"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl border border-white/80 bg-white/95 p-6 sm:p-8 shadow-md"
                  >
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                          Modern Stack
                        </span>
                        <h4 className="text-lg font-bold text-zinc-900">
                          Next.js & React 19 Architecture
                        </h4>
                      </div>
                      <Cpu className="h-5 w-5 text-indigo-500" />
                    </div>

                    <div className="my-6 space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between rounded-lg bg-zinc-900 p-3 text-zinc-200">
                        <span className="text-emerald-400">▲ Next.js 16 (Turbopack)</span>
                        <span className="text-[10px] text-zinc-400">0.1s Fast Refresh</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-zinc-100 p-3 text-zinc-800">
                        <span className="text-indigo-600 font-semibold">TypeScript Strict Mode</span>
                        <span className="text-[10px] text-zinc-500">Zero `any`</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-zinc-100 p-3 text-zinc-800">
                        <span className="text-[#f95721] font-semibold">Tailwind CSS Modern Engine</span>
                        <span className="text-[10px] text-zinc-500">Zero CSS bloat</span>
                      </div>
                    </div>

                    <div className="rounded-xl bg-orange-50 p-4 border border-orange-200/60 flex items-center justify-between">
                      <span className="text-xs font-medium text-orange-950">
                        Build & Bundle Health
                      </span>
                      <span className="text-xs font-bold text-[#f95721]">Optimal (100/100)</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "velocity" && (
                  <motion.div
                    key="velocity"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl border border-white/80 bg-white/95 p-6 sm:p-8 shadow-md"
                  >
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                          Performance
                        </span>
                        <h4 className="text-lg font-bold text-zinc-900">
                          Lighthouse & Core Web Vitals
                        </h4>
                      </div>
                      <Activity className="h-5 w-5 text-emerald-500" />
                    </div>

                    <div className="my-6 grid grid-cols-2 gap-4">
                      <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4 text-center">
                        <p className="text-3xl font-black text-emerald-600">100</p>
                        <p className="mt-1 text-xs font-medium text-zinc-600">Performance</p>
                      </div>
                      <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4 text-center">
                        <p className="text-3xl font-black text-emerald-600">100</p>
                        <p className="mt-1 text-xs font-medium text-zinc-600">Accessibility</p>
                      </div>
                      <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4 text-center">
                        <p className="text-3xl font-black text-emerald-600">100</p>
                        <p className="mt-1 text-xs font-medium text-zinc-600">Best Practices</p>
                      </div>
                      <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4 text-center">
                        <p className="text-3xl font-black text-emerald-600">100</p>
                        <p className="mt-1 text-xs font-medium text-zinc-600">SEO Score</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "modernization" && (
                  <motion.div
                    key="modernization"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl border border-white/80 bg-white/95 p-6 sm:p-8 shadow-md"
                  >
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                          Architecture
                        </span>
                        <h4 className="text-lg font-bold text-zinc-900">
                          Legacy Codebase Modernization
                        </h4>
                      </div>
                      <ShieldCheck className="h-5 w-5 text-indigo-500" />
                    </div>

                    <div className="my-6 space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-medium mb-1">
                          <span>Legacy Technical Debt Eliminated</span>
                          <span className="text-emerald-600 font-bold">-84%</span>
                        </div>
                        <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full w-[84%] rounded-full" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-medium mb-1">
                          <span>Test Suite Coverage</span>
                          <span className="text-[#f95721] font-bold">96.4%</span>
                        </div>
                        <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-[#f95721] h-full w-[96%] rounded-full" />
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-500 italic text-center">
                      Incremental Strangler Fig migration with 0 client downtime.
                    </p>
                  </motion.div>
                )}

                {activeTab === "team-extension" && (
                  <motion.div
                    key="team-extension"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl border border-white/80 bg-white/95 p-6 sm:p-8 shadow-md"
                  >
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                          Senior Engineers
                        </span>
                        <h4 className="text-lg font-bold text-zinc-900">
                          Vetted On-Demand Leads
                        </h4>
                      </div>
                      <Users2 className="h-5 w-5 text-[#f95721]" />
                    </div>

                    <div className="my-6 space-y-3">
                      {[
                        { name: "Alex R.", role: "Principal Frontend Architect", exp: "9 yrs", status: "Active" },
                        { name: "Elena K.", role: "Lead Systems & Cloud Engineer", exp: "11 yrs", status: "Active" },
                        { name: "Marcus T.", role: "Product Design & Interaction Lead", exp: "8 yrs", status: "Active" },
                      ].map((dev, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between rounded-xl bg-zinc-50 p-3 border border-zinc-100"
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold">
                              {dev.name[0]}
                            </div>
                            <div>
                              <p className="text-xs font-bold text-zinc-900">{dev.name}</p>
                              <p className="text-[10px] text-zinc-500">{dev.role}</p>
                            </div>
                          </div>
                          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">
                            {dev.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
