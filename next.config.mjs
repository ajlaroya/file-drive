/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'hearty-leopard-147.convex.cloud',
          },
        ],
      },
};

export default nextConfig;
