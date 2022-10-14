<template>
  <section :id="$t('links.howItWorks')" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16 items-center pt-0">
    <div class="col-span-1 md:col-span-1 flex justify-center items-center order-2 md:order-1">
      <nuxt-img
        format="webp"
        :alt="$t('alt_text.add_group_image')"
        :src="`/images/${getLocale}/addgroup.png`"
      />
    </div>
    <div class="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col gap-4 order-1 md:order-2 text-center md:text-left">
      <h2 class="text-primary md:text-black">
        {{ $t('whySecry.title') }}
      </h2>
      <p>{{ $t('whySecry.description') }}</p>
      <p class="text-primary italic font-bold">
        {{ $t('whySecry.tagline') }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowItWorks'
}
</script>
