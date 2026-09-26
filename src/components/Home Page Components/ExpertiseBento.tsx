"use client";

import { motion } from "framer-motion";
import {
  Users,
  ShieldCheck,
  Clock,
  Zap,
  CheckCircle,
  Cpu,
} from "lucide-react";

export function ExpertiseBento() {
  const bentoItems = [
    {
      icon: Users,
      title: "Senior Team Only",
      description:
        "Work directly with seasoned staff engineers and principal designers with 8+ years experience. Zero handoffs to unvetted juniors.",
      badge: "Staff-Level Only",
      colSpan: "lg:col-span-1",
    },
    {
      icon: ShieldCheck,
      title: "Battle-Tested Expertise",
      description:
        "Over 12 years of architecting mission-critical platforms, high-conversion ecommerce, and bespoke digital experiences that thrive at scale.",
      badge: "12+ Years Track Record",
      colSpan: "lg:col-span-1",
    },
    {
      icon: Clock,
      title: "24/7 Safety Net",
      description:
        "Continuous automated health checks, uptime monitoring, and around-the-clock emergency support when seconds count.",
      badge: "99.99% Uptime",
      colSpan: "lg:col-span-1",
    },
    {
      icon: Zap,
      title: "Fix it in Hours",
      description:
        "Lightning-quick diagnosis and hotfixes. We eliminate blockers so your core operations and revenue streams never stall.",
      badge: "Sub-Hour SLAs",
      colSpan: "lg:col-span-1",
    },
    {
      icon: CheckCircle,
      title: "Zero Guesswork Pricing",
      description:
        "Transparent, flat-rate pricing models with crystal-clear deliverables. No hidden billable hours or surprise end-of-month invoices.",
      badge: "Flat & Predictable",
      colSpan: "lg:col-span-1",
    },
    {
      icon: Cpu,
      title: "Always Scalable Architecture",
      description:
        "Built on modern Next.js App Router, edge runtimes, and headless CMS solutions designed to handle millions of visitors with ease.",
      badge: "Edge Ready",
      colSpan: "lg:col-span-1",
    },
  ];

  return (
    <section id="expertise" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-950 border border-orange-200/60">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f95721]" />
            Why Choose Us
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            Expertise that makes the difference
          </h2>
          <p className="mt-4 text-base text-zinc-600">
            A high-craft agency engineered around speed, transparency, and uncompromised quality.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bentoItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className={`group relative flex flex-col justify-between rounded-3xl border border-zinc-200/80 bg-zinc-50/50 p-8 transition-all duration-300 hover:border-orange-300 hover:bg-white hover:shadow-xl hover:shadow-orange-500/5 ${item.colSpan}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-zinc-200/80 shadow-xs transition-colors group-hover:bg-[#f95721] group-hover:border-[#f95721] group-hover:text-white text-zinc-800">
                      <Icon className="h-6 w-6 transition-colors" />
                    </div>
                    <span className="text-[11px] font-semibold text-zinc-500 bg-white px-2.5 py-1 rounded-full border border-zinc-200/60">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-zinc-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-200/40 flex items-center justify-between text-xs font-semibold text-zinc-500 group-hover:text-[#f95721] transition-colors">
                  <span>Learn how we deliver</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
