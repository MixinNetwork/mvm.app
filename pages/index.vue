<template>
  <div
    class="relative w-full min-w-[320px] background overflow-x-hidden"
  >
    <Header></Header>
    <IntroSection :eth="tvl" />
    <EcosystemSection />
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import IntroSection from "@/components/IntroSection.vue";
import EcosystemSection from "~/components/EcosystemSection.vue";
import { getEthValue } from "~/helpers/api";

export default Vue.extend({
  name: "Index",
  components: { Header, IntroSection, EcosystemSection, Footer },
  async asyncData() {
    const tvl = await getEthValue();
    return {
      tvl,
    };
  },
});
</script>
