<script lang="ts" setup>
import type { TextProps } from './types';

withDefaults(defineProps<TextProps>(), {
  tag: 'span',
  truncated: false,
})
</script>
<template>
  <component :is="tag" class="hm-text" :class="{
    'is-truncated': truncated,
    [`hm-text--${type}`]: type,
    [`hm-text--${size}`]: size,
  }" :style="{
    '-webkit-line-clamp': truncated ? lineClamp  : 'unset',
  }
    ">
    <slot></slot>
  </component>
</template>

<style scoped>
@import './style.css';
</style>
