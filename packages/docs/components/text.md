---
title: Text 图标
description: Text 组件文档

next:
  link: /components/Icon
  text: Icon 图标

prev:
  link: /components/Alert
  text: Alert 提示
---
# Text 文本

常见文本操作

## 基础用法

:::preview

demo-preview=../demo/text/basic.vue

:::

## 尺寸

:::preview

demo-preview=../demo/text/size.vue

:::

## 省略

:::preview

demo-preview=../demo/text/truncated.vue

:::

## 自定义标签

:::preview

demo-preview=../demo/text/custom.vue

:::

## Text API

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| type | 文本类型 | `enum` - `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | - |
| size | 文本大小 | `enum` - `'large' \| 'default' \| 'small'` | - |
| truncated | 是否使用省略号 | boolean | true |
| lineClamp | 显示的行数 | number | - |
| tag | 自定义标签 | string | - |

## Text Slot

| Name | Description |
| --- | --- |
| default | 自定义文本内容 |
