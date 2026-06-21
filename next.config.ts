import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  turbopack: {
    rules: {
      '*.ogg': {
        loaders: ['file-loader'],
        as: 'resource',
      },
    },
  },
};

export default nextConfig;
