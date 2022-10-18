<template>
  <div class="feature-box">
    <div class="font-bold text-xl lg:text-3xl">{{ title }}</div>
    <div class="mt-2 lg:mt-3.5 text-sm lg:text-lg opacity-60">{{ content }}</div>
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