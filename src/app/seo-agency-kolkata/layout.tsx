import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
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
  },
};

export default function SeoKolkataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${montserrat.variable} font-sans bg-[#F7F6F2] text-[#0B0C10] selection:bg-blue-600 selection:text-white min-h-screen`}
    >
      {children}
    </div>
  );
}

