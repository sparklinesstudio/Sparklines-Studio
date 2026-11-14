import type {ServiceFamily} from "./types";
import {filmDepth} from "./depth-film";
import {searchDepth} from "./depth-search";
import {adsDepth} from "./depth-ads";
import {brandWebDepth} from "./depth-brand-web";
export const serviceDepth={...filmDepth,...searchDepth,...adsDepth,...brandWebDepth};
export const serviceProcess:Record<ServiceFamily,{title:string;body:string}[]>={
 "Film & motion":[
 {title:"Find the story",body:"We begin with the audience, the intended viewing situation and the material available. Agree the central message and what the viewer should understand or do afterwards. References establish tone, while a written brief records the production assumptions and the people responsible for approvals."},
 {title:"Shape it before making it",body:"The treatment, script or storyboard gives the team something concrete to review. Resolve factual questions, locations, contributors and required versions at this stage. The proposal identifies review rounds and dependencies so a change in direction can be discussed before it affects filming or detailed animation."},
 {title:"Make, review, refine",body:"Production follows the agreed plan, with staged reviews for structure and finishing. One consolidated set of comments helps separate creative feedback from factual corrections. We work through the sequence before refining colour, sound or motion, so polish is applied to a story the team has approved."},
 {title:"Prepare it for the audience",body:"Check the agreed exports in their intended viewing context, including captions and aspect ratios. Confirm rights and delivery requirements against the scope. Keep the approved master and version list organised, giving the publishing team a clear record of which file belongs in each placement."}
 ],
 "SEO & AI search":[
 {title:"Establish the starting point",body:"Review the current site, priority offers and information available to customers. Agree access and measurement definitions with the business owner. A baseline should explain the dates and conditions observed, giving later reviews a fair comparison instead of selecting a convenient screenshot after work has begun."},
 {title:"Prioritise the useful changes",body:"Turn findings into a plan with affected URLs, editorial requirements and technical dependencies. Identify the person who can supply facts or approve changes. Work is prioritised by relevance and likely usefulness, with assumptions stated explicitly so the client can see why one task comes before another."},
 {title:"Publish and verify",body:"Implement the agreed changes or work with the team responsible for the site. Check the rendered page, internal links and intended technical behaviour after release. Keep a dated change log so future observations can be connected to actual work rather than an unclear list of recommendations."},
 {title:"Learn from the right signals",body:"Review search observations alongside relevant website actions and customer feedback. Distinguish visibility from qualified demand, and explain limitations in the data. The review should decide the next priority, identify information needing maintenance and show whether the original business problem is becoming easier for customers to resolve."}
 ],
 "Paid advertising":[
 {title:"Agree the test",body:"Define the audience, offer, budget boundary and useful outcome. Check the business’s capacity to handle interest. Record what the test must establish before another round of spend is justified, including the conditions that would make the team stop."},
 {title:"Prepare the whole journey",body:"Develop creative and destination together, with the owner approving claims and terms. Test forms and measurement. Assign follow-up responsibility so the promise in the advert continues through the page and the first response from the business."},
 {title:"Launch with a review plan",body:"Use the agreed settings and record meaningful changes. Check for delivery and tracking problems before interpreting performance. Make deliberate adjustments with a stated reason, giving the team a record of what changed and what the next review needs to establish."},
 {title:"Decide what deserves another test",body:"Compare platform observations with genuine lead or order quality. Explain attribution limits and decide whether to change the offer, audience, journey or budget. A useful review can also recommend pausing an approach that has not justified further investment."}
 ],
 "Brand & social":[
 {title:"Understand the character",body:"Talk through the audience, the business’s priorities and the material that makes its story specific. Review existing assets and useful references. The brief captures what the brand should communicate and what it can substantiate, giving later design and content decisions a basis beyond personal taste."},
 {title:"Choose a coherent direction",body:"Develop the positioning, creative territory or editorial approach appropriate to the engagement. Show the reasoning and test it against representative applications. Review the idea before expanding production, so the team can resolve differences while the direction is still flexible and the intended message is easy to inspect."},
 {title:"Build the system",body:"Create the agreed identity assets, content formats or publishing materials as a connected set. Check consistency, practical use and factual accuracy. Consolidated feedback helps protect the chosen direction while allowing necessary refinement, rather than accumulating unrelated preferences until the original idea loses its character."},
 {title:"Make it usable every day",body:"Deliver the agreed assets and rules with a practical rollout or publishing routine. Name the people who approve, maintain and use the system. The handover should make ordinary decisions easier for the client team, keeping the identity or voice coherent after the initial creative work is complete."}
 ],
 "Web & commerce":[
 {title:"Map the useful journeys",body:"Identify the customer tasks and operational needs the website must support. Review content, integrations and any existing URLs that need to be preserved. Agree success conditions with the team, so the project can be judged on working behaviour as well as the quality of its visual design."},
 {title:"Design with real content",body:"Use representative headings, images and product or service information in the proposed layouts. Work through mobile behaviour and important component states. Resolving hierarchy and content gaps here makes development clearer and reduces the risk of a polished template failing when the actual business material is added."},
 {title:"Build and test the behaviour",body:"Implement the agreed pages and workflows, checking forms, navigation and content editing where included. Use appropriate test environments for integrations. Record issues with reproducible steps and verify the fixes, giving the client a clear view of what is ready and what still depends on supplied information."},
 {title:"Hand over a manageable site",body:"Complete launch checks and provide the agreed access and operating guidance. Confirm who maintains hosting, content and third-party services. Document the support arrangement and any known limitations so the business can use the finished website confidently and make future changes without losing track of its technical responsibilities."}
 ]
};
