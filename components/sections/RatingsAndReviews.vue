<template>
  <section :id="$t('navigation.ratingsAndReviews')" class="bg-white pt-0">
    <div>
      <div>
        <h2 class="text-primary text-center md:text-left">
          {{ $t('navigation.ratingsAndReviews') }}
        </h2>
      </div>
      <div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-start mt-8">
          <div class="flex flex-col gap-2 justify-center items-center">
            <div class="flex h-12 w-12 rounded-md bg-indigo-500 text-white">
              <nuxt-img :alt="$t('alt_text.review_from_user_image')" src="/images/en/Aron.png" />
            </div>
            <p class="text-2xl">
              Aron
            </p>
            <p class="text-center">
              {{ $t('ratingsAndReviews.ratingOne') }}
            </p>
          </div>
          <div class="flex flex-col gap-2 justify-center items-center">
            <div class="flex h-12 w-12 rounded-md bg-indigo-500 text-white">
              <nuxt-img :alt="$t('alt_text.review_from_user_image')" src="/images/en/Emma.png" />
            </div>
            <p class="text-2xl">
              Emma
            </p>
            <p class="text-center">
              {{ $t('ratingsAndReviews.ratingTwo') }}
            </p>
          </div>
          <div class="flex flex-col gap-2 justify-center items-center">
            <div class="flex h-12 w-12 rounded-md bg-indigo-500 text-white">
              <nuxt-img :alt="$t('alt_text.review_from_user_image')" src="/images/en/Carlos.png" />
            </div>
            <p class="text-2xl">
              Carlos
            </p>
            <p class="text-center">
              {{ $t('ratingsAndReviews.ratingThree') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RatingsAndReviews'
}
</script>

<style>
</style>
