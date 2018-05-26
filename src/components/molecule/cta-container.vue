<template>
  <div class="cta-container" :class="{ 'cta-container--gutter': gutter }">
    <template v-for="(cta, index) in ctaList">
      <component :is="cta.type"  :key="index" :cta="cta" />
    </template>
  </div>
</template>

<script>
import routerLink from '@/components/atom/cta-router-link'
import direction from '@/components/atom/cta-direction'

export default {
  props: {
    gutter: Boolean,
    ctaList: Array
  },
  components: {
    'ctaRouterLink': routerLink,
    'ctaDirection': direction
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
