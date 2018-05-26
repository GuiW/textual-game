<template>
  <router-link class="btn cta" :to="{name: cta.routeLink}" tag="button">{{cta.text}}</router-link>
</template>

<script>
export default {
  props: {
    cta: Object
  }
}
</script>
