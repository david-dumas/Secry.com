<template>
  <div>
    <TopSection />
    <WhySecry />
  </div>
</template>

<script>
import TopSection from '~/components/sections/TopSection'
import WhySecry from '~/components/sections/WhySecry'

export default {
  name: 'IndexPage',
  components: { WhySecry, TopSection },
  scrollToTop: false
}
</script>
