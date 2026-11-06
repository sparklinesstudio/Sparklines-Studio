import { kolkataServices } from "@/data/kolkataServices";
import { ServiceLandingPage } from "@/components/studio/ServiceLandingPage";
import { serviceMetadata } from "@/lib/serviceMetadata";
const service = kolkataServices.find(s => s.slug === "personal-branding-agency-kolkata")!;
export const metadata = serviceMetadata(service);
export default function Page() { return <ServiceLandingPage service={service} />; }
