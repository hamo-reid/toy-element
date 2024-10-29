/**
 * 负责umd打包
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';



export default defineConfig({
  plugins: [vue()],  // 引入插件
  build: {
    outDir: 'dist/umd', // 输出目录
    lib: {
      entry: resolve(__dirname, './index.ts'), // 入口文件
      name: 'ToyElement', // 全局变量名
      fileName: "index",
      formats: ['umd'] // 打包格式
    },
    rollupOptions: {
      external: ['vue'], // 需要排除的依赖
      output: {
        exports: 'named', // 导出类型
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (assetInfo) => {
          const assetName = assetInfo.name || assetInfo.names?.[0] as string
          if (assetName === 'style.css') return 'index.css'
          return assetName
        }
      }
    }
  }
})