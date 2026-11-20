import {notFound} from "next/navigation";
import {studioServices,existingServiceSlugs,serviceBySlug} from "@/data/services/catalog";
import {SupportingServicePage} from "@/components/studio/SupportingServicePage";
import {SeoServicePage} from "@/components/studio/SeoServicePage";
import {SeoBuyingLanding} from "@/components/studio/SeoBuyingLanding";
import {seoBuyingPageBySlug,seoBuyingPages} from "@/data/services/seo-buying-pages";
import {serviceMetadata} from "@/lib/serviceMetadata";
export const dynamicParams=false;
export function generateStaticParams(){
 const slugs = new Set([
  ...studioServices.filter(service=>!existingServiceSlugs.has(service.slug)).map(service=>service.slug),
  ...seoBuyingPages.map(page=>page.slug),
 ]);
 return [...slugs].map(service=>({service}));
}
type Props={params:Promise<{service:string}>};
export async function generateMetadata({params}:Props){
 const { service: slug } = await params;
 const page = seoBuyingPageBySlug(slug);
 if (page) return serviceMetadata(page, page);
 const service = serviceBySlug(slug);
 return service ? serviceMetadata(service) : {title:"Page not found",robots:{index:false}};
}
export default async function ServicePage({params}:Props){
 const { service: slug } = await params;
 const page = seoBuyingPageBySlug(slug);
 if (page) return <SeoBuyingLanding page={page}/>;
 const service = serviceBySlug(slug);
 if (!service) notFound();
 return service.family==="SEO & AI search"?<SeoServicePage service={service}/>:<SupportingServicePage service={service}/>;
}
