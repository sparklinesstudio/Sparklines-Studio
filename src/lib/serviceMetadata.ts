import type {Metadata} from "next";
import {siteConfig} from "@/config/site";
export function serviceMetadata(page:{title:string;description:string;slug:string}):Metadata {
 const title=page.title+" | Sparklines Studio";const url=new URL(page.slug?"/"+page.slug:"/",siteConfig.url).toString();
 const image={url:siteConfig.url+"/og?title="+encodeURIComponent(page.title),width:1200,height:630,alt:page.title+" — Sparklines Studio, Kolkata"};
 return {title,description:page.description,alternates:{canonical:url},openGraph:{title,description:page.description,url,siteName:siteConfig.name,type:"website",locale:"en_IN",images:[image]},twitter:{card:"summary_large_image",title,description:page.description,images:[image.url]}};
}
