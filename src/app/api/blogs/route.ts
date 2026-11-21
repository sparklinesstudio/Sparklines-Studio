import { NextResponse } from "next/server";
import { listPublicBlogs } from "@/lib/blog/public";
import { blogApiError } from "@/lib/blog/api";
export async function GET(){try{const blogs=await listPublicBlogs();return NextResponse.json({blogs:blogs.map(({contentHtml,...post})=>({...post,contentHtml:undefined}))},{headers:{"Cache-Control":"no-store"}});}catch(error){return blogApiError(error);}}
