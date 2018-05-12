<template>
  <div id='app'>
    <app-header/>
    <scene/>
  </div>
</template>

<script>
import header from './components/organism/header.vue'
import scene from './components/organism/scene.vue'

export default {
  name: 'App',
  components: {
    'appHeader': header,
    'scene': scene,
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
