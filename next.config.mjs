import mdx from '@next/mdx'
// import { i18n } from 'next-i18next'
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
  i18n: {
    locales: ['en', 'jp'],
    defaultLocale: 'en',
  },
  transpilePackages: ['next-mdx-remote'], //for fix latest version
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
}

export default withMDX(nextConfig)
