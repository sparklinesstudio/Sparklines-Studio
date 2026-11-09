import {notFound} from "next/navigation";
import {findBlog} from "@/lib/blog/store";
import {BlogEditor} from "@/components/blog/BlogEditor";
import "@/components/blog/blog.css";
export default async function EditArticlePage({params}:{params:Promise<{slug:string}>}){const post=await findBlog((await params).slug,true);if(!post||post.deletedAt)notFound();return <BlogEditor post={post}/>;}
