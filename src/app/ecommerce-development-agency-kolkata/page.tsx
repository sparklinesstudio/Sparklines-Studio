import {serviceBySlug} from "@/data/services/catalog";
import {SupportingServicePage} from "@/components/studio/SupportingServicePage";
import {serviceMetadata} from "@/lib/serviceMetadata";
const service=serviceBySlug("ecommerce-development-agency-kolkata")!;
export const metadata=serviceMetadata(service);
export default function ServicePage(){return <SupportingServicePage service={service}/>;}
