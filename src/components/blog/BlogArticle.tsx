import Link from "next/link";
import {Calendar, User, Clock, ChevronRight} from "lucide-react";
import {HeaderNavigation} from "@/components/Home Page Components/HeaderNavigation";
import {BrandFooterBanner} from "@/components/Home Page Components/BrandFooterBanner";
import {StructuredData} from "@/components/seo/StructuredData";
import {absoluteUrl,organizationId,websiteId,breadcrumbSchema} from "@/lib/structuredData";
import {articleContent,textContent} from "@/lib/blog/content";
import type {BlogPost} from "@/lib/blog/types";
import {ArticleServiceConnections} from "@/components/studio/ServiceConnections";
import SummarizeButtons from "./SummarizeButtons";
import BlogLeadForm from "./BlogLeadForm";
const calculateReadTime=(html:string)=>Math.max(1,Math.ceil(textContent(html).split(/\s+/).length/220))+" min read";
export function BlogArticle({post,related=[],preview=false}:{post:BlogPost;related?:BlogPost[];preview?:boolean}){
 const blog={...post,authorBio:post.authorBio||"Stories, ideas and perspectives on digital marketing from the editorial team.",isGuest:false,authorWebsite:""};
 const {html:processedHtml,toc}=articleContent(post.contentHtml);const slug=post.slug;const blogUrl=absoluteUrl("/blogs/"+slug);
 const latestBlogs=related;const dynamicReadTime=calculateReadTime(post.contentHtml);
 const date=post.publishedAt||post.createdAt;
 const formattedDate=new Date(date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",timeZone:"Asia/Kolkata"});
 const path="/blogs/"+slug;const schema={"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":blogUrl+"#article",headline:post.title,description:post.metaDescription,url:blogUrl,datePublished:date,dateModified:post.updatedAt,inLanguage:"en-IN",...(post.featuredImage?{image:[post.featuredImage]}:{}),author:post.authorName==="Sparklines Studio"?{"@id":organizationId}:{"@type":"Person",name:post.authorName},publisher:{"@id":organizationId},mainEntityOfPage:{"@id":blogUrl+"#webpage"},articleSection:post.categories},{"@type":"WebPage","@id":blogUrl+"#webpage",url:blogUrl,name:post.metaTitle,isPartOf:{"@id":websiteId},breadcrumb:{"@id":blogUrl+"#breadcrumbs"},mainEntity:{"@id":blogUrl+"#article"}},breadcrumbSchema([{name:"Home",path:"/"},{name:"Blog",path:"/blogs"},{name:post.title,path}],path)]};
  return (
    <div className="vaphers-article min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      <HeaderNavigation />
      {!preview && <StructuredData data={schema} />}
      {preview && <p className="pt-28 text-center bg-amber-50 py-5 text-amber-900">Private preview · <Link href={"/admin/blogs/"+post.slug}>Back to editor</Link></p>}

      {/* TOP HEADER & GRADIENT SECTION */}
      <div className="relative w-full pt-32 pb-6 bg-gradient-to-b from-blue-600 via-blue-400 via-blue-200  via-blue-50 to-white lg:pt-40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10 ">

          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center justify-center text-xs text-white font-semibold tracking-wider uppercase mb-10 drop-shadow-sm">
            <a href="/" className="hover:text-blue-100 transition">Home</a>
            <ChevronRight className="w-3 h-3 mx-2 text-white/70" />
            <a href="/blogs" className="hover:text-blue-100 transition">Blog</a>
            <ChevronRight className="w-3 h-3 mx-2 text-white/70" />
            <span className="truncate max-w-[200px] sm:max-w-none text-white montserrat-medium">{blog.title}</span>
          </nav>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.2] mb-8 text-white montserrat-medium">
            {blog.title}
          </h1>

          {/* Meta Info Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-center gap-6 text-gray-600 text-sm mb-8 pb-8 border-b border-gray-200/60 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-6">
              <span className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border border-gray-100">
                  <User className="w-4 h-4 text-gray-500" />
                </div>
                <strong className="text-gray-900 font-medium">{blog.authorName}</strong>
              </span>

              {formattedDate && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formattedDate}
                </span>
              )}

              {/* Dynamic Read Time */}
              <span className="flex items-center gap-1.5 hidden sm:flex">
                <Clock className="w-4 h-4" />
                {dynamicReadTime}
              </span>
            </div>

            {/* Injected Client Component Buttons */}
            <SummarizeButtons title={blog.title} blogUrl={blogUrl} />

          </div>
        </div>
      </div>

      <main id="main-content" className="w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-[1400px]">

          <div className="flex flex-col lg:flex-row justify-center items-start gap-8 xl:gap-16">

            {/* LEFT SIDEBAR: TOC & Share */}
            <aside className="w-full lg:w-[280px] shrink-0 lg:sticky lg:top-28 space-y-10 order-3 lg:order-1 mt-10 lg:mt-0">
              {toc.length > 0 && (
                <div className="hidden lg:block border border-gray-200 rounded-md p-5 bg-gray-50/50">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                    Table of Contents
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-600 font-medium max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    {toc.map((item) => (
                      <li
                        key={item.id}
                        className={`hover:text-blue-600 transition ${item.level === 3 ? "ml-4 text-gray-500 text-[13px]" : "text-gray-700"
                          }`}
                      >
                        <a href={`#${item.id}`} className="block line-clamp-2 leading-relaxed">
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                  Share this article
                </h4>
                <div className="flex items-center gap-4">
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${blogUrl}`} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
                    <img src="https://res.cloudinary.com/dbwrnwa3l/image/upload/v1772000879/Platform_Facebook_Color_Original_kwwle4.svg" alt="Share on Facebook" className="w-6 h-6" />
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=${blogUrl}&text=${blog.title}`} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
                    <img src="https://res.cloudinary.com/dbwrnwa3l/image/upload/v1772000877/Platform_X_Twitter_Color_Original_qdvllx.png" alt="Share on X" className="w-6 h-6" />
                  </a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${blogUrl}`} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
                    <img src="https://res.cloudinary.com/dbwrnwa3l/image/upload/v1772000875/Platform_LinkedIn_Color_Original_gbuviy.svg" alt="Share on LinkedIn" className="w-6 h-6" />
                  </a>
                  <a href={`https://www.reddit.com/submit?url=${blogUrl}&title=${blog.title}`} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
                    <img src="https://res.cloudinary.com/dbwrnwa3l/image/upload/v1772000873/Platform_Reddit_Color_Original_m07wa6.png" alt="Share on Reddit" className="w-6 h-6 object-contain" />
                  </a>
                </div>
              </div>
            </aside>

            {/* CENTER: MAIN ARTICLE CONTENT */}
            <article className="w-full max-w-[800px] flex-1 shrink-1 order-1 lg:order-2">

              {blog.featuredImage && (
                <img
                  src={blog.featuredImage}
                  alt={blog.title}
                  className="w-full aspect-[16/9] object-cover rounded-lg mb-10 border border-gray-100 shadow-sm"
                  loading="eager"
                />
              )}

              <div
                className="blog-prose prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-figure:my-8 prose-figure:flex prose-figure:flex-col prose-figure:items-center prose-figcaption:text-[15px] prose-figcaption:text-gray-500 prose-figcaption:mt-3 prose-figcaption:text-center prose-img:rounded-lg prose-img:shadow-sm"
                dangerouslySetInnerHTML={{ __html: processedHtml }}
              />

              {/* Dynamic Author Bio Box */}
              <div className="mt-16 border-t border-gray-200 pt-8">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 font-bold text-xl flex items-center justify-center border border-blue-200 shrink-0 uppercase">
                    {blog.authorName ? blog.authorName.charAt(0) : "S"}
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        About the Author: {blog.authorName}
                      </h3>
                      {blog.isGuest && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                          Guest Contributor
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {blog.authorBio}
                    </p>
                    {blog.authorWebsite && (
                      <a
                        href={blog.authorWebsite.startsWith("http") ? blog.authorWebsite : `https://${blog.authorWebsite}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:underline pt-1"
                      >
                        <span>Visit Author's Website</span>
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <ArticleServiceConnections slug={post.slug}/>
            </article>

            {/* RIGHT SIDEBAR: Preferred Source & Lead Card */}
            <aside className="w-full lg:w-[280px] shrink-0 lg:sticky lg:top-28 space-y-6 order-2 lg:order-3 mt-10 lg:mt-0">
              <Link href="/blogs" className="flex items-center gap-3 border border-blue-100 bg-blue-50 text-blue-700 rounded-md p-4 text-sm font-semibold">More insights from Sparklines Studio <ChevronRight size={16}/></Link>

              <div className="border border-gray-200 bg-white rounded-md p-5 shadow-sm">
                <img
                  src="https://res.cloudinary.com/dbwrnwa3l/image/upload/v1772000439/ChatGPT_Image_Feb_25_2026_11_50_44_AM_tgsao7.png"
                  alt="Local SEO growth"
                  className="w-full rounded-md mb-4 border border-gray-100"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center leading-snug">
                  Outrank Your Competitors This Season
                </h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  See how you can dominate Google search results and book more jobs.
                </p>
                <BlogLeadForm />
              </div>
            </aside>

          </div>
        </div>
      </main>

      {/* Recent Posts Grid */}
      <section className="w-full py-16 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-center lg:justify-start gap-3 mb-10">
            <div className="w-4 h-4 rounded-full bg-blue-600"></div>
            <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 montserrat-medium">What to read next ? </h3>
          </div>

          {latestBlogs.length === 0 ? (
            <p className="text-gray-500 text-center lg:text-left">No other posts yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {latestBlogs.slice(0, 6).map((item: BlogPost) => {
                const d =
                  item.publishedAt || item.createdAt ? new Date(item.publishedAt || item.createdAt) : null;

                const sidebarDate = d
                  ? d.toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                  : "";

                // Calculate read time for the sidebar items dynamically as well
                const sidebarReadTime = calculateReadTime(item.contentHtml ?? "");

                return (
                  <a
                    key={item.id}
                    href={`/blogs/${item.slug}`}
                    className="group flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow duration-200"
                  >
                    {item.featuredImage && (
                      <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-gray-100">
                        <img
                          src={item.featuredImage}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    <div className="p-5 flex-1 flex flex-col">
                      <h4 className="text-[17px] font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug mb-3">
                        {item.title}
                      </h4>

                      <div className="mt-auto text-sm font-medium text-gray-500">
                        {sidebarDate && <span>{sidebarDate} &bull; </span>}
                        <span>{sidebarReadTime}</span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </section>



      <BrandFooterBanner />
    </div>
  );
}