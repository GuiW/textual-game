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
import store from './vuex/AppStore.js'

export default {
  name: 'App',
  components: {
    'appHeader': header,
    'scene': scene,
    'actionsPanel': actionsPanel
  },
  store: store,
  data () {
    return {
      scenes: []
    }
  },
  mounted () {
    this.$http.get('http://localhost/adventure_game//wp-json/wp/v2/scene').then((response) => {
      this.scenes = response.data
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
