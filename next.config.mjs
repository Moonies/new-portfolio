import mdx from '@next/mdx'
import { i18n } from 'next-i18next'
const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  sassOptions: {
    compiler: 'modern',
    silenceDeprecations: ['legacy-js-api'],
  },
  i18n,
  // output: 'standalone',
  transpilePackages: ['next-mdx-remote'], //for fix latest version
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
}

export default withMDX(nextConfig)
