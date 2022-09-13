<template>
  <div>
    <nuxt-link
      :to="switchLocalePath('nl')"
    >
      Nederlands
    </nuxt-link>
    Piet
    <nuxt-link
      :to="switchLocalePath('en')"
    >
      Engels
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',

  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
