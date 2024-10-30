/**
 * 负责esm打包
 */
import { defineConfig } from 'vite';

import { readdirSync } from 'fs';
import { resolve } from 'path';
import { filter, map, delay } from 'lodash-es';
import shell from 'shelljs';

import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import hooksPlugin from './hooksPlugin';
import terser from '@rollup/plugin-terser';

const RETRY_MOVE_STYLES_DELAY = 800;

const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

function getDirectoriesSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true });
  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}

function moveStyles() {
  try {
    readdirSync('./dist/es/theme');
    shell.mv('./dist/es/theme', './dist/theme');
  } catch (_) {
    delay(moveStyles, RETRY_MOVE_STYLES_DELAY);
  }
}

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: '../../tsconfig.build.json',
      outDir: 'dist/types',
    }), // 生成dts文件
    hooksPlugin({
      rmFiles: ['dist/es', 'dist/types', 'dist/theme'],
      afterBuild: moveStyles,
    }),
    terser({
      compress: {
        // 是否压缩代码
        sequences: isProd,
        // 是否压缩参数
        arguments: isProd,
        // 是否删除console
        drop_console: isProd && ['log'],
        // 是否删除debugger
        drop_debugger: isProd,
        // 压缩次数
        passes: isProd ? 4 : 1,
        // 全局定义
        global_defs: {
          '@DEV': JSON.stringify(isDev),
          '@PROD': JSON.stringify(isProd),
          '@TEST': JSON.stringify(isTest),
        },
      },
      format: {
        // 是否使用分号
        semicolons: isProd,
        // 是否使用简写
        shorthand: isProd,
        // 是否使用大括号
        braces: !isProd,
        // 是否美化代码
        beautify: !isProd,
        // 是否保留注释
        comments: !isProd,
      },
      mangle: {
        // 是否压缩顶级作用域
        toplevel: isProd,
        // 是否压缩eval
        eval: isProd,
        // 是否保留类名
        keep_classnames: isDev,
        // 是否保留函数名
        keep_fnames: isDev,
      },
    }),
  ],
  build: {
    outDir: 'dist/es', // 输出目录
    minify: false, // 压缩方式
    cssCodeSplit: true, // css代码分割
    lib: {
      entry: resolve(__dirname, './index.ts'), // 入口文件
      name: 'ToyElement', // 全局变量名
      fileName: 'index',
      formats: ['es'], // 打包格式
    },
    rollupOptions: {
      external: [
        'vue',
        '@fortawesome/font-awesome-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@popperjs/core',
        'async-validator',
      ], // 需要排除的依赖
      output: {
        assetFileNames: (assetInfo) => {
          const assetName = assetInfo.name || (assetInfo.names?.[0] as string);
          if (assetName === 'style.css') return 'index.css';
          // css分包逻辑
          if (assetInfo.type === 'asset' && /\.(css)$/i.test(assetName)) {
            return 'theme/[name][extname]';
          }
          return assetName;
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('/packages/hooks')) {
            return 'hooks';
          }
          if (
            id.includes('/packages/utils') ||
            id.includes('plugin-vue:export-helper')
          ) {
            return 'utils';
          }
          for (const item of getDirectoriesSync('../components')) {
            if (id.includes(`/packages/components/${item}`)) {
              return item;
            }
          }
        },
      },
    },
  },
});
