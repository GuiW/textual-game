<template>
  <div id='app'>
    <app-header/>
  </div>
</template>

<script>
import header from './components/header.vue'

export default {
  name: 'App',
  components: {
    'appHeader': header
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
