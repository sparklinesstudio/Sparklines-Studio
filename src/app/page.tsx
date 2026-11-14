import { ArrowUpRight } from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { ServiceDirectory, StudioCta, StudioFaq } from "@/components/studio/StudioSections";
import { StudioMotion, Reveal } from "@/components/studio/StudioMotion";
import { StudioHero, InteractiveAbout, HomeFilmMasonry, FilmCarousel, BrandingFeature, MotionMarquee } from "@/components/studio/HomeExperience";
import { VideoServiceLinks } from "@/components/studio/VideoServiceLinks";
import { ServiceVideoCards } from "@/components/studio/StudioHighlights";
import { StructuredData } from "@/components/seo/StructuredData";
import { serviceGraph } from "@/lib/structuredData";
import { serviceMetadata } from "@/lib/serviceMetadata";
import "@/components/studio/studio.css";
import "@/components/studio/experience.css";

export const metadata = serviceMetadata({ title: "Video Production Agency Kolkata", slug: "", description: "Sparklines Studio is a video production agency in Kolkata creating brand films, commercials, social reels, motion graphics and SaaS product videos." });
export default function Home() {
  return <div className="studio-page studio-experience"><HeaderNavigation /><StudioMotion><main id="main-content"><StructuredData data={serviceGraph({slug:"",name:"Video Production",title:"Video Production Agency Kolkata",description:"Kolkata video production for brand films, commercials, product videos and social stories, from planning through the final edit."})} />
    <StudioHero />
    <MotionMarquee words={["Good stories", "Bold identities", "Films that feel", "A different perspective"]} />
    <InteractiveAbout showEyebrow={false} />
    <HomeFilmMasonry />
    <FilmCarousel />
    <BrandingFeature showEyebrow={false} />
    <ServiceVideoCards />
    <VideoServiceLinks />
    <MotionMarquee reverse words={["A little strategy", "A lot of craft", "Made together", "Made to matter"]} />
    <section id="process" className="experience-section experience-pad experience-process"><Reveal><h2>A good process.<br /><em>Great possibilities.</em></h2></Reveal><div className="experience-process-list">{[["Listen first","Your audience. Your ambitions. The reason this project matters. We ask the questions that find the story."],["Find the spark","A creative direction, a script, a plan. We shape the idea together before production begins."],["Make with purpose","Shoot, design, edit and animate. Every detail connects back to the story we set out to tell."],["Put it out there","Review the work, refine the details and deliver the formats your next launch needs."]].map(([title,text],i)=><Reveal key={title}><article><span>0{i+1}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight size={24} /></article></Reveal>)}</div></section>
    <section className="studio-section studio-wrap studio-faq-layout"><div><h2>Your questions,<br /><em>in focus.</em></h2></div><StudioFaq items={[
      ["What video production services do you offer in Kolkata?", "We create brand films, commercials, social reels, founder videos, motion graphics and SaaS product videos. A project can include strategy, scripting, production, editing, colour, sound and format-specific delivery."],
      ["How much does a video production project cost?", "The scope depends on the concept, shoot days, crew, locations, animation and final deliverables. Share your brief and intended channels so we can prepare a proposal with clear inclusions."],
      ["Can you handle both filming and editing?", "Yes. We can manage production from concept through post-production, or scope a focused engagement around footage you already have."],
      ["Can you help with branding as well?", "Yes. We develop brand positioning, visual identities and supporting design systems. Explore House of Kolam in our portfolio to see an existing brand identity project."],
      ["Do you work with businesses outside Kolkata?", "Yes. We collaborate remotely for planning, editing, design and animation. Location shoots and travel are scoped around your production requirements."]
    ]} /></section>
    <ServiceDirectory showEyebrow={false} /><StudioCta showEyebrow={false} />
  </main></StudioMotion><BrandFooterBanner showEyebrow={false} /></div>;
}
