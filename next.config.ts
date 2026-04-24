import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    qualities: [75, 90],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.baldeaglestreamz.com" }],
        destination: "https://baldeaglestreamz.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
