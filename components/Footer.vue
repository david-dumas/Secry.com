<template>
  <footer class="flex flex-col gap-3 text-center py-16 border-t mx-4">
    <div
      class="
          flex flex-col
          text-center
          justify-center
          items-center
          mx-auto
          gap-2
        "
    >
      <h1 class="text-xl text-primary">
        {{ $t('footer.title') }}
      </h1>
      <div class="text-black md:block">
        {{ $t('footer.descriptionPart1') }}{{ new Date().getFullYear() }}{{ $t('footer.descriptionPart2') }}
      </div>
      <div class="flex flex-row items-center gap-1 text-black">
        <NuxtLink to="/terms_and_conditions">
          {{ $t('links.terms_and_conditions') }}
        </NuxtLink>
        <p>|</p>
        <NuxtLink to="/privacy_statement">
          {{ $t('links.privacy_statement') }}
        </NuxtLink>
        <p>|</p>
        <NuxtLink to="/cookie_statement">
          {{ $t('links.cookie_statement') }}
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterLandingPage'
}
</script>

<style>
</style>
