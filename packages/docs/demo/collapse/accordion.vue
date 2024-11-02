<script setup>
import {ref} from 'vue'

const activeNames = ref(['1'])

</script>

<template>
<hm-collapse v-model="activeNames" accordion="true">
    <hm-collapse-item title="标题1" name="1">
      内容1
    </hm-collapse-item>
    <hm-collapse-item title="标题2" name="2">
      内容2
    </hm-collapse-item>
    <hm-collapse-item title="标题3" name="3">
      内容3
    </hm-collapse-item>
  </hm-collapse>
</template>