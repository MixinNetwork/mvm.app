<template>
  <div
    class="flex flex-col mt-11 sm:m-0 sm:h-full"
  >
    <div
      class="mb-[14px] font-bold text-xl leading-[30px] text-black/90 sm:mb-2 sm:text-lg sm:leading-9 md:text-xl lg:text-2xl"
    >{{ title }}</div>

    <div
      v-for="{text, link} in links" 
      :key="text"
      class="mt-5 sm:mt-6"
    >
      <router-link
        v-if="link.startsWith('/')"
        class="font-normal text-base leading-[26px] text-black/60 sm:text-sm md:text-base lg:text-lg" 
        :to="link"
      >
        {{ text }}
      </router-link>
      <a
        v-else
        class="font-normal text-base leading-[26px] text-black/60 sm:text-sm md:text-base lg:text-lg" 
        :href="link"
      >
        {{ text }}
    </a>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: "LinkContainer",
  comments: { RouterLink },
  props: ["title", "links"]
}
</script>