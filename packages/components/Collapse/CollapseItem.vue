<script lang="ts" setup>
import type { CollapseItemProps } from './types'
import { COLLAPSE_CTX_KEY } from './constant';
import { inject, computed } from 'vue'
import HmIcon from '../Icon/Icon.vue';
import transitionEvents from './transitionItem';

defineOptions({
  name: 'HmCollapseItem'
})
const props = defineProps<CollapseItemProps>()
const ctx = inject(COLLAPSE_CTX_KEY, void 0)

const isActive = computed(() => ctx?.activeNames.value.includes(props.name))

function handleClick() {
  if (props.disabled) return
  ctx?.handleItemClick(props.name)
}
</script>

<template>
  <div class="hm-collapse-item" :class="{
    'is-disabled': disabled,
  }">
    <div class="hm-collapse-item__header" :id="`item-header-${name}`" :class="{
      'is-disabled': disabled,
      'is-active': isActive,
    }" @click="handleClick">
      <span class="hm-collapse-item__title">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
      <hm-icon icon="angle-right" class="header-angle" />
    </div>
    <transition name="slide" v-on="transitionEvents">
      <div class="hm-collapse-item__wrapper" v-show="isActive">
        <div class="hm-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
@import './style.css';
</style>