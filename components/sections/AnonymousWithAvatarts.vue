<template>
  <section class="pt-0 text-center md:text-left">
    <div class="flex flex-col gap-8">
      <div class="lg:text-left flex flex-col gap-4">
        <h2 class="text-primary">
          {{ $t('anonymousWithAvatars.title') }}
        </h2>
        <p class="max-w-2xl">
          {{ $t('anonymousWithAvatars.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex flex-col gap-4 items-center md:items-start">
          <div class="w-12 h-12">
            <nuxt-img src="/images/en/Multiavatar-Ethereum1.png" />
          </div>
          <div class="gap-2">
            <p class="text-lg font-medium">
              {{ $t('anonymousWithAvatars.avatarOne.title') }}
            </p>
            <p class="text-primary italic">
              {{ $t('anonymousWithAvatars.avatarOne.description') }}
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-4 items-center md:items-start">
          <div class="w-12 h-12">
            <nuxt-img src="/images/en/Multiavatar-Huxley1.png" />
          </div>
          <div class="gap-2">
            <p class="text-lg font-medium">
              {{ $t('anonymousWithAvatars.avatarTwo.title') }}
            </p>
            <p class="text-primary italic">
              {{ $t('anonymousWithAvatars.avatarTwo.description') }}
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-4 items-center md:items-start">
          <div class="w-12 h-12">
            <nuxt-img src="/images/en/Multiavatar-Shichiroji-Karatoza1.png" />
          </div>
          <div class="gap-2">
            <p class="text-lg font-medium">
              {{ $t('anonymousWithAvatars.avatarThree.title') }}
            </p>
            <p class="text-primary italic">
              {{ $t('anonymousWithAvatars.avatarThree.description') }}
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-4 items-center md:items-start">
          <div class="w-12 h-12">
            <nuxt-img src="/images/en/avatar-purple.png" />
          </div>
          <div class="gap-2">
            <p class="text-lg font-medium">
              {{ $t('anonymousWithAvatars.avatarFour.title') }}
            </p>
            <p class="text-primary italic">
              {{ $t('anonymousWithAvatars.avatarFour.description') }}
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
