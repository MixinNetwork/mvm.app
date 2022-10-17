/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '720px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        primary: '#5959D8',
      },
      boxShadow: {
        mvm: '0px 8px 40px rgba(18, 43, 91, 0.08)'
      }
    }
  }
}
