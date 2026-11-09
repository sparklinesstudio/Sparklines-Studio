import { NextResponse } from "next/server";
import { isBlogAdmin, sameOrigin } from "./auth";
import { BlogError } from "./store";
export async function authorize(request:Request,write=false){if(write&&!sameOrigin(request))return NextResponse.json({error:"Request origin is not allowed."},{status:403});if(!await isBlogAdmin())return NextResponse.json({error:"Please sign in."},{status:401});return null;}
export function blogApiError(error:unknown){if(error instanceof BlogError)return NextResponse.json({error:error.message},{status:error.status});if(error&&typeof error==="object"&&"code" in error&&error.code===11000)return NextResponse.json({error:"This URL slug is already in use."},{status:409});console.error("Blog storage or request operation failed.");return NextResponse.json({error:"The request could not be completed. Please try again."},{status:503});}
export async function readBody(request:Request){const raw=await request.text();if(Buffer.byteLength(raw)>160000)throw new BlogError("Article is too large.",413);try{return JSON.parse(raw);}catch{throw new BlogError("Invalid JSON payload.");}}
