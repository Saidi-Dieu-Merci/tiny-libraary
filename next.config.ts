import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "place-hold.it" }],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
