import {
  HeaderNavigation,
  HeroSection,
  AboutSection,
  OrangeBanner,
  TestimonialsSection,
  ServicesGridSection,
  VideoShowcaseSection,
  ServicesMarqueeSection,
  WebsiteCarouselSection,
  TrustFactorsMarqueeSection,
  CaseStudySection,
  SocialShowcaseDiagonalSection,
  TechStackSection,
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

        {/* Blue Infinite Scroll Marquee Featuring All Services Provided (Directly Below Video Carousel) */}
        <ServicesMarqueeSection />

        {/* Websites We Have Built Showcase Carousel (Mac Browser Mockups & Interactive Lightbox) */}
        <WebsiteCarouselSection />

        {/* Trust Factors Infinite Scroll Marquee (Directly Below Website Carousel) */}
        <TrustFactorsMarqueeSection />

        {/* White Theme with Blue Accent Case Study Section (Featuring Flagship Brand with Image on Left & Text on Right) */}
        <CaseStudySection />

        {/* Diagonal Moving Image Marquee Featuring Hero Social Posts (Directly Below Case Study Section) */}
        <SocialShowcaseDiagonalSection />

        {/* 3-Tier Modern Production & Technology Stack (Photoshop/Creative, React/Next.js, SEMrush/Ads) */}
        <TechStackSection />

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
