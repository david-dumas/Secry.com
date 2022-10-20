<template>
  <scrollactive
    ref="scrollactive"
    active-class="active"
    :offset="96"
    class="flex flex-col lg:flex-row gap-3 lg:gap-6 lg:items-center"
  >
    <nuxt-link :to="`#${$t('links.home')}`" class="hover-primary scrollactive-item">
      {{ $t('navigation.home') }}
    </nuxt-link>
    <nuxt-link :to="`#${$t('links.howItWorks')}`" class="hover-primary scrollactive-item">
      {{ $t('navigation.howItWorks') }}
    </nuxt-link>
    <nuxt-link :to="`#${$t('links.whyUs')}`" class="hover-primary scrollactive-item">
      {{ $t('navigation.whyUs') }}
    </nuxt-link>
    <!-- TODO: add nav translation to other links -->
    <nuxt-link :to="`#${$t('links.ratingsAndReviews')}`" class="hover-primary scrollactive-item">
      {{ $t('navigation.ratingsAndReviews') }}
    </nuxt-link>
    <nuxt-link :to="`#${$t('links.anonymousWithAvatars')}`" class="hover-primary scrollactive-item">
      {{ $t('navigation.anonymousWithAvatars') }}
    </nuxt-link>
    <nuxt-link :to="`#${$t('links.contact')}`" class="hover-primary scrollactive-item">
      {{ $t('navigation.contact') }}
    </nuxt-link>
  </scrollactive>
</template>
<script>
export default {
  name: 'NavItems'
}
</script>
