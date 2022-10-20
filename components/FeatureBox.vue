<template>
  <div class="feature-box">
    <div class="font-bold text-xl sm:text-lg md:text-[22px] lg:text-3xl">
      {{ title }}
    </div>
    <div
      class="mt-2 text-sm opacity-60 sm:mt-1.5 md:text-base md:mt-3 lg:mt-3.5 lg:text-lg"
    >
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureBox",
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped></style>
