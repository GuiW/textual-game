<template>
  <div class="cta-container"  v-bind:class="{ 'cta-container--gutter': gutter }">
    <button class="cta btn" v-for="(cta, index) in ctaList" :key="index">{{cta}}</button>
  </div>
</template>

<script>
export default {
  name: 'cta-container',
  props: {
    gutter: Boolean,
    ctaList: Array
  }
}
</script>

<style lang="scss">
@import '~styles/variables';

.cta-container {
  display: flex;
  flex-wrap: wrap;
}

.cta {
  flex: 1 1 calc(100% / 3);
  height: $cta-height;
  background: $color-lightest;
  border: 1px solid $color-darkest;
}

.cta-container--gutter {
  padding: $cta-gutter;

  .cta {
    flex: 1 1 calc((100% / 3) - (#{$cta-gutter} * 6));
    margin: $cta-gutter;
  }
}
</style>
