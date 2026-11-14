import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {serviceBySlug} from "@/data/services/catalog";
import {articleServices} from "@/data/services/editorial";
import "./supporting-services.css";
export function ServiceConnections({slugs,title="Put the thinking into practice."}:{slugs:string[];title?:string}){const services=slugs.map(serviceBySlug).filter((service):service is NonNullable<typeof service>=>Boolean(service));return <section className="blog-service-connections"><h2>{title}</h2>{services.map(service=><Link href={"/"+service.slug} key={service.slug}>{service.title}<ArrowUpRight size={15} className="inline-block ml-2"/><span>{service.description}</span></Link>)}</section>;}
export function ArticleServiceConnections({slug}:{slug:string}){return <ServiceConnections slugs={articleServices[slug]||["seo-agency-kolkata","brand-strategy-agency-kolkata"]}/>;}
