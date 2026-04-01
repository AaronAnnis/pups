import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/pups",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/pups",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
