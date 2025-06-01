import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.fashion-trading.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
