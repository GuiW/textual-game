<template>
  <div id='app'>
    <app-header />
    <scene />
    <control-panel />
  </div>
</template>

<script>
import header from './components/organism/header.vue'
import scene from './components/organism/scene.vue'
import controlPanel from './components/organism/control-panel.vue'
import store from '@/vuex/AppStore.js'

export default {
  name: 'App',
  components: {
    'appHeader': header,
    'scene': scene,
    'controlPanel': controlPanel
  },
  store: store,
  data () {
    return {
    }
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
