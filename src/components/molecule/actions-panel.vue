<template>
  <cta-container :cta-list="ctaData.test" gutter />
</template>

<script>
import ctaContainer from '@/components/molecule/cta-container'
import ctaData from '@/data/cta.json'

export default {
  components: {
    ctaContainer
  },
  data () {
    return {
      ctaData
    }
  }
}
</script>
