/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // handle minification with rust compiler
  poweredByHeader: false,
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'components', 'modals', 'store', 'styles'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
