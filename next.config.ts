const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ["tripkolic-task.vercel.app"],
  },
  async redirects() {
    return [];
  },
};

export default nextConfig;