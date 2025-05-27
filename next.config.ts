import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://placecats.com/**'), new URL('https://placedog.net/**')]
  }
  /* config options here */
};

export default nextConfig;
