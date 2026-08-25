import path from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services/insurance-claims',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/building-additions',
        destination: '/services/room-addition',
        permanent: true,
      },
      {
        source: '/services/outdoor-construction',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
