<script lang="ts" setup>
import type { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es';
import { computed } from 'vue'
defineOptions({
  name: 'HmIcon',
  inheritAttrs: false
})
const props = defineProps<IconProps>()
const filterProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => ({
  color: props.color ?? void 0
}))
</script>

<template>
  <i class="hm-icon" :class="[`hm-icon-${type}`]" :style="customStyles" v-bind="$attrs">
    <font-awesome-icon v-bind="filterProps"></font-awesome-icon>
  </i>
</template>

<style scoped>
.hm-icon {
  --hm-icon-color: inherit;
  display: inline-block;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  color: var(--hm-icon-color);
  font-size: inherit;
}

@each $val in primary, info, success, warning, danger {
  .hm-icon--$(val) {
    --hm-icon-color: var(--hm-color-$(
        var)
    );
  }
}
</style>