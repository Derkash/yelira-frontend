import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'yelira.fr' }],
        destination: 'https://www.yelira.fr/:path*',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp.yelira.fr',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'www.yelira.fr',
        pathname: '/wp-content/**',
      },
    ],
    minimumCacheTTL: 60 * 60 * 24, // Cache images for 24 hours
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
};

export default nextConfig;
