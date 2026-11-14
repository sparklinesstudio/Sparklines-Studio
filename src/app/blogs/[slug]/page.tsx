import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {findBlog,listBlogs} from "@/lib/blog/store";
import {BlogArticle} from "@/components/blog/BlogArticle";
import {serviceMetadata} from "@/lib/serviceMetadata";
import "@/components/blog/blog.css";
import "@/components/blog/journal.css";
export const dynamic="force-dynamic";
type Props={params:Promise<{slug:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{const post=await findBlog((await params).slug);if(!post)return {title:"Article not found",robots:{index:false,follow:true}};const base=serviceMetadata({title:post.metaTitle||post.title,description:post.metaDescription,slug:"blogs/"+post.slug});return {...base,openGraph:{...base.openGraph,type:"article",publishedTime:post.publishedAt||post.createdAt,modifiedTime:post.updatedAt,authors:[post.authorName],...(post.featuredImage?{images:[{url:post.featuredImage,alt:post.imageAlt||post.title}]}:{})},twitter:{...base.twitter,card:post.featuredImage?"summary_large_image":"summary",...(post.featuredImage?{images:[post.featuredImage]}:{})}};}
export default async function ArticlePage({params}:Props){const post=await findBlog((await params).slug);if(!post)notFound();const related=(await listBlogs()).filter(item=>item.id!==post.id).slice(0,3);return <BlogArticle post={post} related={related}/>;}
