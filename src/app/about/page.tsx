import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Asterisk } from "lucide-react";
import { HeaderNavigation } from "@/components/Home Page Components/HeaderNavigation";
import { BrandFooterBanner } from "@/components/Home Page Components/BrandFooterBanner";
import { StudioMotion, Reveal } from "@/components/studio/StudioMotion";
import { InteractiveAbout, MotionMarquee } from "@/components/studio/HomeExperience";
import { StudioCta, ServiceDirectory } from "@/components/studio/StudioSections";
import { HOUSE_OF_KOLAM_SLIDES } from "@/data/houseOfKolamData";
import { serviceMetadata } from "@/lib/serviceMetadata";
import "@/components/studio/studio.css";
import "@/components/studio/experience.css";
export const metadata = serviceMetadata({ title: "About Our Kolkata Creative Studio", slug: "about", description: "Meet Sparklines Studio, a Kolkata creative partner bringing video production, motion graphics, branding and digital experiences together." });
export default function AboutPage() {
 return <div className="studio-page studio-experience"><HeaderNavigation /><StudioMotion><main id="main-content"><section className="experience-page-hero experience-pad about-page-hero"><p className="studio-kicker">THE PEOPLE BEHIND THE PERSPECTIVE</p><h1>A little spark.<br /><em>A different way</em><br />of seeing<span className="orange-period">.</span></h1><div className="about-page-intro"><Asterisk size={80} strokeWidth={1} /><p>We’re an independent creative studio based in Kolkata. We connect stories, images and ideas to help businesses show up with more clarity and character.</p><Link href="/contact" className="studio-button">Meet your creative partner <ArrowUpRight size={18} /></Link></div></section><MotionMarquee words={["Think with curiosity", "Make with care", "Move people", "Build together"]} /><InteractiveAbout /><section className="experience-section experience-pad about-principles"><Reveal><p className="studio-kicker">WHAT WE BRING TO THE TABLE</p><h2>Good work is<br /><em>a way of thinking.</em></h2></Reveal><div>{[["Curiosity before certainty","We begin with questions. Understanding your business and audience gives every creative decision a better foundation."],["An eye for the whole picture","A film, an identity and a website should feel like they belong to the same brand. We think across touchpoints, then focus on the details."],["Craft with a reason","Beautiful work should do something. We connect the creative direction to a message, an audience and an action."],["An open creative process","Clear scopes, shared ideas and thoughtful feedback. We work with you, so the result feels like your next chapter."]].map(([title,text],i)=><Reveal key={title}><article><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></section><section className="about-brand-snapshot"><Image src={HOUSE_OF_KOLAM_SLIDES[22].url} alt="Embossed House of Kolam brand mark by Sparklines Studio" fill sizes="100vw" /><Link href="/work/branding/house-of-kolam">See our approach in practice <ArrowUpRight size={20} /></Link></section><ServiceDirectory /><StudioCta /></main></StudioMotion><BrandFooterBanner /></div>;
}
