import type { NextConfig } from 'next';
import { hostname } from 'os';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'dummy-products-image.s3.eu-north-1.amazonaws.com' },
    ],
  },
};

export default nextConfig;
