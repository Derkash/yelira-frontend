import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.yelira.fr',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'yelira.fr',
        pathname: '/wp-content/**',
      },
    ],
  },
};

export default nextConfig;
