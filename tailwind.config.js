/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
    `./nuxt.config.{js,ts}`,
  ],
  theme: {
    screens: {
      sm: "720px",
      md: "960px",
      lg: "1280px",
    },
    extend: {
      colors: {
        primary: "#5959D8",
        hover: "#DADDFF",
      },
      boxShadow: {
        mvm: "0px 8px 40px rgba(18, 43, 91, 0.08)",
      },
    },
  },
};
