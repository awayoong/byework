import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/byework",
  assetPrefix: "/byework/",
  trailingSlash: true,
  images: {
    unoptimized: true, // GitHub PagesはImage Optimizationをサポートしないため
  },
};

export default nextConfig;
