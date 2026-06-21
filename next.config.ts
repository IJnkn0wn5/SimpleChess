import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  turbopack: {
    rules: {
      '*.ogg': {
        loaders: [], // Пустой массив лоадеров решает ошибку 'is not iterable'
        as: 'url',   // Говорит Turbopack импортировать файл как текстовую ссылку-путь
      },
    },
  },
};

export default nextConfig;
