import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["http://10.74.43.117:3000"],
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "cdn.sanity.io",
      port: "",
      pathname: "/images/**",
      search: ""
    }]
  }
};

export default nextConfig;
