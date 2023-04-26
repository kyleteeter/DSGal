const nextImages = require('next-images');

const imageLoader = ({ src, width, quality }) => {
  return `https://media.graphassets.com/${src}?w=${width}&q=${quality || 75}`
}

module.exports = nextImages({
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['media.graphassets.com'],
    loader: 'custom',
    path: 'https://media.graphassets.com/',
  },
  imageLoader
});
