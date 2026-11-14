import Link from "next/link";
import Image from "next/image";
import {ArrowUpRight,ArrowRight,Asterisk,Check,Plus} from "lucide-react";
import type {StudioService} from "@/data/services/types";
import {serviceBySlug,serviceTrail} from "@/data/services/catalog";
import {serviceDepth,serviceProcess} from "@/data/services/experience";
import {serviceCaseStudies} from "@/data/services/case-studies";
import {serviceReading} from "@/data/services/editorial";
import {studioFilms} from "@/data/studioFilms";
import {HOUSE_OF_KOLAM_SLIDES} from "@/data/houseOfKolamData";
import {HeaderNavigation} from "@/components/Home Page Components/HeaderNavigation";
import {BrandFooterBanner} from "@/components/Home Page Components/BrandFooterBanner";
import {Breadcrumbs} from "@/components/seo/Breadcrumbs";
import {StructuredData} from "@/components/seo/StructuredData";
import {serviceGraph} from "@/lib/structuredData";
import {ProductionGallery} from "./ProductionGallery";
import {FilmMasonry} from "./FilmMasonry";
import {StudioMotion,AmbientVideo} from "./StudioMotion";
import {ServiceHero} from "./ServiceHero";
import {ServicePointerCard} from "./ServicePointerCard";
import "./supporting-services.css";
import "./service-editorial.css";

