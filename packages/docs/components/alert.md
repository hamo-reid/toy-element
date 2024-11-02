---
title: Alert 提示
description: Alert 组件文档

prev:
  link: /components/icon
  text: Icon 图标
---

# Alert 提示

## 基础用法

Alert 不属于浮层元素，不会自动消失，需要手动关闭。

组件提供四种类型，通过配置 `type` 属性来设置，默认为 `info`。

::: preview

demo-preview=../demo/alert/basic.vue

:::

## 不可关闭

Alert 组件提供了关闭按钮，可以设置 `closable` 属性来控制是否可关闭。

::: preview

demo-preview=../demo/alert/closable.vue

:::

## 展示图标

通过设置 `show-icon` 属性来展示图标。

::: preview

demo-preview=../demo/alert/icon.vue

:::

## 文字居中

通过设置 `center` 属性来让文字居中。

::: preview

demo-preview=../demo/alert/center.vue

:::

## 提示描述

通过设置 `description` 属性来展示描述性文字。

::: preview

demo-preview=../demo/alert/description.vue

:::

## 图标和描述

::: preview

demo-preview=../demo/alert/icon-desc.vue

:::

## Alert API

### Props

| Name        | Description   | Type                                                | Default |
| ----------- | ------------- | --------------------------------------------------- | ------- |
| title       | 标题          | `string`                                            | -       |
| type        | 类型          | `enum`-`info' \| 'success' \| 'waring' \| 'danger'` | info    |
| description | 描述信息      | `string`                                            | -       |
| closable    | 是否可关闭    | `boolean`                                           | true    |
| center      | 是否居中显示  | `boolean`                                           | false   |
| effect      | 黑夜/白天模式 | `enum`-`'light' \| 'dark'`                          | -       |
| showIcon    | 是否显示图标  | `boolean`                                           | false   |

## Slots

| Name    | Description |
| ------- | ----------- |
| default | 默认插槽    |
| title   | 标题插槽    |

## Events

| Name  | Description  | Signature              |
| ----- | ------------ | ---------------------- |
| close | 触发关闭事件 | `(e: 'close') => void` |
| open  | 触发打开事件 | `(e: 'open') => void`  |

## Expose

| Name  | Description | Signature    |
| ----- | ----------- | ------------ |
| open  | 打开提示    | `() => void` |
| close | 关闭提示    | `() => void` |
