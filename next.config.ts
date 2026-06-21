import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  
  webpack(config) {
    // Говорим Webpack обрабатывать аудиофайлы как статические ресурсы
    config.module.rules.push({
      test: /\.(ogg|mp3|wav)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[name].[hash][ext]',
      },
    });

    return config;
  },
};

export default nextConfig;
