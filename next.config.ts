import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
 webpack(config) {
    // Говорим Next.js, как правильно импортировать звуки (включая ogg из kokopu-react)
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|m4a)$/i,
      type: 'asset/resource',
    });

    return config;
  },
  
};

export default nextConfig;
