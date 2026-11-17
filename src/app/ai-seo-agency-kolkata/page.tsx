import {serviceBySlug} from "@/data/services/catalog";
import {SeoServicePage} from "@/components/studio/SeoServicePage";
import {serviceMetadata} from "@/lib/serviceMetadata";
const service=serviceBySlug("ai-seo-agency-kolkata")!;
export const metadata=serviceMetadata(service);
export default function ServicePage(){return <SeoServicePage service={service}/>;}
