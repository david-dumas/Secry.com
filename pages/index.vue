<template>
  <div>
    <TopSection />
    <HowItWorks />
    <AnonymousWithAvatars />
    <WhySecry />
    <ContactSecry />
  </div>
</template>

<script>
import TopSection from '~/components/sections/TopSection'
import HowItWorks from '~/components/sections/HowItWorks'
import WhySecry from '~/components/sections/WhySecry'
import AnonymousWithAvatars from '~/components/sections/AnonymousWithAvatarts'
import ContactSecry from '~/components/sections/ContactSecry'

export default {
  name: 'IndexPage',
  components: { ContactSecry, AnonymousWithAvatars, WhySecry, HowItWorks, TopSection },
  scrollToTop: false
}
</script>
