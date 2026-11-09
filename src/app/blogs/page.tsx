import {HeaderNavigation} from "@/components/Home Page Components/HeaderNavigation";
import {BrandFooterBanner} from "@/components/Home Page Components/BrandFooterBanner";
import {BlogList} from "@/components/blog/BlogList";
import {Breadcrumbs} from "@/components/seo/Breadcrumbs";
import {StructuredData} from "@/components/seo/StructuredData";
import {pageGraph,absoluteUrl} from "@/lib/structuredData";
import {listBlogs} from "@/lib/blog/store";
import {serviceMetadata} from "@/lib/serviceMetadata";
import "@/components/blog/blog.css";
export const dynamic="force-dynamic";
export const metadata=serviceMetadata({title:"Blog & Studio Notes",description:"Explore filmmaking, motion design, brand strategy, SEO and website development insights from Sparklines Studio, Kolkata.",slug:"blogs"});
export default async function BlogsPage(){const posts=await listBlogs();const graph=pageGraph("/blogs","Blogs","CollectionPage");return <div className="blog-page"><HeaderNavigation/><main id="main-content"><StructuredData data={{...graph,"@graph":[...graph["@graph"],{"@type":"ItemList",name:"Studio articles",itemListElement:posts.map((post,index)=>({"@type":"ListItem",position:index+1,url:absoluteUrl("/blogs/"+post.slug),name:post.title}))}]}}/><BlogList posts={posts.map(post=>({...post,contentHtml:""}))}/><Breadcrumbs items={[{name:"Home",path:"/"},{name:"Blogs",path:"/blogs"}]}/></main><BrandFooterBanner/></div>;}
