import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.jam-bot.com"],
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
