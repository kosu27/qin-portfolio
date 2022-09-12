/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.microcms-assets.io"],
  },
  env: {
    MY_TWITTER_USER_ID: "2158814556",
  },
};

module.exports = nextConfig;
