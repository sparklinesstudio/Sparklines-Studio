import { NextResponse } from "next/server";
import { findBlog } from "@/lib/blog/store";
import { blogApiError } from "@/lib/blog/api";
export async function GET(_request:Request,{params}:{params:Promise<{slug:string}>}){try{const post=await findBlog((await params).slug);return NextResponse.json(post?{post}:{error:"Article not found."},{status:post?200:404,headers:{"Cache-Control":"no-store"}});}catch(error){return blogApiError(error);}}