export function SupportingServicePage({service}:{service:StudioService}){
 const trail=serviceTrail(service);
 const depth=serviceDepth[service.slug];
 const process=serviceProcess[service.family];
 const caseStudy=serviceCaseStudies[service.slug];
 const film=service.family==="Film & motion"&&!["saas-video-agency-kolkata","motion-graphics-agency-kolkata","explainer-video-production-kolkata"].includes(service.slug);
 const brand=["branding-agency-kolkata","brand-strategy-agency-kolkata","logo-design-agency-kolkata"].includes(service.slug);
 const related=service.related.map(slug=>slug?serviceBySlug(slug):{slug:"",name:"Video Production",title:"Video Production Agency Kolkata",description:"Explore the main production overview, selected films and the route from a first idea to the final frame."}).filter((item):item is NonNullable<typeof item>=>Boolean(item));
 const deliverables=service.deliverables.slice(0,4);
 if(deliverables.length===3)deliverables.push({title:"A handover that holds together",body:depth.handover});
 const reading=service.reading.filter(slug=>serviceReading[slug]);
 return <StudioMotion><div className="svc-page svc-editorial"><HeaderNavigation/><main id="main-content">
  <StructuredData data={serviceGraph({slug:service.slug,name:service.name,title:service.title,description:service.description,breadcrumbs:trail,faqs:service.faqs.map(([question,answer])=>({question,answer}))})}/>
  <div className="svc-breadcrumbs"><Breadcrumbs items={trail}/></div>
  <ServiceHero service={service}/>
  <nav className="svc-chapter-nav" aria-label="On this service page"><a href="#service-plan">The approach <ArrowUpRight size={14}/></a><a href="#service-proof">The proof <ArrowUpRight size={14}/></a><a href="#case-study">Case study <ArrowUpRight size={14}/></a><a href="#service-scope">Your scope <ArrowUpRight size={14}/></a></nav>
  <section className="svc-goal svc-wrap"><div className="svc-goal-marker"><Asterisk size={54} strokeWidth={1.2}/><span>The point<br/>of the project.</span></div><p>{depth.goal}</p><Link href="/contact" className="svc-text-link">Tell us where you want to go <ArrowUpRight size={19}/></Link></section>
  <section id="service-plan" className="svc-insight svc-wrap"><div><h2>{service.insight.title}</h2><div className="svc-section-count" aria-hidden="true">01 / THE THINKING</div></div><div className="svc-reading-text">{service.insight.paragraphs.slice(0,1).map(text=><p key={text}>{text}</p>)}</div></section>
  <section className="svc-guide svc-wrap"><div className="svc-section-heading"><h2>{depth.question}</h2><p>The choices that give this brief a useful direction.</p></div><div className="svc-guide-grid">{depth.guide.map(([title,body],index)=><article key={title}><span className="svc-guide-number">0{index+1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>
  <section id="service-proof" className="svc-proof"><div className="svc-wrap"><div className="svc-section-heading"><h2>Less promise.<br/><em>More to inspect.</em></h2><p>{film||brand?"Existing work, plus the decisions behind your own project. Look at what the evidence demonstrates and use it to ask better questions.":"Make the work visible. Review the reasoning and the evidence behind a result."}</p></div><div className="svc-proof-grid">
   <ServicePointerCard className={film||brand?"svc-proof-card svc-proof-media":"svc-proof-card"}>{film?<><a href="/#selected-films" aria-label="Explore the existing studio film library"><AmbientVideo {...studioFilms[service.slug.includes("real-estate")?1:0]}/><span>Selected studio films <ArrowUpRight size={22}/></span></a><div className="svc-proof-caption"><h3>Watch the craft.</h3><p>{depth.evidence[0]}</p></div></>:brand?<><Link href="/work/branding/house-of-kolam" className="svc-proof-image"><Image src={HOUSE_OF_KOLAM_SLIDES[2].url} alt="House of Kolam identity from the studio portfolio" fill sizes="(max-width:750px) 90vw, 45vw"/></Link><div className="svc-proof-caption"><Link href="/work/branding/house-of-kolam"><h3>House of Kolam. A real identity.</h3><ArrowUpRight size={22}/></Link><p>{depth.evidence[0]}</p></div></>:<><span className="svc-proof-type">01 / WORK YOU CAN REVIEW</span><h3>Show the reasoning.<br/><em>Open the working file.</em></h3><p>{depth.evidence[0]}</p><div className="svc-evidence-lines">{service.decisions.slice(0,3).map(item=><span key={item.title}><Check size={16}/>{item.title}</span>)}</div></>}</ServicePointerCard>
   <ServicePointerCard className="svc-proof-card svc-proof-orange"><span className="svc-proof-type">02 / EVIDENCE WITH CONTEXT</span><Asterisk size={62} strokeWidth={1.2}/><h3>Make the claim.<br/><em>Keep the context.</em></h3><p>{depth.evidence[1]}</p><div className="svc-proof-footnote">Client outcomes need an approved, documented case study.</div></ServicePointerCard>
  </div></div></section>
  <section className="svc-process svc-wrap"><div className="svc-section-heading"><h2>How do we turn<br/><em>the brief into better work?</em></h2><p>Four stages. A clear decision at each one.</p></div><div className="svc-process-grid">{process.map((item,index)=><article key={item.title}><span>0{index+1}<ArrowRight size={22}/></span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></section>
  <section id="service-scope" className="svc-deliverables"><div className="svc-wrap"><div className="svc-section-heading"><h2>A considered scope.<br/><em>Useful from day one.</em></h2><p>Your proposal defines the inclusions, review rounds and responsibilities. These are the workstreams that give the project a practical shape.</p></div><div className="svc-deliverable-grid">{deliverables.map((item,index)=><ServicePointerCard key={item.title}><article><span className="svc-card-index">0{index+1}<Asterisk size={23}/></span><h3>{item.title}</h3><p>{item.body}</p></article></ServicePointerCard>)}</div></div></section>
  <section id="case-study" className="svc-case-study svc-wrap" aria-label="Service case study"><div><span className="svc-small-label">{caseStudy?caseStudy.client:"CASE STUDY / SPACE RESERVED"}</span><h2>{caseStudy?caseStudy.title:<>The next story.<br/><em>With the detail left in.</em></>}</h2><p>{caseStudy?caseStudy.summary:"Reserved for a client story: the starting problem, our role, the work and an approved, evidenced outcome."}</p>{caseStudy?.href&&<Link href={caseStudy.href} className="svc-text-link">Explore the full project <ArrowUpRight size={18}/></Link>}</div><div className="svc-case-sheet"><div className="svc-case-sheet-title"><span>{caseStudy?"PROJECT RECORD":"YOUR FUTURE PROJECT RECORD"}</span><Plus size={28}/></div>{caseStudy?<><div><h3>The challenge</h3><p>{caseStudy.challenge}</p></div><div><h3>The work</h3><p>{caseStudy.approach}</p></div><div><h3>The outcome</h3><p>{caseStudy.outcome}</p></div></>:<><div><h3>01 / The starting point</h3><p>The client’s problem, audience and constraints.</p></div><div><h3>02 / The work</h3><p>Our role, key decisions and finished deliverables.</p></div><div><h3>03 / The evidence</h3><p>Approved examples, dates and context for the result.</p></div><span className="svc-case-status">Awaiting an approved case study</span></>}</div></section>
  {service.gallery==="production"&&<section id="production-library" className="svc-library"><div className="svc-wrap"><h2>Films with<br/><em>their own point of view.</em></h2><p>Explore the existing food, fashion and property films. Use the library to discuss visual direction, pacing and the formats that suit your own brief.</p></div><div data-editorial-exclude="portfolio-labels"><ProductionGallery/></div></section>}
  {service.gallery==="motion"&&<section className="svc-wrap svc-motion-gallery"><h2>Moving references.<br/><em>A starting conversation.</em></h2><p>Mixed-format studio films for discussing mood and rhythm. Animation-specific style frames and references are agreed separately for the project.</p><div data-editorial-exclude="portfolio-labels"><FilmMasonry/></div></section>}
  <section className="svc-faq svc-wrap"><div><h2>A little clarity.<br/><em>Before we start.</em></h2><p>Practical answers to help you decide whether the approach fits your project.</p></div><div>{service.faqs.map(([question,answer])=><details key={question}><summary>{question}<span className="svc-plus" aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
  <section className="svc-related svc-wrap"><div className="svc-section-heading"><h2>Good work<br/><em>connects the dots.</em></h2><Link href="/services" className="svc-text-link">Explore all studio services <ArrowUpRight size={18}/></Link></div><div className="svc-related-grid">{related.map(item=><Link href={"/"+item.slug} key={item.slug}><h3>{item.name}</h3><ArrowUpRight size={21}/></Link>)}{related.length%2===1&&<Link href="/services"><h3>Find the right combination</h3><ArrowUpRight size={21}/></Link>}</div></section>
  {reading.length>0&&<section className="svc-reading svc-wrap"><h2>Notes behind the work.</h2><div>{reading.map(slug=><Link href={"/blogs/"+slug} key={slug}><span>Studio notes</span><h3>{serviceReading[slug].title}</h3><p>{serviceReading[slug].summary}</p><ArrowRight size={20}/></Link>)}</div></section>}
  {Boolean(service.sources?.length)&&<aside className="svc-sources svc-wrap"><span>Further reference</span>{service.sources!.map(source=><a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer">{source.title}<ArrowUpRight size={13}/></a>)}</aside>}
  <section className="svc-contact"><Asterisk size={65} strokeWidth={1.2}/><h2>Bring the ambition.<br/><em>We’ll shape the brief.</em></h2><p>Tell us what needs to change, what you already have and what a useful result would look like. We can start with the right conversation.</p><Link href="/contact" className="svc-button">Let’s make something worthwhile <ArrowUpRight size={19}/></Link></section>
 </main><BrandFooterBanner/></div></StudioMotion>;
}
