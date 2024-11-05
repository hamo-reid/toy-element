<script lang="ts" setup>
import type { LinkProps } from './types';
import { HmIcon } from '../Icon';

defineOptions({
  name: 'HmLink'
})

withDefaults(defineProps<LinkProps>(), {
  underline: true,
  disabled: false,
  target: '_self'
});

</script>

<template>
  <a class="hm-link" :href="disabled ? void 0 : href" :target="target" :class="{
    [`hm-link--${type}`]: type,
    'is-disabled': disabled,
    'is-underline': underline
  }">
    <span class="hm-link--inner">
      <slot name="icon">
        <hm-icon v-if="icon" :icon="icon" />
      </slot>
      <slot></slot>
    </span>
  </a>
</template>

<style scoped>
@import './style.css';
</style>