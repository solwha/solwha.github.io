import { defineConfig } from 'dumi';

// const defaultPath = 'solwha.github.io';
export default defineConfig({
  title: 'solwha',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // base: process.env.NODE_ENV === 'production' ? `/${defaultPath}/` : '/',
  // publicPath: process.env.NODE_ENV === 'production' ? `/${defaultPath}/` : '/',
  // more config: https://d.umijs.org/config
});
