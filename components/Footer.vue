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
          The best anonymous social media app
        </h1>
        <div class="text-black md:block">
          Copyright &copy; 2022 Secry - All Rights Reserved
        </div>
        <div class="flex flex-row items-center gap-1 text-black">
          <a href="#" class="text-primary">Terms and Conditions</a>
          <p>|</p>
          <a href="#" class="text-primary">Privacy</a>
          <p>|</p>
          <a href="#" class="text-primary">Cookies    </a>
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
