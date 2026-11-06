import { kolkataServices } from "@/data/kolkataServices";
import { ServiceLandingPage } from "@/components/studio/ServiceLandingPage";
import { serviceMetadata } from "@/lib/serviceMetadata";
const service = kolkataServices.find(s => s.slug === "ai-seo-agency-kolkata")!;
export const metadata = serviceMetadata({ ...service, title: "AI SEO Agency Kolkata | ChatGPT & Gemini SEO" });
export default function Page() { return <ServiceLandingPage service={service} />; }
