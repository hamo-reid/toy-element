<template>
  <h2>通过 slot 传入内容</h2>
  <div style="max-width: 600px">
    <hm-alert type="success">Success alert</hm-alert>
    <hm-alert type="info">Info alert</hm-alert>
    <hm-alert type="warning">Warning alert</hm-alert>
    <hm-alert type="danger">Error alert</hm-alert>
  </div>
  <h2>通过 prop 传入内容</h2>
  <div style="max-width: 600px">
    <hm-alert type="success" title="Success alert" />
    <hm-alert type="info" title="Info alert" />
    <hm-alert type="warning" title="Warning alert" />
    <hm-alert type="danger" title="Error alert" />
  </div>
</template>