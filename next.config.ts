import path from 'node:path';
import type { NextConfig } from 'next';

import { serviceAreaLegacyRedirects } from './src/lib/service-areas';

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
      ...serviceAreaLegacyRedirects.map((redirect) => ({
        ...redirect,
        permanent: true,
      })),
      {
        source: '/service-areas/:slug',
        destination: '/roofing-contractor-in-:slug',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/roofing-contractor-in-:slug',
        destination: '/service-areas/:slug',
      },
    ];
  },
};

export default nextConfig;
