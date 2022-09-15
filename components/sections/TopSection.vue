<template>
  <section id="home" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center gap-8 lg:gap-32 py-0">
    <div class="flex flex-col gap-8 col-span-1 md:col-span-2 lg:col-span-3">
      <h1>{{ $t('topSection.title') }}</h1>
      <p>{{ $t('topSection.description') }}</p>
      <div class="flex flex-row w-1/3 md:w-full gap-8">
        <nuxt-img src="/images/appstore.png" />
        <nuxt-img src="/images/googleplay.png" />
      </div>
    </div>
    <div class="lg:px-16 col-span-1 lg:col-span-2 flex items-center justify-center">
      <nuxt-img
        :src="`/images/${getLocale}/groupchat.png`"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'TopSection'
}
</script>
