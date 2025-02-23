/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ["tripkolic-task.vercel.app"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;