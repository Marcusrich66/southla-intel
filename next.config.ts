import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "marcusrichrealty.com",
      },
    ],
  },
};

export default nextConfig;
