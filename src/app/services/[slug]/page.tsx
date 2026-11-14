import {notFound,permanentRedirect} from "next/navigation";
import {SERVICES_CATALOG} from "@/data/servicesData";
import {legacyServiceDestinations} from "@/data/services/catalog";
export function generateStaticParams(){return SERVICES_CATALOG.flatMap(service=>[service.slug,...service.aliases].map(slug=>({slug})));}
export default async function LegacyServicePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const legacy=SERVICES_CATALOG.find(service=>service.slug===slug||service.aliases.includes(slug));if(!legacy)notFound();const target=slug==="google-ads"?"/google-ads-agency-kolkata":slug==="technical-seo"?"/technical-seo-agency-kolkata":legacyServiceDestinations[legacy.id];if(!target)notFound();permanentRedirect(target);}
