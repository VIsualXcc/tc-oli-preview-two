import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "assets.aceternity.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "www.abzocktest.com"},
      { hostname: "www.kagels-trading.de"},
      { hostname: "uxwing.com"},
      { hostname: "media.cleanshot.cloud"}
    ],
  },
};

export default nextConfig;
