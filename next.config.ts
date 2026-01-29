import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [{ protocol: "https", hostname: "admin.ecosmartgroup.vn" }],
  },
};

export default nextConfig;
