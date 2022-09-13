<template>
  <div>
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      <div>
        <country-flag :country="locale.country" />
      </div>
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
