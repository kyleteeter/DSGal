const path = require('path');
const nextImages = require('next-images');
const urlLoader = require('url-loader');

module.exports = withImages({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192, // Convert images < 8kb to base64 strings
            fallback: 'file-loader',
            publicPath: `/_next/static/images/`, // Path to image folder
            outputPath: `${options.isServer ? '../' : ''}static/images/`, // Path to image folder
            name: '[name].[hash].[ext]', // File name pattern
          },
        },
      ],
    });

    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['media.graphassets.com'],
  },
});
