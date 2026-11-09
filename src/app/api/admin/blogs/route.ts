import { NextResponse } from "next/server";
import { authorize,blogApiError,readBody } from "@/lib/blog/api";
import { listBlogs,validateBlog,saveBlog } from "@/lib/blog/store";
export async function GET(request:Request){const denied=await authorize(request);if(denied)return denied;try{return NextResponse.json({blogs:await listBlogs(true)},{headers:{"Cache-Control":"no-store"}});}catch(error){return blogApiError(error);}}
export async function POST(request:Request){const denied=await authorize(request,true);if(denied)return denied;try{const slug=await saveBlog(validateBlog(await readBody(request)));return NextResponse.json({slug},{status:201});}catch(error){return blogApiError(error);}}
