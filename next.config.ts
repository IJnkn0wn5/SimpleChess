import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  turbopack: {
    rules: {
      '*.ogg': {
        as: 'url',
      } as any, // Обходим жесткое требование TypeScript к наличию loaders
    },
  },
};

export default nextConfig;
