<template>
  <section class="pt-0">
    <div class="flex flex-col gap-8">
      <div class="lg:text-left flex flex-col gap-4">
        <h2 class="text-primary">
          Anonymous with avatars
        </h2>
        <p class="max-w-2xl">
          Behind every user is a randomly generated avatar. This could be your friend or classmate. Avatars will regularly be regenerated and differ for each user. This keeps your anonimity as safe as possible.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex flex-col gap-4">
          <div class="w-12 h-12">
            <nuxt-img src="/images/en/Multiavatar-Ethereum1.png" />
          </div>
          <div class="gap-2">
            <p class="text-lg font-medium">
              7th grade high school class
            </p>
            <p class="text-primary italic">
              “Who likes Justin Bieber as well?”
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="w-12 h-12">
            <nuxt-img src="/images/en/Multiavatar-Huxley1.png" />
          </div>
          <div class="gap-2">
            <p class="text-lg font-medium">
              7th grade high school class
            </p>
            <p class="text-primary italic">
              “Who likes Justin Bieber as well?”
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="w-12 h-12">
            <nuxt-img src="/images/en/Multiavatar-Shichiroji-Karatoza1.png" />
          </div>
          <div class="gap-2">
            <p class="text-lg font-medium">
              Large student house
            </p>
            <p class="text-primary italic">
              “Who thinks the kitchen is way too messy?”
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="w-12 h-12">
            <nuxt-img src="/images/en/avatar-purple.png" />
          </div>
          <div class="gap-2">
            <p class="text-lg font-medium">
              Middle size company
            </p>
            <p class="text-primary italic">
              “Who thinks we spend too much time on daily stand-ups?”
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AnonymousWithAvatars'
}
</script>

<style>
</style>
