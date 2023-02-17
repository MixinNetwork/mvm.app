<template>
  <div :class="boxStyle">
    <div :class="innerBoxStyle">
      <img v-if="!!icon" :class="icon.style" :src="icon.src" alt=""/>
      
      <div v-if="!!title" :class="title.style">{{ title.text }}</div>

      <div v-if="!!content" :class="content.style">{{ content.text }}</div>
    </div>

    <div v-if="!!link" class="flex flex-row items-center">
      <a v-if="!!link.href" :href="link.href" class="flex flex-row items-center w-full cursor-pointer">
        <div :class="link.style">{{ link.text }}</div>
        <img v-if="!!link.icon" :class="link.iconStyle" :src="link.icon" :alt="link.iconAlt" />
      </a>
      <template v-else>
        <div :class="link.style">{{ link.text }}</div>
        <img v-if="!!link.icon" :class="link.iconStyle" :src="link.icon" :alt="link.iconAlt" />
      </template>
    </div>
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
