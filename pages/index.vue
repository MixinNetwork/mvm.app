<template>
  <div
    class="relative w-full min-w-[350px] overflow-x-hidden"
  >
    <Header></Header>
    <IntroSection :init-tvl="tvl" />
    <ContractSection />
    <AssetsSection />
    <NftSection />
    <EcosystemSection />
    <AuditSection />  
    <DocSection />
    <CommunitySection />
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { NetworkAssetResponse } from "@mixin.dev/mixin-node-sdk";
import { FixedNumber } from "ethers";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import IntroSection from "~/components/IntroSection.vue";
import ContractSection from "~/components/ContractSection.vue";
import AssetsSection from "~/components/AssetsSection.vue";
import NftSection from "~/components/NftSection.vue";
import EcosystemSection from "~/components/EcosystemSection.vue";
import AuditSection from "~/components/AuditSection.vue";
import DocSection from "~/components/DocSection.vue";
import CommunitySection from "~/components/CommunitySection.vue";
import { ETH_ASSET_ID } from "~/helpers/constant/common";

export default Vue.extend({
  name: "Index",
  components: { 
    Header, 
    IntroSection, 
    ContractSection, 
    AssetsSection, 
    NftSection, 
    EcosystemSection,
    AuditSection, 
    DocSection, 
    CommunitySection, 
    Footer 
  },
  async asyncData({ $axios }) {
    let tvl = '';
    try {
      const ETH: {
        data: NetworkAssetResponse
      } = await $axios.$get(`https://api.mixin.one/network/assets/${ETH_ASSET_ID}`);
      tvl = FixedNumber.from('200').mulUnsafe(FixedNumber.from(ETH.data.price_usd)).toString();
    } catch(e) {
      tvl = '200000';
    }
    return { tvl };
  },
});
</script>
