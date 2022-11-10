<template>
  <container>
    <scrollactive
      ref="scrollactive"
      active-class="active"
      :offset="96"
      class="flex flex-col lg:flex-row gap-3 lg:gap-6 lg:items-center"
    >
      <nuxt-link :to="`#${$t('links.howItWorks')}`" class="hover-primary scrollactive-item">
        {{ $t('navigation.howItWorks') }}
      </nuxt-link>
      <nuxt-link :to="`#${$t('links.anonymousWithAvatars')}`" class="hover-primary scrollactive-item">
        {{ $t('navigation.anonymousWithAvatars') }}
      </nuxt-link>
      <nuxt-link :to="`#${$t('links.whyUs')}`" class="hover-primary scrollactive-item">
        {{ $t('navigation.whyUs') }}
      </nuxt-link>
      <nuxt-link :to="`#${$t('links.ratingsAndReviews')}`" class="hover-primary scrollactive-item">
        {{ $t('navigation.ratingsAndReviews') }}
      </nuxt-link>
      <nuxt-link :to="`#${$t('links.contact')}`" class="hover-primary scrollactive-item">
        {{ $t('navigation.contact') }}
      </nuxt-link>
    </scrollactive>
    <select v-model="$colorMode.preference">
      <option value="dark">Dark</option>
      <option value="light">Light</option>
      <option value="system">System</option>
    </select>
  </container>
</template>
<script>
export default {
  name: 'NavItems'
}
</script>
