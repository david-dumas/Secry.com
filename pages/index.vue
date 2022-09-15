<template>
  <div>
    <TopSection />
    <HowItWorks />
    <AnonymousWithAvatars />
    <WhySecry />
  </div>
</template>

<script>
import TopSection from '~/components/sections/TopSection'
import HowItWorks from '~/components/sections/HowItWorks'
import WhySecry from '~/components/sections/WhySecry'
import AnonymousWithAvatars from '~/components/sections/AnonymousWithAvatarts'

export default {
  name: 'IndexPage',
  components: { AnonymousWithAvatars, WhySecry, HowItWorks, TopSection },
  scrollToTop: false
}
</script>
