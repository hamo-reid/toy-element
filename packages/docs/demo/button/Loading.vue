<template>
  <div>
    <hm-button type="primary" loading>Loading</hm-button>
    <hm-button type="primary" loading-icon="circle-notch" loading
      >Loading</hm-button
    >
    <hm-button type="primary" loading>
      <template #loading>
        <hm-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </hm-button>
  </div>
</template>
