import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { VideoGallery } from "@/components/studio/VideoGallery";
import { StudioMotion } from "@/components/studio/StudioMotion";
import "@/components/studio/studio.css";
import "@/components/studio/experience.css";

export const metadata = {
  title: "Video Production Portfolio in Kolkata | Sparklines Studio",
  description: "Explore our video production portfolio in Kolkata: brand films, restaurant reels, fashion campaigns and property videos crafted by Sparklines Studio.",
};

export default function VideoGalleryPage() {
  return <div className="studio-page studio-experience"><HeaderNavigation /><StudioMotion><VideoGallery /></StudioMotion><BrandFooterBanner showEyebrow={false} /></div>;
}

