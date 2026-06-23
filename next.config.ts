import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    if (process.env.NODE_ENV === "development") {
      return [
        {
          source: "/api/:path*",
          destination: "http://localhost:4000/api/:path*",
        },
      ];
    }
    return [];
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
