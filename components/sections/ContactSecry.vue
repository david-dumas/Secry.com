<template>
  <section id="contact" class="grid grid-cols-1 gap-16 md:grid-cols-2 pt-0">
    <div class="flex flex-col items-center md:items-start gap-4 md:gap-8">
      <h2 class="text-primary">
        {{ $t('contact.title' ) }}
      </h2>
      <div class="flex flex-row gap-6 items-center">
        <font-awesome-icon :icon="['fas', 'location-dot']" class="text-2xl text-primary" />
        <p>{{ $t('contact.location') }}</p>
      </div>
      <div class="flex flex-row gap-6 items-center">
        <font-awesome-icon :icon="['fas', 'phone']" class="text-2xl text-primary" />
        <p>+31 6 29 003 149</p>
      </div>
      <div class="flex flex-row gap-6 items-center">
        <font-awesome-icon :icon="['fas', 'envelope']" class="text-2xl text-primary" />
        <p>service@secry.com</p>
      </div>
    </div>
    <div class="flex items-center flex-col gap-4 md:gap-6">
      <h2 class="text-primary hidden md:flex">
        {{ $t('contact.secryOnSocialMedia') }}
      </h2>
      <SocialMediaIcons class="hidden md:flex" />
      <p class="text-primary font-bold hidden md:flex">
        Secry @ 2022
      </p>
      <div class="flex flex-col md:flex-row items-center justify-center w-1/4 gap-8">
        <nuxt-img src="/images/appstore.png" />
        <nuxt-img src="/images/googleplay.png" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSecry'
}
</script>
