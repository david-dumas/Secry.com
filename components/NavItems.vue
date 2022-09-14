<template>
  <scrollactive
    ref="scrollactive"
    active-class="active"
    :click-to-scroll="false"
    :offset="96"
    class="flex flex-col lg:flex-row gap-3 lg:gap-6 lg:items-center"
  >
    <nuxt-link to="#home" class="hover-primary scrollactive-item">
      {{ $t('navigation.home') }}
    </nuxt-link>
    <nuxt-link to="#how-it-works" class="hover-primary scrollactive-item">
      {{ $t('navigation.howItWorks') }}
    </nuxt-link>
    <nuxt-link to="#why-us" class="hover-primary scrollactive-item">
      {{ $t('navigation.why_us') }}
    </nuxt-link>
    <nuxt-link to="#rating-and-reviews" class="hover-primary scrollactive-item">
      {{ $t('navigation.ratingsAndReviews') }}
    </nuxt-link>
    <nuxt-link to="#contact" class="hover-primary scrollactive-item">
      {{ $t('navigation.contact') }}
    </nuxt-link>
  </scrollactive>
</template>
<script>
export default {
  name: 'NavItems'
}
</script>
