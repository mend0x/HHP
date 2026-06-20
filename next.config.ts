import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Security & Performance Configuration */

  // Build for static export so the site can be published on GitHub Pages
  output: "export",
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || "./",

  // Enable compression
  compress: true,

  // Optimize production builds
  productionBrowserSourceMaps: false,

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  },
};

export default nextConfig;

