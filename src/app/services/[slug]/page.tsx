import { notFound } from "next/navigation";
import { SERVICES_CATALOG } from "@/data/servicesData";
import { fromCatalogService } from "@/lib/servicePageContent";
import { serviceMetadata } from "@/lib/serviceMetadata";
import { SeoServiceLayout } from "@/components/studio/SeoServiceLayout";
interface ServicePageProps { params: Promise<{slug:string}>; }
export function generateStaticParams() { return SERVICES_CATALOG.flatMap(service=>[service.slug,...service.aliases].map(slug=>({slug}))); }
export async function generateMetadata({ params }: ServicePageProps) {
 const {slug}=await params;
 const service=SERVICES_CATALOG.find(item=>item.slug===slug||item.aliases.includes(slug));
 if(!service) return {title:"Service Not Found | Sparklines Studio"};
 const content=fromCatalogService(service);
 return serviceMetadata({title:content.title,description:content.description,slug:content.slug});
}
export default async function ServicePage({ params }: ServicePageProps) {
 const {slug}=await params;
 const service=SERVICES_CATALOG.find(item=>item.slug===slug||item.aliases.includes(slug));
 if(!service) notFound();
 return <SeoServiceLayout service={fromCatalogService(service)} />;
}
