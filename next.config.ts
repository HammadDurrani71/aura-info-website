import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Turbopack scoped to this app folder to avoid wrong-root scans.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
