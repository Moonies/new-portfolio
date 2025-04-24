import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  // options: {},
});


export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  transpilePackages: ["next-mdx-remote"], //for fix latest version
});