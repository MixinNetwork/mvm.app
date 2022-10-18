<template>
  <div class="relative w-full min-w-[375px] h-screen background overflow-x-hidden">
    <!-- header -->
    <div class="flex justify-between items-center w-full h-20 px-6 sm:h-[100px] sm:my-0 sm:px-10 lg:w-[1280px] ">
      <div class="flex row items-center h-6 sm:h-8">
        <img class="h-full" :src="logo" alt="mvm-logo" />
        <div class="ml-2 font-extrabold text-xs opacity-80 sm:text-xl">MVM</div>
      </div>

      <div class="relative">
        <img class="h-6 cursor-pointer sm:invisible sm:h-0" :src="menuIcon"  alt="menu" @click="onClickMenu"/>

        <div :class="['nav-bar', showNav ? 'visible' : '']">
          <div class="nav-link"><a class="link font-semibold" href="/">Explore</a></div>
          <div class="nav-link border-y border-[#F5F5F5] sm:border-opacity-0"><a class="link" href="https://bridge.mvm.app">Bridge</a></div>
          <div class="nav-link"><a class="link" href="https://mvm.dev">Developers</a></div>
        </div>
      </div>
    </div>

    <div class="w-full px-6 sm:absolute-center sm:px-10 lg:w-[1280px] lg:h-[643px]">
      <div class="flex justify-center h-[270px] sm:absolute sm:-top-5 sm:right-0 sm:h-[300px] md:top-6 md:h-[380px]">
        <img class="h-full" :src="background" alt="background-image" />
      </div>

        <!-- title -->
        <div class="mt-4 w-full font-bold text-[34px] sm:text-[30px] sm:mt-8 md:text-[40px] md:mt-20 lg:text-[56px] leading-[130%]">
          <div class="text-primary">Cross-Chain</div>
          <div>Smart Contracts Platform</div>
        </div>
        <div class="mt-4 text-sm sm:mt-3 sm:w-[400px] md:text-base md:mt-6 md:w-[500px] lg:mt-6 lg:text-xl opacity-60">Open source, secure, low-cost, lightning fast and decentralized.</div>

        <!-- links -->
        <div class="flex justify-between mt-9 mb-12 sm:w-[344px] md:mt-20 md:mb-20 md:w-[380px] lg:mt-[106px] lg:mb-[142px]">
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