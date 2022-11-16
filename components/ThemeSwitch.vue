<template>
  <div>
    <button
      v-if="$colorMode.value === 'light'"
      @click="$colorMode.value = 'dark'"
    >
      <img src="~/assets/icons/moon.svg">
    </button>
    <button
      v-if="$colorMode.value === 'dark'"
      @click="$colorMode.value = 'light'"
    >
      <img src="~/assets/icons/sun.svg">
    </button>
  </div>
</template>

<script>

export default {
  name: 'ThemeSwitch'
}
</script>

  <style scoped>

  </style>
