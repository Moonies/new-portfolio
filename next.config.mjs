import mdx from '@next/mdx'

const withMDX = mdx({
  extension: /\.mdx?$/,
  // options: {},
})

export default withMDX({
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  transpilePackages: ['next-mdx-remote'], //for fix latest version
  experimental: {
    appDir: true, // Enable the App Router feature
  },
})
