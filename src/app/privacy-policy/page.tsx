import { PolicyPage } from "@/components/studio/PolicyPage";
import { privacySections } from "@/data/studioPolicies";
import { serviceMetadata } from "@/lib/serviceMetadata";
export const metadata = serviceMetadata({ title: "Privacy Policy", slug: "privacy-policy", description: "How information is handled when you visit our website, contact the studio or work with us." });
export default function Page() { return <PolicyPage title="Privacy Policy" intro="How information is handled when you visit our website, contact the studio or work with us." sections={privacySections} />; }
