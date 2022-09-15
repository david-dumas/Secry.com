<template>
  <div>
    <TopSection />
    <HowItWorks />
    <WhySecry />
  </div>
</template>

<script>
import TopSection from '~/components/sections/TopSection'
import HowItWorks from '~/components/sections/HowItWorks'
import WhySecry from '~/components/sections/WhySecry'

export default {
  name: 'IndexPage',
  components: { WhySecry, HowItWorks, TopSection },
  scrollToTop: false
}
</script>
