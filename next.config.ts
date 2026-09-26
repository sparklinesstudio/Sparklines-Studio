import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fallowrestaurant.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-ilcpnnh.nitrocdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "rlad.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d3pc8mc492u0e.cloudfront.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
