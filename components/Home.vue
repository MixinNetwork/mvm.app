<template>
  <div class="w-full h-screen flex flex-col items-center background">
    <!-- header -->
    <div class="w-full h-6 my-7 px-6
      sm:w-[1280px] sm:h-[100px] flex justify-between items-center">
      <div class="flex row items-center h-full">
        <img class="h-full" :src="logo" alt="mvm-logo" />
        <div class="ml-2 font-extrabold text-xs opacity-80">MVM</div>
      </div>

      <div class="hidden sm:show flex row items-center">
        <div class="font-bold text-lg opacity-80"><a class="text-black" href="/">Explore</a></div>
        <div class="ml-14 text-lg opacity-80"><a class="text-black" href="https://bridge.mvm.app">Bridge</a></div>
        <div class="ml-14 text-lg opacity-80"><a class="text-black" href="https://developers.mixin.one">Developers</a></div>
      </div>

      <img class="h-6" :src="menuIcon"  alt="menu" />
    </div>

    <div class="relative w-full px-6 lg:w-[1280px] lg:h-[643px]">
      <img class="h-[270px]" :src="background" alt="background-image" />

      <!-- title -->
      <div class="w-[375px] font-bold text-[34px] lg:text-[56px] leading-snug">
        <div class="text-primary">Cross-Chain</div>
        <div>Smart Contracts Platform</div>
      </div>
      <div class="mt-4 text-sm lg:mt-6 lg:text-xl opacity-60">Open source, secure, low-cost, lightning fast and decentralized.</div>

      <!-- links -->
      <div class="mt-[106px] mb-[142px]">
        <div class="home-button bg-primary text-white">Developer docs</div>
        <div class="home-button border-primary text-primary">Bridge to MVM</div>
      </div>

      <!-- status -->
      <div class="flex justify-between w-full">
        <template v-for="(feature, i) of features">
          <feature-box
            :key="i"
            :title="feature.title"
            :content="feature.content"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import FeatureBox from "@/components/FeatureBox";
import logo from '@/static/logo.svg';
import menuIcon from '@/static/menu.svg';
import background from '@/static/bg.png';

export default {
  name: "home",
  components: { FeatureBox },
  data() {
    return {
      logo,
      menuIcon,
      background,
      features: [
        {
          title: "1 sec",
          content: "Transfer time"
        },
        {
          title: "$0.10",
          content: "Bridge fee"
        },
        {
          title: "4",
          content: "Chains"
        },
        {
          title: "$80,503,125",
          content: "Total Value Locked"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>