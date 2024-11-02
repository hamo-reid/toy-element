---
search: false
next:
  link: /components/button
  text: Button 按钮
---
# 最新 Vue3 + TS 高仿 ElementPlus 打造自己的组件库

## 开始使用

**全局使用**

```js
// 引入所有组件
import ToyElement from 'toy-element'
// 引入样式
import 'toy-element/dist/style.css'
import App from './App.vue'
// 全局使用
createApp(App).use(ToyElement).mount('#app')
```

```vue
<template>
  <hm-button>我是 Button</-button>
</template>
```

**单个导入**

提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。

```vue
<template>
  <hm-button>我是 Button</hm-button>
</template>
<script>
  import { HmButton } from 'toy-element'
  export default {
    components: { HmButton },
  }
</script>
```

## 亮点

::: details

- Vite + Vitest + Vitepress 工具链
- monorepo 分包管理
- github actions 实现 CI/CD 自动化部署
- 大模型辅助：使用大模型辅助完成需求分析，设计思路，快速实现组件，提升开发效率。
:::
