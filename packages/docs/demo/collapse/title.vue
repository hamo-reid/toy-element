<script setup>
import { ref } from 'vue'
const activeNames = ref(['1'])
</script>

<template>
  <hm-collapse v-model="activeNames" >
    <hm-collapse-item name="1" >
      <template #title>
        <span style="color: coral;">标题1</span><hm-icon icon="star" />
      </template>
      内容1
    </hm-collapse-item name="2">
    <hm-collapse-item title="标题2">
      内容2
    </hm-collapse-item>
  </hm-collapse>
</template>