import type { Metadata } from "next";
import { serviceMetadata } from "@/lib/serviceMetadata";
export const metadata: Metadata = {
  ...serviceMetadata({ slug: "thank-you", title: "Thank You", description: "Your enquiry has been received." }),
  robots: { index: false, follow: true },
};
export default function ConfirmationLayout({children}: {children: React.ReactNode}) { return children; }
