<template>
  <div
    class="flex flex-col mt-11 sm:m-0 sm:h-full"
  >
    <div
      class="mb-3 font-semibold text-black/90 sm:text-lg md:text-xl lg:text-2xl"
    >{{ title }}</div>

    <div
      v-for="{text, link} in links" 
      :key="text"
      class="mt-[20px] font-normal text-black/60 sm:text-sm md:text-md lg:text-lg"
    >
      <a :href="link">{{ text }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinkContainer",
  props: ["title", "links"]
}
</script>