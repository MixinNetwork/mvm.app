<template>
  <div class="flex flex-col justify-center items-center w-4/5 h-20 lg:w-72 lg:h-36 bg-white shadow-mvm rounded-xl">
    <div class="font-bold text-3xl">{{ title }}</div>
    <div class="mt-3.5 text-lg opacity-60">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: "FeatureBox",
  props: ['title', 'content']
}
</script>

<style scoped>
</style>