/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: []
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};
export default nextConfig;
