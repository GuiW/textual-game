<template>
  <div class="journal">
    <h1>JOURNAL</h1>
    <btn-close></btn-close>
  </div>
</template>

<script>
import btnClose from '@/components/atom/btn-close'

export default {
  components: {
    btnClose
  }
}
</script>

<style lang="scss">
  h1 {
    text-align: center;
  }
</style>
