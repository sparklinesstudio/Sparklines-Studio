import type {NextConfig} from "next";
const nextConfig:NextConfig={devIndicators:false,images:{remotePatterns:[{protocol:"https",hostname:"**"}]},async redirects(){return [
 {source:"/video-production-agency-kolkata",destination:"/",permanent:true},
 {source:"/video-production-kolkata",destination:"/",permanent:true},
 {source:"/chatgot-seo-agency-kolkata",destination:"/chatgpt-seo-agency-kolkata",permanent:true},
 {source:"/real-estates-seo-agency-kolkata",destination:"/real-estate-seo-agency-kolkata",permanent:true},
 ];}};
export default nextConfig;
