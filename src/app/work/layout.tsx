import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Sparklines Studio",
  description:
    "Explore our validated portfolio across Organic Marketing, Paid Acquisition, and Commercial Video Productions engineered to scale high-impact brands.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
