import "server-only";
import { cookies } from "next/headers";
import { createHmac, createHash, timingSafeEqual } from "node:crypto";
import { siteConfig } from "@/config/site";
export const sessionCookie="studio-blog-session";
export const sessionSeconds=4*60*60;
function same(a:string,b:string){return timingSafeEqual(createHash("sha256").update(a).digest(),createHash("sha256").update(b).digest());}
export function authConfigured(){return Boolean(process.env.BLOG_ADMIN_EMAIL&&process.env.BLOG_ADMIN_PASSWORD&&process.env.BLOG_SESSION_SECRET&&process.env.BLOG_SESSION_SECRET.length>=32);}
export function checkCredentials(email:string,password:string){return authConfigured()&&same(email.trim().toLowerCase(),process.env.BLOG_ADMIN_EMAIL!.toLowerCase())&&same(password,process.env.BLOG_ADMIN_PASSWORD!);}
export function makeSession(){if(!authConfigured())throw new Error("Admin authentication is not configured.");const payload=Buffer.from(JSON.stringify({email:process.env.BLOG_ADMIN_EMAIL,expires:Date.now()+sessionSeconds*1000})).toString("base64url");return payload+"."+createHmac("sha256",process.env.BLOG_SESSION_SECRET!).update(payload).digest("base64url");}
export async function isBlogAdmin(){if(!authConfigured())return false;const token=(await cookies()).get(sessionCookie)?.value;if(!token)return false;const [payload,signature,...rest]=token.split(".");if(!payload||!signature||rest.length)return false;const expected=createHmac("sha256",process.env.BLOG_SESSION_SECRET!).update(payload).digest("base64url");if(!same(signature,expected))return false;try{const data=JSON.parse(Buffer.from(payload,"base64url").toString());return data.email===process.env.BLOG_ADMIN_EMAIL&&Number.isFinite(data.expires)&&data.expires>Date.now();}catch{return false;}}
export function sameOrigin(request:Request){const origin=request.headers.get("origin");return Boolean(origin&&[new URL(request.url).origin,siteConfig.url].includes(origin));}
const rateState=globalThis as typeof globalThis & {studioLoginAttempts?:Map<string,{count:number;until:number}>};
export function allowLogin(key:string){const attempts=rateState.studioLoginAttempts??=new Map();const now=Date.now();for(const [k,v] of attempts)if(v.until<now)attempts.delete(k);if(attempts.size>2000)return false;const value=attempts.get(key)||{count:0,until:now+15*60*1000};value.count++;attempts.set(key,value);return value.count<=10;}
