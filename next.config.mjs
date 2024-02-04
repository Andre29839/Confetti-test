/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
