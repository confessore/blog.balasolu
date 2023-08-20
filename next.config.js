const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{ hostname: "balasolu.com" }],
  },
};

module.exports = withContentlayer(nextConfig);
