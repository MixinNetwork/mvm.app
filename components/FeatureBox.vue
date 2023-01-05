<template>
  <div 
    class="flex flex-[0_0_48%] flex-col justify-center items-center mb-3 py-2.5 bg-white shadow-mvm rounded-xl box-border text-center sm:mb-0 sm:flex-[0_0_23%] sm:py-3 md:py-4 lg:py-[30px]"
  >
    <div class="font-bold sm:text-lg md:text-[22px] lg:text-3xl">
      {{ title }}
    </div>
    <div
      class="mt-1 text-sm opacity-60 sm:mt-1.5 md:text-base md:mt-3 lg:mt-3.5 lg:text-lg"
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
