<template>
  <nav id="nav" class="fixed left-0 right-0 transition duration-200">
    <div class="py-8 px-4 max-w-7xl mx-auto flex justify-between flex-row items-center">
      <!--TODO: insert real picture of our logo-->
      <div>
        Logo
      </div>
      <div class="flex flex-row items-center gap-12">
        <div class="flex flex-row gap-6 items-center">
          <nuxt-link to="#" class="hover-primary">
            {{ $t('navigation.home') }}
          </nuxt-link>
          <nuxt-link to="#how-it-works" class="hover-primary">
            {{ $t('navigation.howItWorks') }}
          </nuxt-link>
          <nuxt-link to="#why-us" class="hover-primary">
            {{ $t('navigation.why_us') }}
          </nuxt-link>
          <nuxt-link to="#rating-and-reviews" class="hover-primary">
            {{ $t('navigation.ratingsAndReviews') }}
          </nuxt-link>
          <nuxt-link to="#contact" class="hover-primary">
            {{ $t('navigation.contact') }}
          </nuxt-link>
        </div>
        <div class="flex flex-row justify-center items-center">
          <LanguageSwitch />
        </div>
        <!--TODO: link to correct social media pages-->
        <div class="text-2xl items-center flex flex-row gap-4">
          <font-awesome-icon :icon="['fab', 'facebook']" class="hover-primary" />
          <font-awesome-icon :icon="['fab', 'instagram']" class="hover-primary" />
          <font-awesome-icon :icon="['fab', 'youtube']" class="hover-primary" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  // scroll handling
  methods: {
    handleScroll () {
      const navBar = document.getElementById('nav')
      if (window.scrollY > 60) {
        navBar.classList.add('shadow-sm')
      } else {
        navBar.classList.remove('shadow-sm')
      }
    }
  }
}
</script>
