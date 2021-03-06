/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    domains: ['tatsu513.com', 'placehold.jp'],
    disableStaticImages: true,
  },
  reactStrictMode: true,
};
