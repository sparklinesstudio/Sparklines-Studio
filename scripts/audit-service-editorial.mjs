import fs from "node:fs";
import sanitizeHtml from "sanitize-html";
import {createRequire} from "node:module";
const require=createRequire(import.meta.url);
const {Parser}=createRequire(require.resolve("sanitize-html"))("htmlparser2");
const base=process.argv[2]||"http://localhost:3000";
const sitemap=await(await fetch(base+"/sitemap.xml")).text();
const slugs=[...sitemap.matchAll(/<loc>[^<]+\/([^/<]*kolkata)<\/loc>/g)].map(m=>m[1]);
const results=[];
for(const slug of slugs){
 const response=await fetch(base+"/"+slug);const html=await response.text();
 const main=html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1]||"";
 // Count editorial copy, excluding navigation, code and existing portfolio item labels.
 let text="";const skipped=[];
 const parser=new Parser({onopentag(name,attrs){skipped.push(Boolean(skipped.at(-1))||["script","style","svg","nav"].includes(name)||Boolean(attrs["data-editorial-exclude"]));if(!skipped.at(-1))text+=" ";},ontext(value){if(!skipped.at(-1))text+=value;},onclosetag(){skipped.pop();if(!skipped.at(-1))text+=" ";}},{decodeEntities:true});parser.write(main);parser.end();
 const words=text.trim().split(/\s+/).length;
 const questions=[...main.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)].map(m=>sanitizeHtml(m[1],{allowedTags:[],allowedAttributes:{}})).filter(s=>s.trim().endsWith("?"));
 results.push({slug,status:response.status,words,questions:questions.length,hero:main.includes('svc-hero-paper'),proof:main.includes('id="service-proof"'),caseStudy:main.includes('id="case-study"'),scopeCards:(main.match(/class="svc-card-index"/g)||[]).length});
}
fs.mkdirSync(".next/cache",{recursive:true});fs.writeFileSync(".next/cache/service-editorial-audit.json",JSON.stringify(results,null,2));
const failures=results.filter(r=>r.status!==200||r.words<1000||r.words>1200||r.questions!==2||!r.hero||!r.proof||!r.caseStudy||r.scopeCards!==4);
console.log(JSON.stringify({pages:results.length,minWords:Math.min(...results.map(r=>r.words)),maxWords:Math.max(...results.map(r=>r.words)),failures},null,2));
if(results.length!==33||failures.length)process.exitCode=1;
