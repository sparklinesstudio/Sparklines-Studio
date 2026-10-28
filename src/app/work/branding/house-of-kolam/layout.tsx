import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "House of Kolam — Sacred Geometry & Heritage Culinary Branding | Sparklines Studio",
  description:
    "Explore the complete visual identity, bespoke vernacular typography, artisanal packaging, and heritage branding design system for House of Kolam, engineered and crafted by Sparklines Studio.",
  openGraph: {
    title: "House of Kolam — Sacred Geometry & Heritage Culinary Branding",
    description:
      "23 master presentation boards encompassing visual identity, geometric iconography, packaging architecture, motion loops, and luxury hospitality guidelines.",
    images: [
      {
        url: "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186166/31b46d250283873.6a1bd914346e2_converted.png",
        width: 1920,
        height: 1080,
        alt: "House of Kolam — Brand Identity & Visual System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House of Kolam — Sacred Geometry & Heritage Culinary Branding",
    description:
      "A complete 23-board master visual identity designed by Sparklines Studio.",
    images: [
      "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186166/31b46d250283873.6a1bd914346e2_converted.png",
    ],
  },
};

export default function HouseOfKolamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
