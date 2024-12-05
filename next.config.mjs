/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: 'incremental'
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pixels.com",
      }
    ]
  },
  reactStrictMode: true,
  serverRuntimeConfig: {
    clerk: {
      apiKey: process.env.CLERK_API_KEY,
    },
  },
};

export default nextConfig;

