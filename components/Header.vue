<template>
  <div class="flex justify-center items-center absolute top-0 w-full my-6 px-6 z-10 sm:h-[100px] sm:w-full sm:px-0">
    <div 
      class="relative flex flex-row justify-between w-full h-6 sm:h-auto sm:w-[632px] md:w-[852px] lg:w-[1200px]"
    >
      <div class="flex row items-center h-6 sm:h-8">
        <img class="h-full" :src="logo" alt="mvm-logo" />
        <div class="ml-2 font-extrabold text-xs opacity-80 sm:text-xl">MVM</div>
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
            'absolute top-7 -right-2.5 flex flex-col items-center bg-white shadow-[0_2px_20px_rgba(0,0,74,0.1)] z-10 sm:visible sm:flex sm:flex-row sm:justify-between sm:relative sm:top-0 sm:right-0 sm:m-0 sm:w-[350px] sm:border-opacity-0 sm:shadow-none', 
            showNav ? 'visible' : 'invisible'
          ]"
        >
          <div class="flex items-center w-36 h-12 opacity-80 bg-white text-sm sm:justify-center sm:m-0 sm:w-[100px] sm:text-lg">
            <a class="block ml-6 text-black hover:font-bold sm:m-0" href="https://scan.mvm.dev">Explorer</a>
          </div>
          <div class="flex items-center w-36 h-12 opacity-80 bg-white text-sm border-y border-[#F5F5F5] sm:justify-center sm:m-0 sm:w-[100px] sm:text-lg sm:border-opacity-0">
            <a class="block ml-6 text-black hover:font-bold sm:m-0" href="https://bridge.mvm.app">Bridge</a>
          </div>
          <div class="flex items-center w-36 h-12 opacity-80 bg-white text-sm sm:justify-center sm:m-0 sm:w-[100px] sm:text-lg">
            <a class="block ml-6 text-black hover:font-bold sm:m-0" href="https://mvm.dev">Developers</a>
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
    };
  },
  methods: {
    onClickMenu() {
      this.showNav = !this.showNav;
    },
  },
};
</script>