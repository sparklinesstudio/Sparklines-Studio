import type {KolkataService} from "@/data/kolkataServices";
import {serviceBySlug} from "@/data/services/catalog";
import {SupportingServicePage} from "./SupportingServicePage";
export function ServiceLandingPage({service}:{service:KolkataService}){const content=serviceBySlug(service.slug);if(!content)return null;return <SupportingServicePage service={content}/>;}
