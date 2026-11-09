import type { Metadata } from "next";
import { StructuredData } from "@/components/seo/StructuredData";
import { serviceGraph } from "@/lib/structuredData";
import { serviceMetadata } from "@/lib/serviceMetadata";

export const metadata: Metadata = {
  ...serviceMetadata({ title: "SEO Agency Kolkata — Rank. Reign. Repeat.", slug: "seo-agency-kolkata", description: "Technical SEO, local search, content architecture and digital PR services from Sparklines Studio in Kolkata." }),
  alternates: { canonical: "https://sparklines.studio/seo-agency-kolkata" },
  title: "SEO Agency Kolkata — Rank. Reign. Repeat. | Sparklines Studio",
  description:
    "Kolkata's premier revenue-first SEO agency by Sparklines Studio. Technical SEO, hyperlocal Kolkata search dominance, programmatic scale, and Digital PR built for compounding organic growth.",
  keywords: [
    "SEO agency Kolkata",
    "Best SEO company Kolkata",
    "Sparklines Studio SEO",
    "Local SEO Kolkata",
    "Technical SEO Salt Lake Sector V",
    "E-commerce SEO Kolkata",
    "Kolkata digital marketing",
    "Sparklines Studio",
  ],
  verification: {
    google: "vpcDQaDSpnn8vkuiYG0fpCmrPS7jHMWJmuDdZWOPnRs",
  },
  openGraph: {
    title: "SEO Agency Kolkata — Rank. Reign. Repeat. | Sparklines Studio",
    description:
      "Kolkata's premier revenue-first SEO agency by Sparklines Studio. Technical SEO, hyperlocal Kolkata search dominance, programmatic scale, and Digital PR built for compounding organic growth.",
    type: "website",
    url: "https://sparklines.studio/seo-agency-kolkata",
    siteName: "Sparklines Studio",
    locale: "en_IN",
    images: [{ url: "/logo.png", alt: "Sparklines Studio" }],
  },
};

export default function SeoKolkataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="font-sans bg-[#F7F6F2] text-[#0B0C10] selection:bg-blue-600 selection:text-white min-h-screen"
    >
      <StructuredData data={serviceGraph({slug:"seo-agency-kolkata",name:"SEO",title:"SEO Agency Kolkata",description:"Technical SEO, local search, content architecture and digital PR services from Sparklines Studio in Kolkata."})} />
      {children}
    </div>
  );
}
