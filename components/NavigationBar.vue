<template>
  <nav id="nav" class="fixed left-0 right-0 transition duration-200">
    <div class="py-8 px-4 max-w-7xl mx-auto flex justify-between flex-row items-center">
      <!--TODO: insert real picture of our logo-->
      <div class="flex lg:hidden">
        <font-awesome-icon :icon="['fas', 'bars']" class="text-2xl cursor-pointer" @click="toggleNav" />
      </div>
      <button class="w-10" @click="navigateToTop">
        <img src="/images/en/logo.png">
      </button>
      <!-- <div>
        <nuxt-img src="/images/en/logo.png" height="35" />
      </div> -->
      <div class="flex flex-row items-center gap-12">
        <NavItems class="hidden lg:flex" />
        <div class="flex flex-row justify-center items-center">
          <LanguageSwitch />
        </div>
        <!--TODO: link to correct social media pages-->
        <SocialMediaIcons class="hidden lg:flex" />
      </div>
    </div>
    <transition name="show">
      <div v-if="showMenu" :class="`slidein w-full transition-all duration-500 flex flex-col gap-8 ${showMenu ? 'left-0' : '-left-full'}`">
        <div class="flex flex-row justify-between items-center">
          <div>
            <nuxt-img src="/images/en/logo.png" height="25" />
          </div>
          <font-awesome-icon :icon="['fas', 'x']" class="cursor-pointer text-2xl" @click="toggleNav" />
        </div>
        <div @click="toggleNav">
          <NavItems />
        </div>
        <SocialMediaIcons />
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
    return {
      showMenu: false
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    // scroll handling
    handleScroll () {
      const navBar = document.getElementById('nav')
      if (window.scrollY > 60) {
        navBar.classList.add('shadow-sm')
      } else {
        navBar.classList.remove('shadow-sm')
      }
    },
    toggleNav () {
      this.showMenu = !this.showMenu
    },
    navigateToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style>
.show-enter-active,
.show-leave-enter {
  transform: translateX(0%);
  transition: all .3s linear;
}
.show-enter,
.show-leave-to {
  transform: translateX(-100%);
}
</style>
