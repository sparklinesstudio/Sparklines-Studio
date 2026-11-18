import {StructuredData} from "@/components/seo/StructuredData";
import {pageGraph} from "@/lib/structuredData";
import type { Metadata } from "next";
import { serviceMetadata } from "@/lib/serviceMetadata";

const base = serviceMetadata({
  slug: "work/branding/house-of-kolam",
  title: "House of Kolam Brand Identity",
  description: "The visual identity, typography and packaging for House of Kolam.",
});
const cover = "https://res.cloudinary.com/vt5gqi1c/image/upload/v1793186166/31b46d250283873.6a1bd914346e2_converted.png";

export const metadata: Metadata = {
  ...base,
  openGraph: {
    ...base.openGraph,
    images: [
      {
        url: cover,
        width: 1920,
        height: 1080,
        alt: "House of Kolam — Brand Identity & Visual System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    ...base.twitter,
    images: [cover],
  },
};

export default function HouseOfKolamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <><StructuredData data={pageGraph("/work/branding/house-of-kolam","House of Kolam Brand Identity","WebPage")}/>{children}</>;
}
