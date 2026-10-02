import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { LenisSmoothScroll } from "@/components/LenisSmoothScroll";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sparklines Studio — Building High-Impact Digital Products",
  description:
    "Sparklines Studio is a premier digital product design and development agency. We craft expressive websites, apps, and brands with high performance and smooth interactions.",
  keywords: [
    "Sparklines Studio",
    "Digital Agency",
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
    title: "Sparklines Studio — Building High-Impact Digital Products",
    description:
      "Crafting expressive websites, apps, and brands with streamlined processes and top engineering.",
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
      className={`${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 selection:bg-orange-500/20 selection:text-orange-950 font-sans">
        <LenisSmoothScroll />
        {children}
      </body>
    </html>
  );
}

