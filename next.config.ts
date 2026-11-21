import type {NextConfig} from "next";
import { seoBuyingRedirects } from "./src/data/services/seo-buying-redirects";
import { researchPostRedirects } from "./src/data/research/redirects";
const nextConfig:NextConfig={devIndicators:false,images:{remotePatterns:[{protocol:"https",hostname:"**"}]},async redirects(){return [
 {source:"/video-production-agency-kolkata",destination:"/",permanent:true},
 {source:"/video-production-kolkata",destination:"/",permanent:true},
 {source:"/chatgot-seo-agency-kolkata",destination:"/chatgpt-seo-agency-kolkata",permanent:true},
 {source:"/real-estates-seo-agency-kolkata",destination:"/real-estate-seo-agency-kolkata",permanent:true},
 ...Object.entries(seoBuyingRedirects).map(([source, destination]) => ({
  source: "/" + source,
  destination: "/" + destination,
  permanent: true,
 })),
 ...Object.entries(researchPostRedirects).map(([source, destination]) => ({
  source: "/blogs/" + source,
  destination: "/blogs/" + destination,
  permanent: true,
 })),
 ];}};
export default nextConfig;
