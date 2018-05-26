<template>
  <div id='app'>
    <app-header />
    <router-view />
  </div>
</template>

<script>
import header from './components/organism/header.vue'

export default {
  components: {
    'appHeader': header
  },
  mounted () {
    this.$http.get('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
      console.log('response', response.body)
    }, (error) => {
      console.log('error', error)
    })
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
