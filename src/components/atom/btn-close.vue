<template>
  <router-link class="btn btn-close" :to="{name: route}" tag="button">X</router-link>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      default: 'root'
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variables';

.btn-close {
  position: absolute;
  bottom: 2%;
  left: calc(50% - #{$btn-close-size}/2);
  width: $btn-close-size;
  height: $btn-close-size;
  color: $color-darkest;
  font-size: 1.4em;
  border: 1px solid $color-darkest;
  border-radius: 100%;
}
</style>
