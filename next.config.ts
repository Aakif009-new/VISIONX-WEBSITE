import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:4000/api/:path*",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/events",
        destination: "/workshops",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
