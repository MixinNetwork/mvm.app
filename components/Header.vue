<template>
  <div class="flex justify-center items-center absolute top-0 w-full my-6 px-6 z-10 sm:my-0 sm:h-[100px] sm:w-full sm:px-0">
    <div 
      class="relative flex flex-row justify-between items-center w-full h-6 sm:h-auto sm:w-[632px] md:w-[852px] lg:w-[1280px]"
    >
      <div class="flex row items-center h-6 sm:h-8">
        <img class="h-full" :src="logo" alt="mvm-logo" />
        <div class="ml-2 font-extrabold text-xs leading-[14px] text-black/80 sm:text-xl sm:leading-6">MVM</div>
      </div>

      <div class="relative">
        <img
          class="h-6 cursor-pointer sm:invisible sm:h-0"
          :src="menuIcon"
          alt="menu"
          @click="onClickMenu"
        />

        <div 
          :class="[
            'z-10 absolute top-9 -right-3 flex flex-col items-center w-[150px] bg-white rounded-md shadow-[0_2px_20px_rgba(0,0,74,0.1)] overflow-hidden sm:visible sm:flex sm:flex-row sm:justify-between sm:static sm:w-[360px] sm:border-opacity-0 sm:shadow-none', 
            showNav ? 'visible' : 'invisible'
          ]"
        >
          <div 
            v-for="(l, i) in navs" 
            :key="i"
            :class="[
              'flex items-center w-full h-12 bg-white sm:justify-center sm:h-auto',
              i === 1 ? 'border-y border-[#F5F5F5] sm:border-opacity-0' : '',
              i === 2 ? 'sm:w-[100px]' : 'sm:w-[90px]'
            ]"
          >
            <a 
              class="block pl-6 font-normal text-sm leading-4 text-black/80 sm:pl-0 sm:text-lg sm:leading-[27px] hover:font-bold" 
              :href="l.href"
            >{{ l.text }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/icons/logo.svg";
import menuIcon from "@/assets/icons/menu.svg";

export default {
  name: "Header",
  data() {
    return {
      logo,
      menuIcon,
      showNav: false,
      navs: [
        {
          href: "https://scan.mvm.dev",
          text: this.$t('nav.explorer')
        },
        {
          href: "https://bridge.mvm.app",
          text: this.$t('nav.bridge')
        },
        {
          href: "https://mvm.dev",
          text: this.$t('nav.developers')
        },
      ]
    };
  },
  methods: {
    onClickMenu() {
      this.showNav = !this.showNav;
    },
  },
};
</script>