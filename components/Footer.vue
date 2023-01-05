<template>
  <footer
    class="flex justify-center bg-footer w-full px-6 pt-10 pb-12 sm:h-[303px] sm:items-center sm:p-0"
  >
    <div 
      class="flex flex-col w-full sm:h-[184px] sm:flex-row sm:w-[768px] md:w-[1080px] lg:w-[1280px]"
    >
      <div class="w-4/5 h-full mb:10 sm:w-1/2 sm:m-0">
        <div class="flex flex-row items-center mb-5">
          <img class="h-4" :src="whiteLogo" alt="logo"/>
          <div class="ml-2 text-white">Mixin Messenger</div>
        </div>

        <div class="relative mb-[38px] h-8 w-[154px]">
          <div class="flex flex-row relative rounded-lg bg-select cursor-pointer" @click.stop="useToggleMenu">
            <img :src="currentLangIcon" class="m-2 h-4" alt="language" />
            <div class="font-medium text-base text-white/80 leading-8">{{ t(`i18n.${locale}`) }}</div>
            <img :src="showLangMenu ? arrowUp : arrowDown" class="absolute top-2 right-2 w-4"/>
          </div>
          
          <div 
            class="flex flex-col w-full absolute top-9 bg-select shadow-selection rounded-lg overflow-hidden z-10" 
            v-show="showLangMenu"
          >
            <div 
              v-for="l in totalLangs" 
              :key="l"
              :class="['flex flex-row w-full h-[46px] cursor-pointer', locale === l.locale ? 'select-background' : '']" 
              @click.stop="useChooseLang(l.locale)"
            >
              <img :src="l.icon" class="my-4 mx-2 h-4" alt="language" />
              <div class="font-medium text-base text-white/80 leading-[46px]">{{ t(`i18n.${l.locale}`) }}</div>
            </div>
          </div>
        </div>
        
        <div class="mb-[22px] w-full h-7">
          <a class="inline-block mr-4 w-7 h-7" href="https://medium.com/mixinnetwork"><img class="w-full" :src="medium" alt="medium"/></a>
          <a class="inline-block mr-4 w-7 h-7" href="https://twitter.com/Mixin_Network"><img class="w-full" :src="twitter" alt="twitter"/></a>
          <a class="inline-block mr-4 w-7 h-7" href="https://www.reddit.com/r/mixin"><img class="w-full" :src="reddit" alt="reddit"/></a>
          <a class="inline-block mr-4 w-7 h-7" href="https://t.me/MixinCommunity"><img class="w-full" :src="telegram" alt="telegram"/></a>
          <a class="inline-block mr-4 w-7 h-7" href="https://www.youtube.com/channel/UCLWQ94gw7wRK-S5qy4LAVrA"><img class="w-full" :src="youtube" alt="youtube"/></a>
        </div>

        <div class="font-medium text-sm text-white opacity-90">{{ copyright }}</div>
      </div>

      <div
        class="flex flex-col justify-between w-4/5 h-full sm:pl-3 sm:w-1/2 sm:flex-row"
      >
        <link-container
          v-for="{title, links} in linkList" 
          :key="title"
          :title="title"
          :links="links"
        ></link-container>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",

}
</script>