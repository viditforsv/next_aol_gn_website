import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exclude development pages from production builds
  async rewrites() {
    // Only apply rewrites in production
    if (process.env.NODE_ENV === 'production') {
      return [
        // Redirect development pages to 404 in production
        {
          source: '/components-demo',
          destination: '/404',
        },
        {
          source: '/components-demo/:path*',
          destination: '/404',
        },
        {
          source: '/templates',
          destination: '/404',
        },
        {
          source: '/templates/:path*',
          destination: '/404',
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
