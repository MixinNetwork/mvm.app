<template>
  <div
      class="flex justify-between items-center mx-auto mt-2 px-6 w-full h-6 sm:my-0 sm:px-0 sm:h-[100px] sm:w-[632px] md:w-[852px] lg:w-[1200px]"
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

        <div :class="['nav-bar', showNav ? 'visible' : '']">
          <div class="nav-link">
            <a class="link" href="https://scan.mvm.dev">Explorer</a>
          </div>
          <div class="nav-link border-y border-[#F5F5F5] sm:border-opacity-0">
            <a class="link" href="https://bridge.mvm.app">Bridge</a>
          </div>
          <div class="nav-link">
            <a class="link" href="https://mvm.dev">Developers</a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import logo from "@/static/logo.svg";
import menuIcon from "@/static/menu.svg";

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