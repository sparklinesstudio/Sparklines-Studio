import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 selection:bg-orange-500/20 selection:text-orange-950 font-sans">
        {children}
      </body>
    </html>
  );
}
