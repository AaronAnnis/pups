import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/pups",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
