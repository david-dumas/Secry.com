<template>
  <main>
    <header>
      <NavigationBar />
    </header>
    <div :style="mainSectionStyle">
      <Nuxt />
    </div>
  </main>
</template>

<script>
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
  }
}
</script>
