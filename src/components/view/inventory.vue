<template>
  <div class="inventory">
    <h1>INVENTAIRE</h1>
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
