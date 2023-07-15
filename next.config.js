/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'custom',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-eval' https://assets.calendly.com;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
