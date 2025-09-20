import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // برای سایر دامنه‌ها
      },
    ],
  },
};

export default nextConfig;