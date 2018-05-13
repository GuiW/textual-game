<template>
  <div id='app'>
    <app-header />
    <scene />
    <actions-panel />
  </div>
</template>

<script>
import header from './components/organism/header.vue'
import scene from './components/organism/scene.vue'
import actionsPanel from './components/organism/actions-panel.vue'

export default {
  name: 'App',
  components: {
    'appHeader': header,
    'scene': scene,
    'actionsPanel': actionsPanel
  }
}
</script>

<style lang='scss'>
@import '~styles/variables';

body {
  font-family: $font-family-base;
  font-size: $font-size-base;
}
</style>
