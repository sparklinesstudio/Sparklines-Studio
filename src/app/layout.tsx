import type { Metadata } from "next";
import Script from "next/script";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${arimo.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 selection:bg-orange-500/20 selection:text-orange-950 font-sans">
        <Script id="home-reveal-session" strategy="beforeInteractive">{`try{if(sessionStorage.getItem("sparklines-home-revealed")==="true"){document.documentElement.dataset.homeRevealSeen="true"}}catch{}`}</Script>
        <StructuredData id="organization-schema" data={organizationGraph()} />
        <LenisSmoothScroll />
        <Curtains color="#3b82f6" accentColor="#60a5fa" />
        {children}
      </body>
    </html>
  );
}

