/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './components/**/*.{js,vue,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ],
    theme: {
      extend: {},
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        lightBlue: '#0584FE'
      }
    },
    plugins: []
  }
  