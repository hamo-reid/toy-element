<script lang="ts" setup>
import type { ButtonGroupProps, ButtonGroupContext } from './types'
import {provide, reactive, toRef} from 'vue';
import { BUTTON_GROUP_CONTEXT_KEY } from './constants';

defineOptions({
  name: 'HmButtonGroup',
})

const props = defineProps<ButtonGroupProps>()

provide<ButtonGroupContext>(BUTTON_GROUP_CONTEXT_KEY, reactive({
  size: toRef(props, 'size'),
  type: toRef(props, 'type'),
  disabled: toRef(props, 'disabled'),
}))
</script>

<template>
  <div class="hm-button-group">
    <slot></slot>
  </div>
</template>

<style>
@import './style.css';
</style>