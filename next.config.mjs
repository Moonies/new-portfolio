import mdx from '@next/mdx'

const withMDX = mdx({
  extension: /\.mdx?$/,
  // options: {},
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  transpilePackages: ['next-mdx-remote'], //for fix latest version
}

export default withMDX(nextConfig)
