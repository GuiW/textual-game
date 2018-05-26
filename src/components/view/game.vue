<template>
  <div class="game">
    <scene />
    <control-panel />
  </div>
</template>

<script>
import scene from '@/components/organism/scene.vue'
import controlPanel from '@/components/organism/control-panel.vue'

export default {
  components: {
    'scene': scene,
    'controlPanel': controlPanel
  }
}
</script>
