/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  serverExternalPackages: ["@prisma/client", ".prisma"],
  webpack: (config) => {
    config.externals.push('@prisma/client', '.prisma');
    return config;
  },
};



export default nextConfig;
