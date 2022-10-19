module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
  ],
  plugins: ["vue", "prettier", "@typescript-eslint"],
  rules: {
    semi: ["error", "always"],
    camelcase: "off",
    "vue/multi-word-component-names": "off",
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
};
