// const withPlugins = require("next-compose-plugins");
// const optimizedImages = require("next-optimized-images");

// module.exports = withPlugins([
//   [
//     optimizedImages,
//     {
//       // These are the default values. You can omit them if you want.
//       handleImages: ["jpeg", "png", "svg", "webp", "gif"],
//       optimizeImages: true,
//       optimizeImagesInDev: false,
//       mozjpeg: {
//         quality: 80,
//       },
//       optipng: {
//         optimizationLevel: 3,
//       },
//       pngquant: {
//         speed: 1,
//         quality: [0.65, 0.8],
//       },
//       svgo: {
//         plugins: [{ removeViewBox: false }],
//       },
//       webp: {
//         preset: "default",
//         quality: 75,
//       },
//       images: {
//         domains: ['media.graphassets.com'],
//         unoptimized: true,
//       },
//       eslint: {
//         ignoreDuringBuilds: true,
//       },
//     },
//   ],
// ]);

// const withPlugins = require("next-compose-plugins");
// const optimizedImages = require("next-optimized-images");

// module.exports = withPlugins([
//   [
//     optimizedImages,
//     {
//       // These are the default values. You can omit them if you want.
//       handleImages: ["jpeg", "png", "svg", "webp", "gif"],
//       optimizeImages: true,
//       optimizeImagesInDev: false,
//       mozjpeg: {
//         quality: 80,
//       },
//       optipng: {
//         optimizationLevel: 3,
//       },
//       pngquant: {
//         speed: 1,
//         quality: [0.65, 0.8],
//       },
//       svgo: {
//         plugins: [{ removeViewBox: false }],
//       },
//       webp: {
//         preset: "default",
//         quality: 75,
//       },
//       eslint: {
//         ignoreDuringBuilds: true,
//       },
//       images: {
//         excludeDefaultImageLoader: true,
//       },
//     },
//   ],
// ]);

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js'
  }
}

module.exports = nextConfig
