---
title: Icon 图标
description: Icon 组件文档

next:
  link: /components/alert
  text: Alert 提示

prev:
  link: /components/collapse
  text: Collapse 折叠面板
---

# Icon 图标

Icon 组件基于 font-awesome 图标库，支持所有 free 的font-awesome 图标。

## 基础用法

::: preview

demo-preview=../demo/icon/basic.vue

:::

## Icon API

### Props

支持 `@fortawesome/vue-fontawesome` 组件的所有属性。

新增属性如下：

| 参数  | 说明     | 类型                                                             | 默认值 |
| ----- | -------- | ---------------------------------------------------------------- | ------ |
| type  | 图标类型 | `enum` - `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | -      |
| color | 图标颜色 | `string`                                                         | -      |
