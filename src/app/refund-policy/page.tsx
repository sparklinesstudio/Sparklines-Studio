import { PolicyPage } from "@/components/studio/PolicyPage";
import { refundSections } from "@/data/studioPolicies";
import { serviceMetadata } from "@/lib/serviceMetadata";
export const metadata = serviceMetadata({ title: "Refund Policy", slug: "refund-policy", description: "Payment, cancellation and refund information for studio engagements." });
export default function Page() { return <PolicyPage title="Refund Policy" intro="Payment, cancellation and refund information for studio engagements." sections={refundSections} />; }
