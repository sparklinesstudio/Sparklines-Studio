import {PORTFOLIO_DATA} from "@/data/portfolioData";
import {serviceMetadata} from "@/lib/serviceMetadata";
import {StructuredData} from "@/components/seo/StructuredData";
import {absoluteUrl,websiteId,organizationId,breadcrumbSchema} from "@/lib/structuredData";
const project=PORTFOLIO_DATA.find(item=>item.id==="luxoria-multilingual-seo")!;
const route="/work/luxoria-multilingual-seo";
export const metadata=serviceMetadata({title:project.title,description:project.tagline,slug:"work/luxoria-multilingual-seo"});
export default function WorkDetailLayout({children}:{children:React.ReactNode}){return <><StructuredData data={{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":absoluteUrl(route)+"#webpage",url:absoluteUrl(route),name:project.title,isPartOf:{"@id":websiteId},about:{"@id":organizationId},breadcrumb:{"@id":absoluteUrl(route)+"#breadcrumbs"}},breadcrumbSchema([{name:"Home",path:"/"},{name:"Work",path:"/work"},{name:project.title,path:route}],route)]}}/>{children}</>;}
