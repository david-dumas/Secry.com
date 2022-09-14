<template>
  <!--
        Wat is nodig?
        Tekst -> The best anonymous social media app
        copyright statement met current year
        3 linkjes naar algemene voorwaarden, privacy statement en cookies stmnt
    -->
  <div>
    <footer class="bg-white flex flex-col">
      <!-- Flex Container -->
      <div
        class="
          flex flex-col
          text-center
          justify-between
          mx-auto
        "
      >
        <h1 class="text-2xl text-lightBlue">The best anonymous social media app</h1>
        <div class="hidden text-black md:block">
          Copyright &copy; 2022 Secry - All Rights Reserved
        </div>
        <!-- List Container -->
          <div class="flex flex-row justify-spacespace-y-3 text-black">
            <a href="#" class="text-lightBlue">Terms and Conditions  |  </a>
            <a href="#" class="text-lightBlue">Privacy Statement   |  </a>
            <a href="#" class="text-lightBlue">Cookies Statement    </a>
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
