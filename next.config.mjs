/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: 'incremental',
    appDir: true, // Объединяем experimental параметры
    turbo: true  // Включаем Turbopack
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
