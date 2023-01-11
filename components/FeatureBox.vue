<template>
  <div :class="boxStyle">
    <div :class="innerBoxStyle">
      <object v-if="!!icon" :class="icon.style" :data="icon.src"></object>
      
      <div v-if="!!title" :class="title.style">{{ title.text }}</div>

      <div v-if="!!content" :class="content.style">{{ content.text }}</div>
    </div>

    <div v-if="!!link" :class="link.style">{{ link.text }}</div>
  </div>
</template>

<script>
export default {
  name: "FeatureBox",
  props: {
    boxStyle: [Array, String],
    innerBoxStyle: String,
    icon: Object,
    title: Object,
    content: Object,
    link: Object,
  }
};
</script>

<style scoped>
</style>
