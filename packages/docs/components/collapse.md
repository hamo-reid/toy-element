---
title: Collapse 折叠面板
description: Collapse 组件文档

next:
  link: /components/icon
  text: Icon 图标

prev:
  link: /components/collapse
  text: Collapse 折叠面板
---
# Collapse 折叠面板

折叠面板，提供可折叠的分组内容。

## 基础用法

::: preview

demo-preview=../demo/collapse/basic.vue

:::

## 禁用状态

通过设置 `disabled` 属性，可以禁用某一项。

::: preview

demo-preview=../demo/collapse/disabled.vue

:::

## 手风琴

通过设置 `accordion` 属性，可以开启手风琴模式，每次只能展开一个面板。

::: preview

demo-preview=../demo/collapse/accordion.vue

:::

## 自定义标题

通过 `title` 具名插槽可以自定义标题内容。

::: preview

demo-preview=../demo/collapse/title.vue

:::

## Collapse API

### Props

| Name | Description | Type |  Default |
| --- | --- | --- | --- |
| v-model | 当前展开面板的 name 列表| `string[] \| number []`  | - |
| accordion | 是否开启手风琴模式 | `boolean` | `false` |

### Events

| Name | Description | Type |
| --- | --- | --- |
| change | 切换面板时触发 | `(name: CollapseItemName[]) => void` |

### Slots

| Name | Description |
| --- | --- |
| default | Collapse 组件的内容 |

## CollapseItem API

### Props

| Name | Description | Type |  Default |
| --- | --- | --- | --- |
| name | 唯一标识符 | `string \| number` | - |
| title | 标题 | `string` | "" |
| disabled | 是否禁用 | `boolean` | `false` |

### Slots

| Name | Description |
| --- | --- |
| default | CollapseItem 组件的内容 |
| title | CollapseItem 组件的标题 |
