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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloud.appwrite.io',
        port: '',
        pathname: '/v1/storage/buckets/**',
      },
    ],
    domains: [
      'images.ctfassets.net',
      'blogger.googleusercontent.com',
      'cloud.appwrite.io',
      'api.thecrosscon.com',
    ],
  },
}
