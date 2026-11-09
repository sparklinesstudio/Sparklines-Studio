import type { KolkataService } from "@/data/kolkataServices";
import { fromKolkataService } from "@/lib/servicePageContent";
import { SeoServiceLayout } from "./SeoServiceLayout";
export function ServiceLandingPage({ service }: { service: KolkataService }) {
  return <SeoServiceLayout service={fromKolkataService(service)} />;
}
