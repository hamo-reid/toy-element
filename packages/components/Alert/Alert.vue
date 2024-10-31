<script lang="ts" setup>
import type { AlertProps, AlertEmits, AlertInstance } from './types';
import HmIcon from '../Icon/Icon.vue';
import { computed, ref } from 'vue';
import { typeIconMap } from '@toy-element/utils';

defineOptions({
  name: 'HmAlert',
})

const props = withDefaults(defineProps<AlertProps>(), {
  type: 'info',
  closable: true,
  center: false,
  showIcon: false,
  effect: 'light',
});

const emits = defineEmits<AlertEmits>();
const slots = defineSlots()
const visible = ref(true);

const iconName = computed(() => typeIconMap.get(props.type) ?? 'circle-info');
console.log(iconName.value);
const withDescription = computed(() => props.description || slots.default) // 是否有描述
function close() {
  visible.value = false;
  emits('close');
}
function open() {
  visible.value = true;
  emits('open');
}
defineExpose<AlertInstance>({
  close,
  open,
});
</script>

<template>
  <transition name="hm-alert-fade">
    <div v-show="visible" class="hm-alert" role="alert" :class="{
      [`hm-alert__${type}`]: type,
      [`hm-alert__${effect}`]: effect,
      'text-center': center,
    }">
      <hm-icon v-if="showIcon" class="hm-alert__icon" :class="{ 'big-icon': description }" :icon="iconName"></hm-icon>
      <div class="hm-alert__content">
        <span class="hm-alert__title" :class="{ 'with-desc': withDescription }"
          :style="{ display: center && !showIcon ? 'flow' : 'inline' }">
          <slot name="title">
            {{ title }}
          </slot>
        </span>
        <p class="hm-alert__description" v-if="withDescription">
          <slot>
            {{ description }}
          </slot>
        </p>
        <div class="hm-alert__close" v-if="closable">
          <hm-icon @click.stop="close" icon="xmark" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
@import './style.css';
</style>