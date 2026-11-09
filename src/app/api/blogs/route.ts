import { NextResponse } from "next/server";
import { listBlogs } from "@/lib/blog/store";
import { blogApiError } from "@/lib/blog/api";
export async function GET(){try{const blogs=await listBlogs();return NextResponse.json({blogs:blogs.map(({contentHtml,...post})=>({...post,contentHtml:undefined}))},{headers:{"Cache-Control":"no-store"}});}catch(error){return blogApiError(error);}}
