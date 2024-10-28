import { defineConfig, type PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue() as PluginOption],
  css: {
    postcss: './postcss.config.js'
  }
})
