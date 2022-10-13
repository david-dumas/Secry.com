<template>
  <div class="flex items-center justify-center">
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :alt="$t('alt_text.language_switch_link')"
      class="-mt-1"
      :to="switchLocalePath(locale.code)"
    >
      <country-flag :country="locale.country" />
    </nuxt-link>
  </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'

export default {
  name: 'LanguageSwitch',
  components: {
    CountryFlag
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
