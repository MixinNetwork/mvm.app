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
            <template v-for="l in totalLangs" :key="l" >
              <div 
                :class="['flex flex-row w-full h-[46px] cursor-pointer', locale === l.locale ? 'select-background' : '']" 
                @click.stop="useChooseLang(l.locale)"
              >
                <img :src="l.icon" class="my-4 mx-2 h-4" alt="language" />
                <div class="font-medium text-base text-white/80 leading-[46px]">{{ t(`i18n.${l.locale}`) }}</div>
              </div>
            </template>
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
        <template v-for="{title, links} in linkList" :key="title">
          <link-container
            :title="title"
            :links="links"
          ></link-container>
        </template>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

import LinkContainer from "./LinkContainer.vue";
import whiteLogo from "@/assets/icons/whiteLogo.svg";
import medium from "@/assets/icons/medium.svg";
import twitter from "@/assets/icons/twitter.svg";
import reddit from "@/assets/icons/reddit.svg";
import telegram from "@/assets/icons/telegram.svg";
import youtube from "@/assets/icons/youtube.svg";
import en from "@/assets/icons/menu_english.svg";
import zh from "@/assets/icons/menu_chinese.svg";
import arrowUp from "@/assets/icons/arrow_up.svg";
import arrowDown from "@/assets/icons/arrow_down.svg";

const route = useRoute();
const router = useRouter();
const { t, locale, messages } = useI18n({ useScope: 'global' });

const langIconMap = {
  en, zh
};
const totalLangs = Object.keys(messages.value).reduce((prev, cur) => {
  return {
    ...prev,
    [cur]: {
      locale: cur,
      icon: langIconMap[cur]
    }
  }
}, {});
const currentLangIcon = computed(() => langIconMap[locale.value]);

const showLangMenu = ref(false);
const useToggleMenu = () => {
  showLangMenu.value = !showLangMenu.value
}
const useChooseLang = (l) => {
  showLangMenu.value = false;
  if (l === locale.value) return;
  if (locale.value === 'en') router.push(`/${l}${route.fullPath}`);
  else if (l === 'en') router.push(route.fullPath.split(locale.value)[1]);
  else router.push(route.fullPath.replace(locale.value, l))
}
const useHideMenu = () => {
  if (showLangMenu.value) showLangMenu.value = false;
}

const body = document.querySelector('body');
body.addEventListener('click', useHideMenu)
onUnmounted(() => {
  body.removeEventListener('click', useHideMenu)
})

const year = new Date().getFullYear();
const copyright = `Mixin Ltd © 2017-${year}`;

const linkList = computed(() => [
  {
    title: t("footer.developer.title"),
    links: [
      {
        text: t("footer.developer.link1"),
        link: "https://developers.mixin.one"
      },
      {
        text: t("footer.developer.link2"),
        link: "https://developers.mixin.one/docs/dapp/getting-started/create-dapp"
      },
      {
        text: t("footer.developer.link3"),
        link: "https://developers.mixin.one/docs/mainnet/guide/submit-asset-icon"
      }
    ]
  },
  {
    title: t("footer.support.title"),
    links: [
      {
        text: t("footer.support.link1"),
        link: "https://mixinmessenger.zendesk.com"
      },
      {
        text: t("footer.support.link2"),
        link: "mailto:contact@mixin.one"
      },
      {
        text: t("footer.support.link3"),
        link: "https://mixin.one/assets/Mixin-Logo.zip"
      }
    ]
  },
  {
    title: t("footer.legal.title"),
    links: [
      {
        text: t("footer.legal.link1"),
        link: "https://mixin.one/pages/privacy"
      },
      {
        text: t("footer.legal.link2"),
        link: "https://mixin.one/pages/terms"
      }
    ]
  }
]);
</script>
