<template>
  <div class="bg-white py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="lg:text-left">
        <p
          class="
            mt-2
            text-3xl
            font-bold
            leading-8
            tracking-tight
            text-gray-900
            sm:text-4xl
          "
        >
          Ratings & reviews
        </p>
      </div>
      <div class="mt-10">
        <div
          class="
            space-y-10
            md:grid md:grid-cols-3
            justify-center
            align-center
          "
        >
          <div class="flex flex-col justify-center items-center">
            <div class="flex h-12 w-12 rounded-md bg-indigo-500 text-white">
              <nuxt-img src="/images/en/Aron.png" />
            </div>
            <p class="text-2xl">Aron</p>
            <p class="ml-16 text-lg font-medium leading-6 text-gray-900 text-center">
              This seems like a fantastic way to be more aware of each other's
              concerns and thus create more connection. I definitely see this as
              a platform with a lot of potential.
            </p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <div class="flex h-12 w-12 rounded-md bg-indigo-500 text-white">
              <nuxt-img src="/images/en/Emma.png" />
            </div>
            <p class="text-2xl">Emma</p>
            <p class="ml-16 text-lg font-medium leading-6 text-gray-900 text-center">
              The most criticism that social media is getting now is that it is
              "fake" and that many users become insecure when seeing/reading
              certain posts. Secry, on the other hand, will really be the
              opposite; the idea is precisely to be very "real".
            </p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <div class="flex h-12 w-12 rounded-md bg-indigo-500 text-white">
              <nuxt-img src="/images/en/Carlos.png" />
            </div>
            <p class="text-2xl">Carlos</p>
            <p class="ml-16 text-lg font-medium leading-6 text-gray-900 text-center">
              The first thing that came to mind was: Yes! That's a super good
              idea. It is precisely the anonymity that often causes problems,
              because it only goes one way. Here it goes both ways.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RatingsAndReviews'
}
</script>

<style>
</style>
