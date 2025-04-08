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
  sassOptions: {
    includePaths: ['./styles'],
    prependData: `@import "variables"; @import "mixins"; @import "functions"; @import "animations"; @import "typography"; @import "utilities";`,
  },
};

module.exports = nextConfig;
