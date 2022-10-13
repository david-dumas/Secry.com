<template>
  <section id="home" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center gap-8 lg:gap-32 pt-0">
    <div class="flex flex-col gap-8 col-span-1 md:col-span-2 lg:col-span-3">
      <h1>{{ $t('topSection.title') }}</h1>
      <p>{{ $t('topSection.description') }}</p>
      <div class="flex flex-row w-1/3 md:w-full gap-8">
        <button @click="navigateToAppStore">
          <img :alt="$t('alt_text.link_to_app_store_image')" src="/images/appstore.png">
        </button>
        <button @click="navigateToAppStore">
          <img :alt="$t('alt_text.link_to_play_store_image')" src="/images/googleplay.png">
        </button>
      </div>
    </div>
    <div class="lg:px-16 col-span-1 lg:col-span-2 flex items-center justify-center">
      <nuxt-img
        :alt="$t('alt_text.group_chat_image')"
        :src="`/images/${getLocale}/groupchat.png`"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'TopSection',
  methods: {
    navigateToAppStore () {
      //  TODO, navigate to appstore
      print('asdf')
    },
    navigateToPlayStore () {
      //  TODO, navigate to playstore
      print('asdf')
    }
  }
}
</script>
