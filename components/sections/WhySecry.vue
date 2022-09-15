<template>
  <section id="how-it-works" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16 items-center">
    <div class="col-span-1 md:col-span-1 flex justify-center items-center order-2 md:order-1">
      <nuxt-img
        :src="`/images/${getLocale}/addgroup.png`"
      />
    </div>
    <div class="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col gap-4 order-1 md:order-2">
      <h2 class="text-primary md:text-black">
        Discover Secry
      </h2>
      <p>Anonymously ask people you know what they think. Create a group with classmates, colleagues or friends. You’ll know exactly who is in a group, but when chatting or sending a survey you won’t know who sent a message or survey response. Zero shame, more awareness, and deeper connections.</p>
      <p class="text-primary italic font-bold">
        “Discover people’s deepest thoughts and feelings”
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhySecry'
}
</script>
