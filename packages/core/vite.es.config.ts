/**
 * 负责esm打包
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { readdirSync } from 'fs';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { filter, map } from 'lodash-es';

function getDirectoriesSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true });

  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: '../../tsconfig.build.json',
      outDir: 'dist/types',
    }), // 生成dts文件
  ],
  build: {
    outDir: 'dist/es', // 输出目录
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
          return assetName;
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('/packages/hooks')) {
            return 'hooks';
          }
          if (id.includes('/packages/utils')) {
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
