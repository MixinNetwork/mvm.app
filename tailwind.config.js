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
      lg: "1350px",
    },
    extend: {
      colors: {
        primary: "#5959D8",
        hover: "#DADDFF",
        footer: "#F7F8F9",
      },
      boxShadow: {
        mvm: "0px 8px 40px rgba(18, 43, 91, 0.08)",
        selection: "0px 2px 20px rgba(0, 0, 74, 0.1)",
        audit: "0px 4px 40px rgba(89, 89, 216, 0.06), inset 0px 4px 20px rgba(255, 255, 255, 0.63);"
      },
    },
  },
};
