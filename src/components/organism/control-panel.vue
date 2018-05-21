<template>
  <div class="control-panel">
    <ctaContainer :cta-list="togglesPanel" />
    <ctaContainer :cta-list="actions" gutter />
  </div>
</template>

<script>
import ctaContainer from '../molecule/cta-container'

export default {
  name: 'control-panel',
  components: {
    'ctaContainer': ctaContainer
  },
  data () {
    return {
      togglesPanel: [
        'Carte',
        'Journal'
      ],
      actions: [
        'Actions',
        'Nord',
        'Sac à dos',
        'Ouest',
        'Sud',
        'Est'
      ]
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
