<script setup>
function handleBtnClick() {
  console.log("click");
}
</script>

<template>
  <p>
    <hm-button @click="handleBtnClick"> with throttle</hm-button>
    <hm-button :use-throttle="false" @click="handleBtnClick"
      >without throttle</hm-button
    >
  </p>
</template>