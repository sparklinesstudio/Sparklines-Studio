import {
  HeaderNavigation,
  HeroSection,
  ClientLogos,
  AboutSection,
  OrangeBanner,
  VideoTestimonialsSection,
  MarketingSocialProofSection,
  FeatureTabsSection,
  ExpertiseBento,
  TestimonialsSection,
  CtaFloatingSection,
  ContactSection,
  BrandFooterBanner,
} from "@/components/Home Page Components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-orange-500/20 selection:text-orange-950 font-sans">
      {/* Header Navigation */}
      <HeaderNavigation />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section with Floating Device Showcase */}
        <HeroSection />

        {/* Trusted Client / Brand Logos */}
        <ClientLogos />

        {/* About Agency & Key Metrics */}
        <AboutSection />

        {/* Full-width Video Explainer Banner */}
        <OrangeBanner />

        {/* Video Testimonials Section ("Our Client Testimonials") */}
        <VideoTestimonialsSection />

        {/* Marketing Social Proof: Floating Avatars + 3 Orange Metric Cards + Blurred Sides Review Carousel */}
        <MarketingSocialProofSection />

        {/* On-Demand Capabilities & Interactive Sparklines Monitor */}
        <FeatureTabsSection />

        {/* Expertise Bento Grid */}
        <ExpertiseBento />

        {/* Praise From The Trenches / Testimonials */}
        <TestimonialsSection />

        {/* Floating Creative CTA */}
        <CtaFloatingSection />

        {/* Interactive Contact Form & Studio Details */}
        <ContactSection />
      </main>

      {/* Scenic Wildflower Meadow Banner & Footer Links */}
      <BrandFooterBanner />
    </div>
  );
}
