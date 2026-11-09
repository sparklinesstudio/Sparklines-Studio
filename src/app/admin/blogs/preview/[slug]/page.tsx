import {notFound} from "next/navigation";
import {findBlog} from "@/lib/blog/store";
import {BlogArticle} from "@/components/blog/BlogArticle";
import "@/components/blog/blog.css";
export default async function PreviewArticlePage({params}:{params:Promise<{slug:string}>}){const post=await findBlog((await params).slug,true);if(!post||post.deletedAt)notFound();return <BlogArticle post={post} preview/>;}
