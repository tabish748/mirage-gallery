/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
  reactStrictMode: true,
  // Redirects function to help with backward compatibility because MG
  // links are shared between the artists and community
  async redirects() {
    return [
      // /about
      {
        source: '/about',
        destination: '/',
        permanent: false,
      },
      // /alejandro
      {
        source: '/alejandro',
        destination: '/alejandro-and-taylor/alejandro',
        permanent: false,
      },
      // /taylor
      {
        source: '/taylor',
        destination: '/alejandro-and-taylor/taylor',
        permanent: false,
      },
      // 8000 Dreamers
      {
        source: '/dreamers',
        destination: '/dreamers/8000-dreamers',
        permanent: false,
      },
      // Dreaming of a beter world
      {
        source: '/dreaming',
        destination: '/dreamers/dreaming-a-better-world',
        permanent: false,
      },
      // Sentient Claim
      {
        source: '/sentient-claim',
        destination: '/membership',
        permanent: false,
      },
      // Drop details
      // Careful if uncomment this part. Next redirections are messy
      // when trying to work with static and dynamic routes at the
      // same level.
      // {
      //   source: '/:slug',
      //   destination: '/curated/drop/:slug',
      //   permanent: false,
      // },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }
    return config;
  },
};

module.exports = nextConfig;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
