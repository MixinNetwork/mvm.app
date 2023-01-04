<template>
  <div
    class="relative w-full min-w-[320px] h-screen background overflow-x-hidden"
  >
    <Header />
    <IntroSection :eth="tvl" />

    <footer class="w-full h-5"></footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header.vue";
import IntroSection from "@/components/IntroSection.vue";
import { getEthValue } from "~/helpers/api";

export default Vue.extend({
  name: "Index",
  components: { Header, IntroSection, },
  async asyncData() {
    const tvl = await getEthValue();
    return {
      tvl,
    };
  },
});
</script>
