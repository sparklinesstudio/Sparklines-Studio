import Link from "next/link";
import Image from "next/image";
import {ArrowDownRight,ArrowUpRight,Asterisk,Globe} from "lucide-react";
import type {StudioService} from "@/data/services/types";
import {serviceDepth} from "@/data/services/experience";
import {studioFilms} from "@/data/studioFilms";
import {HOUSE_OF_KOLAM_SLIDES} from "@/data/houseOfKolamData";
import {AmbientVideo,MotionSwitch} from "./StudioMotion";
import {ServicePointerCard} from "./ServicePointerCard";
export function ServiceHero({service}:{service:StudioService}){
 const depth=serviceDepth[service.slug];
 const film=service.family==="Film & motion"&&!["saas-video-agency-kolkata","motion-graphics-agency-kolkata","explainer-video-production-kolkata"].includes(service.slug);
 const brand=["branding-agency-kolkata","brand-strategy-agency-kolkata","logo-design-agency-kolkata"].includes(service.slug);
 return <section className="svc-home-hero" aria-label={service.name+" introduction"}><div className="svc-hero-paper">
  {[0,1,2,3].map((index)=><ServicePointerCard key={index} className={"svc-hero-tile svc-hero-tile-"+index}>
   {film?<a href="#service-proof" aria-label={"Explore studio film reference "+(index+1)}><AmbientVideo {...studioFilms[[1,3,0,5][index]]}/><ArrowUpRight size={18}/></a>:brand?<Link href="/work/branding/house-of-kolam" aria-label={"View House of Kolam identity application "+(index+1)}><Image src={HOUSE_OF_KOLAM_SLIDES[[0,2,4,6][index]].url} alt="House of Kolam brand identity application" fill sizes="(max-width:700px) 36vw, 190px"/><ArrowUpRight size={18}/></Link>:<a href="#service-plan" className="svc-hero-note" aria-label={"Explore our approach: "+depth.guide[index][0]}><span>On the drawing board</span><Asterisk size={28} strokeWidth={1.3}/><strong>{depth.guide[index][0]}</strong><ArrowUpRight size={18}/></a>}
  </ServicePointerCard>)}
  <div className="svc-hero-sticker" aria-hidden="true"><Asterisk size={45} strokeWidth={1.3}/><span>SPARKLINES<br/>STUDIO</span></div>
  <div className="svc-hero-centre"><h1>{service.title.replace(/\s+Kolkata$/i,"")}{" "}<em>Kolkata</em></h1><p>{service.intro}</p><a href="#service-plan" className="svc-discover"><span>{service.hero[1]}</span><ArrowDownRight size={21}/></a></div>
  <a href="#service-proof" className="svc-hero-stamp" aria-label="Explore the proof and project evidence"><Globe size={32} strokeWidth={1.4}/><span>LOOK CLOSER<br/>AT THE WORK</span></a>
  <div className="svc-hero-bottom"><span>{service.hero[0]}</span><Asterisk size={46} strokeWidth={1.2}/><span>Made with a point of view.</span></div><div className="svc-hero-motion"><MotionSwitch/></div>
 </div></section>;
}
