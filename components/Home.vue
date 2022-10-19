<template>
  <div class="relative w-full min-w-[375px] h-screen background overflow-x-hidden">
    <!-- header -->
    <div class="flex justify-between items-center w-full h-20 px-6 sm:my-0 sm:px-10 sm:h-[100px] md:mx-auto lg:w-[1280px] ">
      <div class="flex row items-center h-6 sm:h-8">
        <img class="h-full" :src="logo" alt="mvm-logo" />
        <div class="ml-2 font-extrabold text-xs opacity-80 sm:text-xl">MVM</div>
      </div>

      <div class="relative">
        <img class="h-6 cursor-pointer sm:invisible sm:h-0" :src="menuIcon"  alt="menu" @click="onClickMenu"/>

        <div :class="['nav-bar', showNav ? 'visible' : '']">
          <div class="nav-link"><a class="link font-bold" href="/">Explore</a></div>
          <div class="nav-link border-y border-[#F5F5F5] sm:border-opacity-0"><a class="link" href="https://bridge.mvm.app">Bridge</a></div>
          <div class="nav-link"><a class="link" href="https://mvm.dev">Developers</a></div>
        </div>
      </div>
    </div>

    <div class="px-6 w-full sm:center sm:px-0 sm:w-[632px] md:w-[852px] lg:w-[1200px]">
      <div class="flex justify-center h-[262px] sm:absolute sm:-top-6 sm:-right-20 sm:h-[300px] md:h-[380px] lg:h-[530px]">
        <img class="h-full" :src="background" alt="background-image" />
      </div>

        <!-- title -->
        <div class="mt-3.5 w-full font-bold text-[34px] sm:text-[30px] sm:mt-8 md:text-[40px] md:mt-4 lg:text-[56px] leading-[130%]">
          <div class="text-primary">Cross-Chain</div>
          <div>Smart Contracts Platform</div>
        </div>
        <div class="mt-4 text-sm opacity-60 sm:mt-3 sm:w-[400px] md:text-base md:mt-6 md:w-[500px] lg:mt-6 lg:text-xl lg:w-[700px]">
          Open source, secure, low-cost, lightning fast and decentralized.
        </div>

        <!-- links -->
        <div class="flex justify-between mt-9 mb-12 sm:w-[344px] md:mt-20 md:mb-20 md:w-[380px] lg:w-[440px] lg:mt-[106px] lg:mb-[142px]">
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
          title: "$0.01",
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