<template>
  <div class="relative">
    <button
      v-for="locale in availableLocales"
      :key="locale.code"
      href="#"
      class="flex items-center"
      @click="toggleVisibility"
      @keydown.space.exact.prevent="toggleVisibility"
      @keydown.esc.exact="hideDropdown"
      @keydown.shift.tab="hideDropdown"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      <!-- <country-flag :country="locale.country" /> -->
      <span class="ml-2">{{ $i18n.locale.toUpperCase() }}</span>

      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          class="heroicon-ui"
          d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
        />
      </svg>
    </button>
    <transition name="dropdown-fade">
      <ul
        v-if="isVisible"
        ref="dropdown"
        v-on-clickaway="hideDropdown"
        class="
          absolute
          normal-case
          z-30
          font-normal
          xs:left-0
          lg:right-0
          bg-white
          shadow
          overflow-hidden
          rounded
          w-48
          border
          mt-2
          py-1
          lg:z-20
        "
      >
        <li>
          <nuxt-link
            v-for="locale in availableLocales"
            :key="locale.code"
            :alt="$t('alt_text.language_switch_link')"
            class="-mt-1"
            :to="switchLocalePath(locale.code)"
          >
            <country-flag country="us" size="normal" />
            <span class="ml-2">{{ $t("language.english") }}</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            v-for="locale in availableLocales"
            :key="locale.code"
            :alt="$t('alt_text.language_switch_link')"
            class="-mt-1"
            :to="switchLocalePath(locale.code)"
          >
            <country-flag country="nl" size="normal" />
            <span class="ml-2">{{ $t("language.dutch") }}</span>
          </nuxt-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import CountryFlag from 'vue-country-flag'

export default {
  name: 'LanguageSwitcher',
  components: {
    CountryFlag
  },
  mixins: [clickaway],
  data () {
    return {
      isVisible: false,
      focusedIndex: 0
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    toggleVisibility () {
      this.isVisible = !this.isVisible
    },
    hideDropdown () {
      this.isVisible = false
      this.focusedIndex = 0
    },
    startArrowKeys () {
      if (this.isVisible) {
        // this.$refs.account.focus()
        this.$refs.dropdown.children[0].children[0].focus()
      }
    },
    focusPrevious (isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusNext (isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusItem () {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus()
    },
    setLocale (locale) {
      this.$i18n.locale = locale
      this.$router.push({
        params: { lang: locale }
      })
      this.hideDropdown()
    }
  }
}
</script>

<style scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-in-out;
}

.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
