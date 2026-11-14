import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Playfair_Display, Arimo, Instrument_Serif } from "next/font/google";
import { LenisSmoothScroll } from "@/components/LenisSmoothScroll";
import { Curtains } from "@/components/ui/curtains";
import "./globals.css";
import { StructuredData } from "@/components/seo/StructuredData";
import { serviceMetadata } from "@/lib/serviceMetadata";
import { organizationGraph } from "@/lib/structuredData";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const defaultSocial = serviceMetadata({title:"Video Production Agency Kolkata",slug:"",description:siteConfig.description});
export const metadata: Metadata = {
  ...defaultSocial,
  metadataBase: new URL(siteConfig.url),
  title: "Sparklines Studio | Video, Brand & Digital Experiences",
  description:
    "Sparklines Studio is a Kolkata creative studio for video production, motion graphics, personal branding, SEO and website development.",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-video-preview": -1, "max-snippet": -1 } },
  verification: { google: "vpcDQaDSpnn8vkuiYG0fpCmrPS7jHMWJmuDdZWOPnRs" },
  keywords: [
    "Sparklines Studio",
    "Video Production Agency Kolkata",
    "Motion Graphics Kolkata",
    "Web Design",
    "Next.js Development",
    "UI/UX Design",
    "Product Engineering",
  ],
  icons: {
    icon: "https://res.cloudinary.com/vt5gqi1c/image/upload/v1790456941/WhatsApp_Image_2026-09-27_at_02.30.07.jpg",
    shortcut: "https://res.cloudinary.com/vt5gqi1c/image/upload/v1790456941/WhatsApp_Image_2026-09-27_at_02.30.07.jpg",
    apple: "https://res.cloudinary.com/vt5gqi1c/image/upload/v1790456941/WhatsApp_Image_2026-09-27_at_02.30.07.jpg",
  },
  openGraph: {
    ...defaultSocial.openGraph,
    title: "Sparklines Studio | Video, Brand & Digital Experiences",
    description:
      "Video production, brand storytelling, motion graphics and digital experiences from our Kolkata studio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${arimo.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 selection:bg-orange-500/20 selection:text-orange-950 font-sans">
        <StructuredData id="organization-schema" data={organizationGraph()} />
        <LenisSmoothScroll />
        <Curtains color="#3b82f6" accentColor="#60a5fa" />
        {children}
      </body>
    </html>
  );
}

