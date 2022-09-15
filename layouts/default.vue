<template>
  <main>
    <header>
      <NavigationBar />
    </header>
    <div :style="mainSectionStyle" class="px-4 max-w-7xl mx-auto">
      <Nuxt />
    </div>
    <AnonymousWithAvatarts />
    <Footer />
  </main>
</template>

<script>
import AnonymousWithAvatarts from '~/components/AnonymousWithAvatarts.vue'
export default {
  name: 'Default',
  data () {
    return {
      offsetHeight: 96
    }
  },
  computed: {
    mainSectionStyle () {
      return {
        'padding-top': `${this.offsetHeight}px`
      }
    }
  },
  beforeMount () {
    const navBar = document.getElementById('nav')
    this.offsetHeight = navBar.offsetHeight
  },
  components: { AnonymousWithAvatarts }
}
</script>
