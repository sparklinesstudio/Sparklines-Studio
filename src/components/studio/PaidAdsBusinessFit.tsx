import Link from "next/link";
import { Building2, CookingPot, Factory, GraduationCap, House, ShoppingBag } from "lucide-react";
import "./paid-ads-businesses.css";

const businesses = [
  {
    title: "Interiors, renovation & home services",
    icon: House,
    channel: "Google Search",
    href: "/google-ads-agency-kolkata",
    benefit: "Reach homeowners already looking for a contractor in places you serve, such as Salt Lake or New Town. Ask for the PIN code, project scope and budget before booking a visit.",
    target: "₹3,000 per qualified enquiry",
    math: "₹24,000 contribution per job × 1 job per 8 qualified enquiries. Above this cost, the example runs out of contribution for advertising before fees.",
  },
  {
    title: "Property developers & brokers",
    icon: Building2,
    channel: "Google Search",
    href: "/google-ads-agency-kolkata",
    benefit: "Reach people comparing active listings. Put the price range, unit types and location on the page so the sales team spends more time arranging suitable site visits.",
    target: "₹2,000 per attended site visit",
    math: "₹40,000 contribution per sale × 1 sale per 20 attended visits. Count visits that happen, then check against bookings and realised sales.",
  },
  {
    title: "Ecommerce & retail brands",
    icon: ShoppingBag,
    channel: "Facebook & Instagram ads",
    href: "/meta-ads-agency-kolkata",
    benefit: "Use short videos to show the product in use. Track delivered orders after cancellations and returns so a bestseller with a thin margin does not absorb the budget.",
    target: "₹600 per delivered order",
    math: "₹750 contribution after product, fulfilment and expected return costs, with ₹150 reserved for fees and profit. That leaves ₹600 for media.",
  },
  {
    title: "Restaurants, cafés & event venues",
    icon: CookingPot,
    channel: "Facebook & Instagram ads",
    href: "/meta-ads-agency-kolkata",
    benefit: "Promote a specific weekday slot, tasting menu or private event offer within travelling distance. Record which reservations actually show up.",
    target: "₹700 per attended table",
    math: "Four guests × ₹350 contribution per guest = ₹1,400. Reserving half leaves ₹700 for media on a table that attends.",
  },
  {
    title: "Coaching centres & training institutes",
    icon: GraduationCap,
    channel: "Google Search",
    href: "/google-ads-agency-kolkata",
    benefit: "Reach students or parents searching for a specific course or batch. Show the fees, location and start date up front, then track paid enrolments.",
    target: "₹1,000 per qualified enquiry",
    math: "₹10,000 contribution per enrolment × 1 paid enrolment per 10 qualified enquiries. This is the media break-even cost before management fees.",
  },
  {
    title: "Industrial suppliers & B2B services",
    icon: Factory,
    channel: "LinkedIn Ads",
    href: "/linkedin-ads-agency-kolkata",
    benefit: "Reach a defined buying group when role, sector or company type matters. Use a clear offer and let sales identify opportunities from people with a credible requirement.",
    target: "₹3,000 per sales-qualified lead",
    math: "₹60,000 contribution per signed deal × 1 deal per 20 sales-qualified leads. Use a review window long enough for deals to close.",
  },
];

export function PaidAdsBusinessFit() {
  return (
    <section id="ads-businesses" className="ads-businesses svc-wrap" aria-labelledby="ads-businesses-title">
      <div className="svc-section-heading">
        <h2 id="ads-businesses-title">Which Kolkata businesses<br /><em>should run paid ads?</em></h2>
        <p>Choose a channel based on how customers buy from you. Then work out what a booking, order or qualified sales opportunity is worth before deciding what to spend.</p>
      </div>
      <div className="ads-business-grid">
        {businesses.map(({ title, icon: Icon, channel, href, benefit, target, math }) => (
          <article key={title} className="ads-business-card">
            <div className="ads-business-icon"><Icon size={32} strokeWidth={1.5} aria-hidden="true" /></div>
            <h3>{title}</h3>
            <Link href={href} className="ads-business-channel">{channel}</Link>
            <p>{benefit}</p>
            <div className="ads-business-math">
              <strong>{target}</strong>
              <p>{math}</p>
            </div>
          </article>
        ))}
      </div>
      <aside className="ads-business-note">
        <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true" focusable="false">
          <path d="M20 2v36M2 20h36M7 7l26 26m0-26L7 33" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
        <p><strong>How to read the examples.</strong> These are planning scenarios using assumed margins and close rates, with amounts shown in rupees. Use your own costs and sales data, and leave room for fees, creative and profit when setting a target.</p>
      </aside>
    </section>
  );
}
