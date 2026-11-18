import Link from "next/link";
import {
  ArrowUpRight, Building2, ChartNoAxesCombined, CirclePlay, FileText, FlaskConical,
  Goal, LayoutTemplate, ListChecks, MessageCircle, MousePointer2, Search, ShoppingBag,
  Users, Wallet, type LucideIcon,
} from "lucide-react";
import type { StudioService } from "@/data/services/types";
import "./paid-ads-approach.css";

type Approach = {
  theme: "blue" | "peach" | "green" | "lilac";
  steps: readonly (readonly [label: string, icon: LucideIcon])[];
};

const approaches: Readonly<Partial<Record<string, Approach>>> = {
  "paid-ads-agency-kolkata": { theme: "blue", steps: [["Offer", Goal], ["Ad budget", Wallet], ["Contribution", ChartNoAxesCombined]] },
  "google-ads-agency-kolkata": { theme: "green", steps: [["Search term", Search], ["Landing page", LayoutTemplate], ["Qualified enquiry", ListChecks]] },
  "meta-ads-agency-kolkata": { theme: "lilac", steps: [["Video ad", CirclePlay], ["Message or shop", MessageCircle], ["Booking or sale", ShoppingBag]] },
  "linkedin-ads-agency-kolkata": { theme: "blue", steps: [["Target companies", Building2], ["Useful resource", FileText], ["Sales meeting", Users]] },
  "reddit-ads-agency-kolkata": { theme: "peach", steps: [["Community topic", MessageCircle], ["Product demo", MousePointer2], ["Activated trial", FlaskConical]] },
};

export function PaidAdsApproach({ service }: { service: StudioService }) {
  const approach = approaches[service.slug];
  if (!approach) return null;

  return (
    <section id="service-plan" className="paid-approach svc-wrap" aria-labelledby="paid-approach-title">
      <div className="paid-approach-copy">
        <h2 id="paid-approach-title">{service.insight.title}</h2>
        {service.insight.paragraphs.map(text => <p key={text}>{text}</p>)}
        <Link href="/contact" className="svc-text-link">Discuss your campaign <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
      <figure className={`paid-approach-figure paid-approach-${approach.theme}`}>
        <svg viewBox="0 0 390 170" className="paid-approach-art" aria-hidden="true" focusable="false">
          <path className="paid-approach-grid" d="M0 28h390M0 64h390M0 100h390M0 136h390M30 0v170M85 0v170M140 0v170M195 0v170M250 0v170M305 0v170M360 0v170"/>
          <path className="paid-approach-route" d="M62 89h268" />
          {approach.steps.map(([label, Icon], index) => {
            const x = 65 + index * 130;
            return (
              <g key={label}>
                <circle className="paid-approach-halo" cx={x} cy="89" r="56"/>
                <rect className="paid-approach-tile" x={x - 36} y="53" width="72" height="72" rx="18"/>
                <Icon x={x - 17} y={72} width={34} height={34} strokeWidth={1.5}/>
              </g>
            );
          })}
        </svg>
        <figcaption>
          <ol aria-label="Campaign stages">
            {approach.steps.map(([label]) => <li key={label}>{label}</li>)}
          </ol>
        </figcaption>
      </figure>
    </section>
  );
}
