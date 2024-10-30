/**
 * 负责umd打包
 */
import { defineConfig } from 'vite';

import { resolve } from 'path';
import { readFileSync } from 'fs';
import { delay } from 'lodash-es';

import shell from 'shelljs';
import vue from '@vitejs/plugin-vue';
import { compression } from 'vite-plugin-compression2';
import hooksPlugin from './hooksPlugin';
import terser from '@rollup/plugin-terser';

const RETRY_MOVE_STYLE_DELAY = 800;

const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

function moveStyle() {
  try {
    readFileSync('./dist/umd/index.css.gz');
    shell.cp('./dist/umd/index.css', './dist/index.css');
  } catch (_) {
    delay(() => moveStyle(), RETRY_MOVE_STYLE_DELAY);
  }
}

export default defineConfig({
  plugins: [
    vue(),
    // 引入压缩插件
    compression({
      include: /\.(cjs|css)$/i, // 压缩文件
    }),
    hooksPlugin({
      rmFiles: ['./dist/umd', './dist/index.css'],
      afterBuild: moveStyle
    }),
    terser({
      compress: {
        // 是否删除console
        drop_console: ['log'],
        // 是否删除debugger
        drop_debugger: true,
        // 压缩次数
        passes: 3,
        // 全局定义
        global_defs: {
          '@DEV': JSON.stringify(isDev),
          '@PROD': JSON.stringify(isProd),
          '@TEST': JSON.stringify(isTest),
        },
      },
    })
  ], // 引入插件
  build: {
    outDir: 'dist/umd', // 输出目录
    lib: {
      entry: resolve(__dirname, './index.ts'), // 入口文件
      name: 'ToyElement', // 全局变量名
      fileName: 'index',
      formats: ['umd'], // 打包格式
    },
    rollupOptions: {
      external: ['vue'], // 需要排除的依赖
      output: {
        exports: 'named', // 导出类型
        globals: {
          vue: 'Vue',
        },
        assetFileNames: (assetInfo) => {
          const assetName = assetInfo.name || (assetInfo.names?.[0] as string);
          if (assetName === 'style.css') return 'index.css';
          return assetName;
        },
      },
    },
  },
});
