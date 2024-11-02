---
title: Button
description: Button 组件文档

next:
  link: /components/collapse
  text: Collapse 折叠面板

prev:
  link: /get-started
  text: 快速开始
---
# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type` `plain` `round` `circle` 属性定义按钮的样式。

::: preview
demo-preview=../demo/button/Basic.vue
:::

## 禁用状态

按钮不可点击。

::: preview
demo-preview=../demo/button/Disabled.vue
:::

## 图标按钮

使用 `icon` 属性来添加图标。

::: preview
demo-preview=../demo/button/Icon.vue
:::

## 按钮组

使用 `<hm-button-group>` 包裹多个按钮，来组合按钮。

::: preview
demo-preview=../demo/button/ButtonGroup.vue
:::

## 加载状态

按钮加载状态。

::: preview
demo-preview=../demo/button/Loading.vue
:::

## Tag 标签

使用 `tag` 属性来定义按钮的标签类型。

::: tip 您可以使用 loading 插槽或 loadingIcon 属性自定义您的 loading 图标

::: preview
demo-preview=../demo/button/Tag.vue
:::

## 节流模式

使用 `use-throttle` 属性来定义按钮节流模式。

::: preview
demo-preview=../demo/button/Throttle.vue
:::

## Button API

### Props

| Name              | Description                       | Type                                                             | Default |
| ----------------- | --------------------------------- | ---------------------------------------------------------------- | ------- |
| size              | 尺寸                              | `enum` - `'large'\| 'default'\| 'small'`                         | -       |
| type              | 类型                              | `enum` - `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | info    |
| plain             | 是否为朴素按钮                    | `boolean`                                                        | false   |
| round             | 是否为圆角按钮                    | `boolean`                                                        | false   |
| circle            | 是否为圆形按钮                    | `boolean`                                                        | false   |
| loading           | 是否为加载中状态                  | `boolean`                                                        | false   |
| loading-icon      | 自定义加载中状态图标组件          | `string`                                                         | spinner |
| disabled          | 按钮是否为禁用状态                | `boolean`                                                        | false   |
| icon              | 按钮图标                          | `string`                                                         | -       |
| autofocus         | 是否自动聚焦(原生`autofocus`属性) | `boolean`                                                        | false   |
| native-type       | 原生 type 属性                    | `enum` - `'button'\| 'submit'\| 'reset'`                         | button  |
| tag               | 自定义元素标签                    | `string`\|`Component`                                            | button  |
| use-throttle      | 是否使用节流模式                  | `boolean`                                                        | true    |
| throttle-duration | 节流模式下，节流时间间隔(ms)      | `number`                                                         | 500     |

### Slots

| Name    | Description |
| ------- | ----------- |
| default | 按钮内容    |
| loading | 加载图标    |

### Events

| Name  | Description | Type                   |
| ----- | ----------- | ---------------------- |
| click | 点击事件    | `(e: 'click') => void` |

### Expose

| Name     | Description      | Type                                                                 |
| -------- | ---------------- | -------------------------------------------------------------------- |
| ref      | 是否处于加载状态 | `Ref<HTMLButtonElement>`                                          |
| size     | 按钮大小         | `Computed<'default' \|'small' \|'large'>`                          |
| type     | 按钮类型         | `Computed<'primary' \|'success' \|'warning' \|'danger' \| 'info'>` |
| disabled | 是否禁用         | `Computed<boolean>`                                                |

## ButtonGroup API

### Props

| Name     | Description | Type                                                              | Default |
| -------- | ----------- | ----------------------------------------------------------------- | ------- |
| size     | 按钮大小    | `enum` - `'large'\| 'default'\| 'small'`                          | default |
| type     | 按钮类型    | `enum` - `'primary' \|'success' \|'warning' \|'danger' \| 'info'` | info    |
| disabled | 是否禁用    | `boolean`                                                         | false   |

### Slots

| Name    | Description | Type     |
| ------- | ----------- | -------- |
| default | 默认插槽    | `Button` |
