/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.lemon64.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
