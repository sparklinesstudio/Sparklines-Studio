import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { authorize } from "@/lib/blog/api";
export const runtime="nodejs";
export async function POST(request:Request){const denied=await authorize(request,true);if(denied)return denied;
 if(!process.env.CLOUDINARY_API_SECRET||!process.env.CLOUDINARY_API_KEY||!process.env.CLOUDINARY_CLOUD_NAME)return NextResponse.json({error:"Image uploads are not configured."},{status:503});
 if(Number(request.headers.get("content-length"))>5*1024*1024)return NextResponse.json({error:"Choose an image under 4 MB."},{status:413});
 try{const form=await request.formData();const file=form.get("file");if(!(file instanceof File)||!file.size||file.size>4*1024*1024||!["image/jpeg","image/png","image/webp","image/avif","image/gif"].includes(file.type))return NextResponse.json({error:"Choose a JPG, PNG, WebP, AVIF or GIF image under 4 MB."},{status:400});
 cloudinary.config({cloud_name:process.env.CLOUDINARY_CLOUD_NAME,api_key:process.env.CLOUDINARY_API_KEY,api_secret:process.env.CLOUDINARY_API_SECRET,secure:true});
 const bytes=Buffer.from(await file.arrayBuffer());
 const uploaded=await new Promise<{secure_url:string;public_id:string}>((resolve,reject)=>{const stream=cloudinary.uploader.upload_stream({folder:"sparklines/blog",resource_type:"image",allowed_formats:["jpg","jpeg","png","webp","avif","gif"]},(error,result)=>{if(error||!result)reject(error||new Error("Upload failed"));else resolve(result);});stream.end(bytes);});
 return NextResponse.json({url:uploaded.secure_url,publicId:uploaded.public_id});
 }catch{return NextResponse.json({error:"Image upload failed. Please try again."},{status:502});}}
