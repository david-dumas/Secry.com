<template>
  <div class="container">
    <TopSection />
    <HowItWorks />
    <AnonymousWithAvatars />
    <WhySecry />
    <RatingsAndReviews />
    <ContactSecry />
  </div>
</template>

<script>
import TopSection from '~/components/sections/TopSection'
import HowItWorks from '~/components/sections/HowItWorks'
import WhySecry from '~/components/sections/WhySecry'
import AnonymousWithAvatars from '~/components/sections/AnonymousWithAvatarts'
import ContactSecry from '~/components/sections/ContactSecry'
import RatingsAndReviews from '~/components/sections/RatingsAndReviews'

export default {
  name: 'IndexPage',
  components: { RatingsAndReviews, ContactSecry, AnonymousWithAvatars, WhySecry, HowItWorks, TopSection },
  scrollToTop: false
}
</script>
