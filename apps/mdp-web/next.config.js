/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  webpack(config) {
    // Configure SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  sassOptions: {
    includePaths: ['./styles'],
    prependData: `@import "variables"; 
                  @import "mixins"; 
                  @import "functions"; 
                  @import "animations";`,
  },
};

export default nextConfig;
