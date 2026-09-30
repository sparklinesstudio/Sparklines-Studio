import {
  HeaderNavigation,
  HeroSection,
  ClientLogos,
  AboutSection,
  OrangeBanner,
  TestimonialsSection,
  ServicesGridSection,
  VideoShowcaseSection,
  TechStackSection,
  WebsiteCarouselSection,
  PortfolioShowcaseSection,
  FeatureTabsSection,
  ExpertiseBento,
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
        {/* <ClientLogos /> */}

        {/* About Agency & Key Metrics */}
        <AboutSection />

        {/* Full-width Video Explainer Banner */}
        <OrangeBanner />

        {/* Client Testimonials / Social Proof Slider */}
        <TestimonialsSection />

        {/* 3x2 High-Impact Capabilities Grid (Video Production, PPC, Social, SEO, Web Design, Branding) - Crafted for Growth & Authority */}
        <ServicesGridSection />

        {/* Infinite Straight-Path Video Showcase Section - Our Work in Motion */}
        <VideoShowcaseSection />

        {/* Websites We Have Built Showcase Carousel (Mac Browser Mockups & Interactive Lightbox) */}
        <WebsiteCarouselSection />

        {/* 3-Tier Modern Production & Technology Stack (Photoshop/Creative, React/Next.js, SEMrush/Ads) */}
        <TechStackSection />



        {/* Luxury Portfolio Growth Tool & Showcase (Scroll Runway, Orange Statement, Project Grid) */}
        {/* <PortfolioShowcaseSection /> */}

        {/* On-Demand Capabilities & Interactive Sparklines Monitor */}
        {/* <FeatureTabsSection /> */}

        {/* Expertise Bento Grid */}
        {/* <ExpertiseBento />  */}

        {/* Interactive Contact Form & Studio Details */}
        <ContactSection />

        {/* Cloud CTA Section (At the last just before the footer) */}
        <CtaFloatingSection />
      </main>

      {/* Scenic Wildflower Meadow Banner & Footer Links */}
      <BrandFooterBanner />
    </div>
  );
}
