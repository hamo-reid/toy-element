<script lang="ts" setup>
import type { LinkProps } from './types';
import { HmIcon } from '../Icon';

const props = withDefaults(defineProps<LinkProps>(), {
  underline: true,
  disabled: false,
  target: '_self'
});

</script>

<template>
  <a class="hm-link" :href="disabled ? void 0: href" :target="target" :style="{ textDecoration: underline ? 'underline' : 'none' }" :class="{
    [`hm-link--${type}`]: type,
    'is-disabled': disabled
  }">
    <slot name="icon">
      <hm-icon v-if="icon" :icon="icon" />
    </slot>
    <slot></slot>
  </a>
</template>

<style scoped>
@import './style.css';
</style>