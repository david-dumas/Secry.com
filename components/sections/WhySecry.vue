<template>
  <section :id="$t('links.why_us')" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pt-0 gap-16 items-center">
    <div class="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col gap-8 items-center md:items-start text-center md:text-left">
      <h2 class="text-primary">
        {{ $t('howItWorks.title') }}
      </h2>
      <div class="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
        <font-awesome-icon :icon="['fas', 'heart']" class="text-primary text-2xl" />
        <p>
          {{ $t('howItWorks.heartOne') }}
        </p>
      </div>
      <div class="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
        <font-awesome-icon :icon="['fas', 'heart']" class="text-primary text-2xl" />
        <p>
          {{ $t('howItWorks.heartTwo') }}
        </p>
      </div>
      <div class="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
        <font-awesome-icon :icon="['fas', 'heart']" class="text-primary text-2xl" />
        <p>
          {{ $t('howItWorks.heartThree') }}
        </p>
      </div>
      <div class="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
        <font-awesome-icon :icon="['fas', 'heart']" class="text-primary text-2xl" />
        <p>
          {{ $t('howItWorks.heartFour') }}
        </p>
      </div>
    </div>
    <div class="col-span-1 md:col-span-1 flex items-center justify-center">
      <nuxt-img
        format="webp"
        :alt="$t('alt_text.add_survey_image')"
        :src="`/images/${getLocale}/addsurvey.png`"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhySecry'
}
</script>
