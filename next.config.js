/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'www.gstatic.com',
      },
    ],
  },
}

module.exports = nextConfig
