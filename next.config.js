const nextImages = require('next-images');

module.exports = nextImages({
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['media.graphassets.com'],
    loader: 'custom',
  },
});

export default function imageLoader({ src, width, quality }) {
  return `https://media.graphassets.com/${src}?w=${width}&q=${quality || 75}`
}