/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/GameHub',
  assetPrefix: '/GameHub/',
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
