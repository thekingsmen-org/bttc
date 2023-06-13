/** @type {import('next').NextConfig} */

let prodCompilerConfig = {}

if (process.env.NODE_ENV === 'production') {
  prodCompilerConfig = {
    removeConsole: {
      exclude: ['error'],
    },
  }
}

module.exports = {
  reactStrictMode: true,
  experimental: {},
  compiler: {
    ...prodCompilerConfig,
  },
  transpilePackages: ['jotai-devtools'],
  images: {
    domains: ['images.ctfassets.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/twb8ul0o6e8h/**',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'http',
        hostname: 'images.ctfassets.net',
        pathname: '/twb8ul0o6e8h/**',
      },
      {
        protocol: 'http',
        hostname: 'images.ctfassets.net',
      },
    ],
  },
}

// module.exports = nextTranslate({
//   transpilePackages: ['jotai-devtools'],
// })
