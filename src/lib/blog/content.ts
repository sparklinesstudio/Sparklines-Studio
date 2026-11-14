import {siteConfig} from "@/config/site";
import sanitizeHtml from "sanitize-html";
function editorialHref(href:string){
 if(!href||href.startsWith("#"))return href;
 try{const url=new URL(href,siteConfig.url);const legacy:Record<string,string>={"/seo-services":"/seo-agency-kolkata","/seo-services/local-seo-services":"/local-seo-agency-kolkata","/seo-for-interior-designers":"/interior-design-seo-agency-kolkata","/vaphers.com":"https://www.vaphers.com/","/video-production-agency-kolkata":"/","/video-production-kolkata":"/","/services/video-production":"/","/services/seo":"/seo-agency-kolkata","/services/ppc-advertising":"/paid-ads-agency-kolkata","/services/social-media":"/social-media-marketing-agency-kolkata","/services/branding":"/branding-agency-kolkata","/services/web-design":"/web-design-agency-kolkata"};
 if(["sparklines.studio","www.sparklines.studio","sparklinesstudio.com","www.sparklinesstudio.com"].includes(url.hostname))return (legacy[url.pathname]||url.pathname)+url.search+(url.hash==="#video-masonry"?"#selected-films":url.hash);
 if(["vaphers.com","www.vaphers.com"].includes(url.hostname)){const relevant:Record<string,string>={"/seo-for-interior-designers":"/interior-design-seo-agency-kolkata","/seo-services/local-seo-services":"/local-seo-agency-kolkata"};if(relevant[url.pathname])return relevant[url.pathname];}
 }catch{/* sanitizer handles unsupported URLs */}return href;
}
export function cleanHtml(html: string) {
 return sanitizeHtml(html, { allowedTags: ["p","br","h2","h3","h4","strong","b","em","i","u","s","blockquote","pre","code","ul","ol","li","hr","a","img","figure","figcaption","table","thead","tbody","tr","th","td"], allowedAttributes: {a:["href","title","target","rel"],img:["src","alt","width","height","loading"],td:["colspan","rowspan"],th:["colspan","rowspan"]}, allowedSchemes:["https","http","mailto","tel"], allowedSchemesByTag:{img:["https"]}, allowProtocolRelative:false, transformTags:{a:(tag,attrs)=>({tagName:tag,attribs:{...attrs,href:editorialHref(attrs.href||""),rel:"noopener noreferrer"}}),img:(tag,attrs)=>({tagName:tag,attribs:{...attrs,loading:"lazy"}})} });
}
export function textContent(html: string) { return sanitizeHtml(html,{allowedTags:[],allowedAttributes:{}}).replace(/&nbsp;/g," ").trim(); }
export function articleContent(html: string) {
 const toc: {id:string;text:string;level:number}[]=[];
 const content=cleanHtml(html).replace(/<(h[234])>([\s\S]*?)<\/\1>/gi,(_match,tag:string,inner:string)=>{
  const text=textContent(inner);const id="section-"+(toc.length+1);toc.push({id,text,level:Number(tag[1])});return "<"+tag+' id="'+id+'">'+inner+"</"+tag+">";
 });
 return {html:content,toc,readingMinutes:Math.max(1,Math.ceil(textContent(content).split(/\s+/).length/220))};
}
