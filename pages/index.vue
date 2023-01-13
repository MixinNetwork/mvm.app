<template>
  <div
    class="relative w-full min-w-[320px] overflow-x-hidden"
  >
    <Header></Header>
    <IntroSection :eth="tvl" />
    <ContractSection />
    <AssetsSection />
    <NftSection />
    <AuditSection />
    <DocSection />
    <CommunitySection />
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import IntroSection from "@/components/IntroSection.vue";
import ContractSection from "~/components/ContractSection.vue";
import AssetsSection from "~/components/AssetsSection.vue";
import NftSection from "~/components/NftSection.vue";
import AuditSection from "~/components/AuditSection.vue";
import DocSection from "~/components/DocSection.vue";
import CommunitySection from "~/components/CommunitySection.vue";
import { getEthValue } from "~/helpers/api";

export default Vue.extend({
  name: "Index",
  components: { 
    Header, 
    IntroSection, 
    ContractSection, 
    AssetsSection, 
    NftSection, 
    AuditSection, 
    DocSection, 
    CommunitySection, 
    Footer 
  },
  async asyncData() {
    const tvl = await getEthValue();
    return {
      tvl,
    };
  },
});
</script>
