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
    domains: [
      'images.ctfassets.net',
      'blogger.googleusercontent.com',
      'cloud.appwrite.io',
      'api.thecrosscon.com',
    ],
  },
}
