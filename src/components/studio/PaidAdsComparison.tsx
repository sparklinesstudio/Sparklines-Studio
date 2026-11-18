import "./seo-content.css";

const comparison = [
  ["Campaign setup", "Use AI to draft ads and suggest keywords. Check every claim, location and landing page before launch.", "Use AI to develop variants. A specialist builds the campaign around search intent, audience exclusions, budget and the offer."],
  ["Conversion tracking", "Test a purchase or enquiry yourself and keep a record of which leads become customers.", "A specialist checks for missing or duplicate conversions and connects campaign reporting to sales feedback where possible."],
  ["Weekly decisions", "Ask AI to summarise the reports. Review lead quality and decide which changes are worth testing.", "A specialist uses reporting and sales feedback to isolate what changed, then decides which offers or ads to keep, revise or pause."],
];

export function PaidAdsComparison() {
  return (
    <section id="ads-comparison" className="seo-comparison" aria-labelledby="ads-comparison-title">
      <div className="svc-wrap">
        <div className="svc-section-heading">
          <h2 id="ads-comparison-title">DIY ads with AI<br /><em>vs. an ads specialist with AI.</em></h2>
          <p>Choose based on how much time you can spend on the account, how you track sales and how costly a bad test would be.</p>
        </div>
        <div className="seo-table-scroll" role="region" aria-labelledby="ads-comparison-title" tabIndex={0}>
          <table className="seo-compare-table">
            <thead>
              <tr><th scope="col">The work</th><th scope="col">You + AI</th><th scope="col">Ads specialist + AI</th></tr>
            </thead>
            <tbody>
              {comparison.map(([task, diy, specialist]) => (
                <tr key={task}><th scope="row">{task}</th><td>{diy}</td><td>{specialist}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="seo-comparison-note">
          <p>DIY is a reasonable starting point for a simple offer and a capped test. Specialist help can be useful when several campaigns share a budget or your sales team closes leads offline.</p>
        </div>
      </div>
    </section>
  );
}
