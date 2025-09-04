/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("http://localhost:9000/**")],
  },
};

export default nextConfig;
