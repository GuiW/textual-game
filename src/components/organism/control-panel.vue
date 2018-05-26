<template>
  <div class="control-panel">
    <cta-container :cta-list="ctaData.upperCtaList" />
    <router-view></router-view>
  </div>
</template>

<script>
import ctaContainer from '@/components/molecule/cta-container'
import ctaData from '@/data/cta.json'

export default {
  components: {
    'ctaContainer': ctaContainer
  },
  data () {
    return {
      ctaData
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variables';

.control-panel {
  height: $actions-panel-height;
  background: lightslategrey;
}
</style>
