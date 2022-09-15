<template>
  <div>
    <div class="flex-grow border-t border-gray-400" />
    <footer class="flex flex-col gap-3 text-center py-8">
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
          {{ $t('footer.description') }}
        </div>
        <div class="flex flex-row items-center gap-1 text-black">
          <a href="#" class="text-primary">{{ $t('footer.terms') }}</a>
          <p>|</p>
          <a href="#" class="text-primary">{{ $t('footer.privacy') }}</a>
          <p>|</p>
          <a href="#" class="text-primary">{{ $t('footer.cookies') }}</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterLandingPage'
}
</script>

<style>
</style>
