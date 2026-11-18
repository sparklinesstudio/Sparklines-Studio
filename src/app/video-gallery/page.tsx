import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { VideoGallery } from "@/components/studio/VideoGallery";
import { StudioMotion } from "@/components/studio/StudioMotion";
import { serviceMetadata } from "@/lib/serviceMetadata";
import "@/components/studio/studio.css";
import "@/components/studio/experience.css";

export const metadata = serviceMetadata({
  slug: "video-gallery",
  title: "Video Production Portfolio in Kolkata",
  description: "Explore food videos, personal branding films, real estate showcases and clothing campaigns crafted by Sparklines Studio in Kolkata.",
});

export default function VideoGalleryPage() {
  return <div className="studio-page studio-experience"><HeaderNavigation /><StudioMotion><VideoGallery /></StudioMotion><BrandFooterBanner showEyebrow={false} /></div>;
}

