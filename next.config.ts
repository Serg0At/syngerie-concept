import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` produces a fully static `out/` directory
  // that can be served by any static host (Netlify, S3, GitHub Pages, etc.).
  // No serverless functions, no Image Optimization API.
  output: "export",
  images: { unoptimized: true },

  // Dev-only: allow tunnelled hosts (ngrok, Cloudflare Tunnel) to load HMR
  // assets while running `next dev`. Ignored in production builds.
  allowedDevOrigins: [
    "*.ngrok-free.app",
    "*.ngrok.app",
    "*.ngrok.io",
    "*.trycloudflare.com",
  ],
};

export default nextConfig;
