module.exports = {
  images: {
    domains: ['media.graphassets.com']
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}