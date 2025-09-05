/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("http://localhost:9000/**"), {
        protocol: "https",
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/product-images/**',
    }],
  },
};

export default nextConfig;
