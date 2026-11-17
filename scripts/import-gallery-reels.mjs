import fs from 'node:fs';
import { v2 as cloudinary } from 'cloudinary';
import nextEnv from '@next/env';
const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());
cloudinary.config({cloud_name:process.env.CLOUDINARY_CLOUD_NAME,api_key:process.env.CLOUDINARY_API_KEY,api_secret:process.env.CLOUDINARY_API_SECRET,secure:true});
const groups = [
 ['Personal Branding', 'personal-branding', ['Ddb7vEziAFK','Dewd3fXMaev','DZcobMRJAu5','DdUCHFbIWtB','DbQlhexuDs0','Dds3rpTAy5g','Db_MybkBGMf','DdOyT-zTlmk','DbdwnGyNTKC']],
 ['Clothing','clothing',['DeMrzJiJFmk','DbiyPN6T4y8','DcV0rOZBEnk','DafTN2vIXhV','Db5BETgKD1s','Dc7k38pkR55','DKMAQ6iIjp_','DdCLIMyAUcb','DYAdUheo15_']],
 ['Real Estate','real-estate',['DZqZ-geOQSw','DY9itg2NIjw','DNlEGTxzqwu','Dcn0LRbtnax','DakgGYaNzn2','DaAc53eN1ni','DYCT377tb0q','DV0vbnqE4Uv','DVTbtG-E-3x']],
];
const output='src/data/importedGalleryVideos.json';
const videos=fs.existsSync(output)?JSON.parse(fs.readFileSync(output,'utf8')):[];
const failures=[];
for(const [category,folder,codes] of groups) for(const [index,code] of codes.entries()) {
 if(videos.some(v=>v.id===`reel-${code}`))continue;
 try {
  const page=await fetch(`https://www.instagram.com/reel/${code}/`,{signal:AbortSignal.timeout(30000)});
  const html=await page.text();
  const lsd=html.match(/"LSD",\[\],\{"token":"([^"]+)/)?.[1];
  if(!lsd)throw Error('Instagram did not provide a public media token');
  let mediaId=0n;for(const c of code)mediaId=mediaId*64n+BigInt('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.indexOf(c));
  const response=await fetch('https://www.instagram.com/api/graphql',{method:'POST',signal:AbortSignal.timeout(30000),headers:{'Content-Type':'application/x-www-form-urlencoded','X-IG-App-ID':'936619743392459','X-FB-LSD':lsd},body:new URLSearchParams({lsd,doc_id:'27130156389949648',variables:JSON.stringify({media_id:String(mediaId)})})});
  const json=await response.json();const media=json.data?.xig_polaris_media?.if_not_gated_logged_out;
  const url=media?.video_versions?.[0]?.url;if(!url)throw Error('No public video file returned');
  const file=await fetch(url,{signal:AbortSignal.timeout(90000)});if(!file.ok)throw Error(`Video download HTTP ${file.status}`);
  const bytes=Buffer.from(await file.arrayBuffer());
  const result=await new Promise((resolve,reject)=>{const stream=cloudinary.uploader.upload_stream({resource_type:'video',public_id:`video-gallery/${folder}/${code}`,overwrite:false},(err,res)=>err?reject(err):resolve(res));stream.end(bytes);});
  const base=`https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/video/upload`;
  videos.push({id:`reel-${code}`,title:`${category} Film ${String(index+1).padStart(2,'0')}`,category,client:'Featured film',duration:'',src:`${base}/f_mp4,vc_h264,q_auto,w_720/v${result.version}/${result.public_id}.mp4`,poster:`${base}/so_0,f_jpg,q_auto,w_640/v${result.version}/${result.public_id}.jpg`,aspect:'aspect-[9/16]'});
  fs.writeFileSync(output,JSON.stringify(videos,null,2)+'\n');console.log(`Uploaded ${category}: ${code} (${videos.length}/27)`);
 }catch(error){failures.push(code);console.error(`Failed ${code}: ${error.message}`);}
}
console.log(JSON.stringify({uploaded:videos.length,failures}));if(failures.length)process.exitCode=1;

