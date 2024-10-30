<script lang="ts" setup>
import type { CollapseProps, CollapseEmits, CollapseItemName } from './types'
import { COLLAPSE_CTX_KEY } from './constant';
import { ref, provide, watch, watchEffect } from 'vue';
import { debugWarn } from '@toy-element/utils';

const COMP_NAME = 'HmCollapse';

defineOptions({
  name: COMP_NAME
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

const activeNames = ref(props.modelValue)
function handleItemClick(item: CollapseItemName) {
  // TODO: 完善
  let _activeName = [...activeNames.value]
  if (props.accordion) {
    _activeName = [_activeName[0] === item ? '' : item]
    updateActiveNames(_activeName)
    return
  }

  const index = _activeName.indexOf(item);
  if (index > -1) {
    _activeName.splice(index, 1) // 删除，即折叠
  } else {
    _activeName.push(item) // 添加，即展开
  }
  updateActiveNames(_activeName)
}
provide(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick
})

function updateActiveNames(newNames: CollapseItemName[]) {
  activeNames.value = newNames
  emits('update:modelValue', newNames)
  emits('change', newNames)
}

watchEffect(() =>{
  if (props.accordion && activeNames.value.length > 1) {
    debugWarn(COMP_NAME, 'Accordion mode can only contain one active panel.')
  }
})

watch(
  () => props.modelValue,
  (newNames) => updateActiveNames(newNames)
)
</script>

<template>
  <div class="hm-collapse">
    <slot></slot>
  </div>
</template>

<style scoped>
@import './style.css';
</style>
