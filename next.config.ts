import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
