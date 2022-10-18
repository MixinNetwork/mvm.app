<template>
  <div class="w-full min-w-[375px] h-screen flex flex-col items-center background overflow-hidden">
    <!-- header -->
    <div class="w-full h-6 my-7 px-6
      sm:w-[1280px] sm:h-[100px] flex justify-between items-center">
      <div class="flex row items-center h-full">
        <img class="h-full" :src="logo" alt="mvm-logo" />
        <div class="ml-2 font-extrabold text-xs opacity-80">MVM</div>
      </div>

      <div class="relative">
        <img class="h-6 cursor-pointer" :src="menuIcon"  alt="menu" @click="onClickMenu"/>

        <div :class="['nav-bar', showNav ? 'visible' : '']">
          <div class="nav-link font-semibold"><a class="block ml-6 text-black" href="/">Explore</a></div>
          <div class="nav-link border-y border-[#F5F5F5] sm:ml-14"><a class="block ml-6 text-black" href="https://bridge.mvm.app">Bridge</a></div>
          <div class="nav-link"><a class="block ml-6 text-black" href="https://mvm.dev">Developers</a></div>
        </div>
      </div>
    </div>

    <div class="relative w-full px-6 lg:w-[1280px] lg:h-[643px]">
      <div class="flex justify-center">
        <img class="h-[270px]" :src="background" alt="background-image" />
      </div>

      <!-- title -->
      <div class="w-full font-bold text-[34px] lg:text-[56px] leading-[130%]">
        <div class="text-primary">Cross-Chain</div>
        <div>Smart Contracts Platform</div>
      </div>
      <div class="mt-4 text-sm lg:mt-6 lg:text-xl opacity-60">Open source, secure, low-cost, lightning fast and decentralized.</div>

      <!-- links -->
      <div class="flex justify-between mt-9 mb-12 lg:mt-[106px] lg:mb-[142px]">
        <div class="btn"><a class="primary-btn" href="https://mvm.dev">Developer docs</a></div>
        <div class="btn"><a class="default-btn" href="https://bridge.mvm.app">Bridge to MVM</a></div>
      </div>

      <!-- status -->
      <div class="flex flex-wrap justify-between w-full">
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
      showNav: false,
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
  },
  methods: {
    onClickMenu() {
      this.showNav = !this.showNav
    }
  }
}
</script>

<style scoped>

</style>