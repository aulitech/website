const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  future: {
    webpack5: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require('./utils/scripts/generate-rss')
    }

    // replace React with Preact in production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
})
