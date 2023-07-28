/* @type {import('next').NextConfig} */
/* const nextConfig = {}

module.exports = nextConfig */


const nextConfig = {
  
    experimental: {
      outputStandalone: true,
    },
    reactStrictMode: true,
    webpack: (config) => {
      config.experiments = { 
        asyncWebAssembly: true,
        topLevelAwait: true,
        layers: true
      }
      return config
    }
  }
  
  module.exports = nextConfig