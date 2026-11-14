import {notFound} from "next/navigation";
import {studioServices,existingServiceSlugs,serviceBySlug} from "@/data/services/catalog";
import {SupportingServicePage} from "@/components/studio/SupportingServicePage";
import {serviceMetadata} from "@/lib/serviceMetadata";
export const dynamicParams=false;
export function generateStaticParams(){return studioServices.filter(service=>!existingServiceSlugs.has(service.slug)).map(service=>({service:service.slug}));}
type Props={params:Promise<{service:string}>};
export async function generateMetadata({params}:Props){const service=serviceBySlug((await params).service);return service?serviceMetadata(service):{title:"Page not found",robots:{index:false}};}
export default async function ServicePage({params}:Props){const service=serviceBySlug((await params).service);if(!service)notFound();return <SupportingServicePage service={service}/>;}
