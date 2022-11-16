<template>
  <div>
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
      <LanguageSwitcher />
      <select v-model="$colorMode.preference">
        <option value="system">
          Color Theme
        </option>
        <option value="dark">
          Dark Mode
        </option>
        <option value="light">
          Light Mode
        </option>
        <option value="sepia">
          Sepia
        </option>
      </select>
    </scrollactive>
  </div>
</template>
<script>
import LanguageSwitcher from './LanguageSwitcher.vue'

export default {
  name: 'NavItems',
  components: { LanguageSwitcher }
}
</script>
