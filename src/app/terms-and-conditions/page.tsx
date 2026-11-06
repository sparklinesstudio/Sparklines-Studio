import { PolicyPage } from "@/components/studio/PolicyPage";
import { termsSections } from "@/data/studioPolicies";
import { serviceMetadata } from "@/lib/serviceMetadata";
export const metadata = serviceMetadata({ title: "Terms & Conditions", slug: "terms-and-conditions", description: "How we work together: project scope, collaboration, ownership and payments." });
export default function Page() { return <PolicyPage title="Terms & Conditions" intro="How we work together: project scope, collaboration, ownership and payments." sections={termsSections} />; }
