import { defineConfig } from 'vitepress'
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Toy-Element",
  description: "高仿 ElementPlus 组件库",
  base: '/toy-element/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '开始', link: '/get-started' },
        ]
      },
      {
        text: '基础组件',
        items: [
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Collapse 折叠面板', link: '/components/collapse' },
          { text: 'Icon 图标', link: '/components/icon' },
          { text: 'Text 文本', link: '/components/text' },
        ]
      },
      {
        text: '反馈组件',
        items: [
          { text: 'Alert 提示', link: '/components/alert' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(containerPreview);
      md.use(componentPreview);
    }
  }
})
