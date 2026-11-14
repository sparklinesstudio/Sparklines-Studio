import {kolkataServices} from "@/data/kolkataServices";
import {advertisingServices} from "./advertising";
import {coreSearchServices} from "./search-core";
import {specialistSearchServices} from "./search-specialist";
import {filmServices} from "./film";
import {brandSocialServices} from "./brand-social";
import {existingServiceDetails} from "./existing";
import type {StudioService,ServiceFamily} from "./types";
export const serviceFamilies:ServiceFamily[]=["Film & motion","SEO & AI search","Paid advertising","Brand & social","Web & commerce"];
const existing=kolkataServices.map((s):StudioService=>({
 slug:s.slug,name:s.name,title:s.title.replace(" in Kolkata"," Kolkata"),family:s.group==="Brand & visibility"?(s.name==="AI SEO"?"SEO & AI search":"Brand & social"):s.group as ServiceFamily,
 description:s.description,hero:[s.line,"Built around your brief."],intro:s.intro,
 insight:{title:s.line,paragraphs:[s.intro]},decisions:[],deliverables:s.offers.map(([title,body])=>({title,body})),
 example:{title:s.line,brief:"",plan:"",measure:""},faqs:s.faqs.map(([q,a])=>[q,a]),related:[],reading:[],
 ...existingServiceDetails[s.slug],
}));
export const studioServices:StudioService[]=[...filmServices,...coreSearchServices,...specialistSearchServices,...advertisingServices,...brandSocialServices,...existing];
export const serviceBySlug=(slug:string)=>studioServices.find(service=>service.slug===slug);
export const existingServiceSlugs=new Set([...kolkataServices.map(s=>s.slug),"seo-agency-kolkata"]);
export const familyDestination:Record<ServiceFamily,{name:string;href:string}>={
 "Film & motion":{name:"Video Production",href:"/"},"SEO & AI search":{name:"SEO",href:"/seo-agency-kolkata"},"Paid advertising":{name:"Paid Advertising",href:"/paid-ads-agency-kolkata"},"Brand & social":{name:"Branding",href:"/branding-agency-kolkata"},"Web & commerce":{name:"Website Development",href:"/website-development-agency-kolkata"},
};
export function serviceTrail(service:StudioService){const parent=["chatgpt-seo-agency-kolkata","gemini-seo-agency-kolkata","claude-seo-agency-kolkata"].includes(service.slug)?{name:"AI SEO",href:"/ai-seo-agency-kolkata"}:familyDestination[service.family];return [{name:"Home",path:"/"},{name:"Services",path:"/services"},...(parent.href!=="/"&&parent.href!=="/"+service.slug?[{name:parent.name,path:parent.href}]:[]),{name:service.name,path:"/"+service.slug}];}
export const legacyServiceDestinations:Record<string,string>={"video-production":"/","ppc-advertising":"/paid-ads-agency-kolkata","social-media":"/social-media-marketing-agency-kolkata",seo:"/seo-agency-kolkata","web-design":"/web-design-agency-kolkata",branding:"/branding-agency-kolkata"};
