import sanitizeHtml from "sanitize-html";
export function cleanHtml(html: string) {
 return sanitizeHtml(html, { allowedTags: ["p","br","h2","h3","h4","strong","b","em","i","u","s","blockquote","pre","code","ul","ol","li","hr","a","img","table","thead","tbody","tr","th","td"], allowedAttributes: {a:["href","title","target","rel"],img:["src","alt","width","height"],td:["colspan","rowspan"],th:["colspan","rowspan"]}, allowedSchemes:["https","http","mailto","tel"], allowedSchemesByTag:{img:["https"]}, allowProtocolRelative:false, transformTags:{a:sanitizeHtml.simpleTransform("a",{rel:"noopener noreferrer"}),img:(tag,attrs)=>({tagName:tag,attribs:{...attrs,loading:"lazy"}})} });
}
export function textContent(html: string) { return sanitizeHtml(html,{allowedTags:[],allowedAttributes:{}}).replace(/&nbsp;/g," ").trim(); }
export function articleContent(html: string) {
 const toc: {id:string;text:string;level:number}[]=[];
 const content=cleanHtml(html).replace(/<(h[234])>([\s\S]*?)<\/\1>/gi,(_match,tag:string,inner:string)=>{
  const text=textContent(inner);const id="section-"+(toc.length+1);toc.push({id,text,level:Number(tag[1])});return "<"+tag+" id=\""+id+"\">"+inner+"</"+tag+">";
 });
 return {html:content,toc,readingMinutes:Math.max(1,Math.ceil(textContent(content).split(/\s+/).length/220))};
}
