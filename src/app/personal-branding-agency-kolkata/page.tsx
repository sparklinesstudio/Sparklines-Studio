import {serviceBySlug} from "@/data/services/catalog";
import {SupportingServicePage} from "@/components/studio/SupportingServicePage";
import {serviceMetadata} from "@/lib/serviceMetadata";
const service=serviceBySlug("personal-branding-agency-kolkata")!;
export const metadata=serviceMetadata(service);
export default function ServicePage(){return <SupportingServicePage service={service}/>;}
