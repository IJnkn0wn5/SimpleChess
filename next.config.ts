import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  turbopack: {
    rules: {
      '*.ogg': {
        loaders: ['@next/swc-loader'],
        as: 'asset',
      },
    },
  },
};

export default nextConfig;
