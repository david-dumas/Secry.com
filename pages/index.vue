<template>
  <div>
    <TopSection />
    <HowItWorks />
  </div>
</template>

<script>
import TopSection from '~/components/sections/TopSection'
import HowItWorks from '~/components/sections/HowItWorks'

export default {
  name: 'IndexPage',
  components: { HowItWorks, TopSection },
  scrollToTop: false
}
</script>
