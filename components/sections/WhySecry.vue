<template>
  <section id="why-us" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pt-0 md:pt-16 gap-16 items-center">
    <div class="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col gap-8">
      <h2 class="text-primary">
        Why Secry
      </h2>
      <div class="flex flex-row gap-8 items-center">
        <font-awesome-icon :icon="['fas', 'heart']" class="text-primary text-2xl" />
        <p>
          Deeper connections with people from real life, people from school or work you already know.
        </p>
      </div>
      <div class="flex flex-row gap-8 items-center">
        <font-awesome-icon :icon="['fas', 'heart']" class="text-primary text-2xl" />
        <p>
          Zero shame, zero judgement. Because Secry is anonymous, people can say what they really think.
        </p>
      </div>
      <div class="flex flex-row gap-8 items-center">
        <font-awesome-icon :icon="['fas', 'heart']" class="text-primary text-2xl" />
        <p>
          Unlike the ‘perfect’ social media world, where images are edited, only the best image is chosen and where everyone seems to live a ‘perfect’ life. Secry is about the real world, where people get to know the real person behind the edited images and so-called ‘perfect’ lifes.
        </p>
      </div>
      <div class="flex flex-row gap-8 items-center">
        <font-awesome-icon :icon="['fas', 'heart']" class="text-primary text-2xl" />
        <p>
          Awareness, understanding and deeper connections.
        </p>
      </div>
    </div>
    <div class="col-span-1 md:col-span-1">
      <nuxt-img
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
