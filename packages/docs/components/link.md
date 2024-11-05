---
title: Link 链接
description: Link 组件文档

next:
  link: /components/icon
  text: Icon 提示

prev:
  link: /components/text
  text: Text 文本
---
# Link 链接

## 基础用法

:::preview

demo-preview=../demo/link/basic.vue

:::

## 禁用状态

可通过设置 `disabled` 属性来禁用链接。

:::preview

demo-preview=../demo/link/disabled.vue

:::

## 下划线

可通过设置 `underline` 属性来显示下划线。

:::preview

demo-preview=../demo/link/underline.vue

:::

## 图标

通过设置 `icon` 属性来添加图标。

:::preview

demo-preview=../demo/link/icon.vue

:::

## API

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| href | 链接地址 | `string` | - |
| target | 打开方式 | `string` | - |
| type | 链接类型 | `string` | - |
| underline | 是否显示下划线 | `boolean` | `true` |
| disabled | 是否禁用 | `boolean` | `false` |
| icon | 图标 | `string` | - |

### Slots

| Name | Description |
| --- | --- |
| default | 默认插槽 |
| icon | icon插槽 |
