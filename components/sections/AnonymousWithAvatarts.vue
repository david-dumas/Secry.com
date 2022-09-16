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
        Anonymous with avatars
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500">
            Behind every user is a randomly generated avatar. This could be your friend or classmate. Avatars will regularly be regenerated and differ for each user. This keeps your anonimity as safe as possible.
        </p>
      </div>

      <div class="mt-10">
        <dl
          class="
            space-y-10
            md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0
          "
        >
          <div class="relative">
            <dt>
              <div
                class="
                  absolute
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-md
                  bg-indigo-500
                  text-white
                "
              >
              <nuxt-img src="/images/en/Multiavatar-Ethereum1.png" />
              </div>
              <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
                12th grade high school class with 30 kids
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-primary italic">
                “Who thinks a belly button piercing is beautiful?”
            </dd>
          </div>

          <div class="relative">
            <dt>
              <div
                class="
                  absolute
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-md
                  bg-indigo-500
                  text-white
                "
              >
              <nuxt-img src="/images/en/Multiavatar-Huxley1.png" />
              </div>
              <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
                7th grade high school class
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-primary italic">
                “Who likes Justin Bieber as well?”
            </dd>
          </div>

          <div class="relative">
            <dt>
              <div
                class="
                  absolute
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-md
                  bg-indigo-500
                  text-white
                "
              >
                <!-- Heroicon name: outline/bolt -->
                <nuxt-img src="/images/en/Multiavatar-Shichiroji-Karatoza1.png" />
              </div>
              <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
                Large student house
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-primary italic">
                “Who thinks the kitchen is way too messy?”
            </dd>
          </div>

          <div class="relative">
            <dt>
              <div
                class="
                  absolute
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-md
                  bg-indigo-500
                  text-white
                "
              >
                <nuxt-img src="/images/en/Multiavatar-Ebenezer-Dimmsdale1.png" />
              </div>
              <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
                Middle size company
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-primary italic">
                “Who thinks we spend too much time on daily stand-ups?”
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnonymousWithAvatars'
}
</script>

<style>
</style>
