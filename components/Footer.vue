<template>
  <footer
    class="w-full px-6 pt-16 pb-20 bg-footer sm:h-[376px] sm:px-0"
  >
    <div 
      class="flex flex-col w-full sm:h-[194px] sm:flex-row sm:mx-auto sm:w-[632px] md:w-[852px] lg:w-[1280px]"
    >
      <div class="w-4/5 h-full sm:w-5/12 md:w-1/2">
        <div class="flex flex-row items-center mb-8 sm:mb-4">
          <img class="h-8" :src="logo" alt="logo"/>
          <div class="ml-2 font-extrabold text-xl leading-6 text-black">MVM</div>
        </div>

        <div class="relative mb-[54px] h-8 w-[154px]">
          <div class="flex flex-row justify-between items-center rounded-lg bg-white cursor-pointer" @click.stop="useToggleMenu">
            <div class="flex flex-row items-center">
              <img :src="langIconMap[currentLang]" class="m-2 h-4" alt="language" />
              <div class="font-semibold text-base leading-6 text-black/80">{{ $t(`footer.locales.${currentLang}`) }}</div>
            </div>
            <img class="mr-2 w-4" :src="showLangMenu ? arrowUp : arrowDown" />
          </div>
          
          <div 
            class="flex flex-col w-full absolute top-9 bg-white shadow-selection rounded-lg overflow-hidden z-10" 
            v-show="showLangMenu"
          >
            <div
              v-for="l in totalLangs" 
              :key="l.locale"
              :class="['flex flex-row items-center w-full h-[46px] cursor-pointer', currentLang === l.locale ? 'bg-footer' : '']" 
              @click="useSelectLang(l.locale)"
            >
              <img :src="l.icon" class="my-[15px] mx-2 h-4" alt="language" />
              <div class="font-normal text-base leading-6 text-black/80">{{ $t(`footer.locales.${l.locale}`) }}</div>
            </div>
          </div>
        </div>
        
        <div class="mb-4 w-full">
          <a class="inline-block mr-4 w-7 h-7 hover:opacity-60" href="https://twitter.com/MvmBridge"><img class="w-full" :src="twitter" alt="twitter"/></a>
          <a class="inline-block mr-4 w-7 h-7 hover:opacity-60" href="https://t.me/mvmbridge"><img class="w-full" :src="telegram" alt="telegram"/></a>
          <a class="inline-block mr-4 w-7 h-7 hover:opacity-60" href="https://discord.gg/JER9jmbRB6"><img class="w-full" :src="discord" alt="discord"/></a>
        </div>

        <div class="font-medium text-base leading-6 tracking-[-0.4px] text-black/80">{{ copyright }}</div>
      </div>

      <div
        class="flex flex-col justify-between w-4/5 h-full mt-4 sm:mt-0 sm:pl-3 sm:w-7/12 sm:flex-row md:w-1/2"
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
import logo from "@/assets/icons/logo.svg";
import en from "@/assets/icons/menu_english.svg";
import zh from "@/assets/icons/menu_chinese.svg";
import telegram from "@/assets/icons/telegram.svg";
import twitter from "@/assets/icons/twitter.svg";
import discord from "@/assets/icons/discord.svg";
import arrowUp from "@/assets/icons/arrow_up.svg";
import arrowDown from "@/assets/icons/arrow_down.svg";

export default {
  name: "Footer",
  data() {
    return {
      logo,
      twitter,
      telegram,
      discord,
      arrowUp,
      arrowDown,
      langIconMap: {
        en,
        zh
      },
      linkList: [
        {
          title: this.$t("footer.about.title"),
          links: [
            {
              text: this.$t("footer.about.link1"),
              link: "mailto:contact@mixin.one"
            },
            {
              text: this.$t("footer.about.link2"),
              link: "https://mvm.dev/resources/qa.html"
            },
            // {
            //   text: this.$t("footer.about.link3"),
            //   link: ""
            // }
          ]
        },
        {
          title: this.$t("footer.developers.title"),
          links: [
            {
              text: this.$t("footer.developers.link1"),
              link: "https://mvm.dev/"
            },
            {
              text: this.$t("footer.developers.link2"),
              link: "https://scan.mvm.dev/"
            },
            {
              text: this.$t("footer.developers.link3"),
              link: "https://github.com/MixinNetwork/trusted-group/tree/master/mvm"
            }
          ]
        },
        {
          title: this.$t("footer.community.title"),
          links: [
            {
              text: this.$t("footer.community.link1"),
              link: "https://discord.gg/JER9jmbRB6"
            },
            {
              text: this.$t("footer.community.link2"),
              link: "https://twitter.com/MvmBridge"
            },
          ]
        }
      ],
      showLangMenu: false,
    }
  },
  computed: {
    copyright() {
      const year = new Date().getFullYear();
      return `© MVM 2020-${year}. All Rights Reserved.`;
    },
    currentLang() {
      return this.$i18n.locale;
    },
    totalLangs() {
      return this.$i18n.locales.reduce((prev, cur) => ({
        ...prev,
        [cur]: {
          locale: cur,
          icon: this.langIconMap[cur]
        }
      }), {});
    }
  },
  methods: {
    useToggleMenu() {
      this.showLangMenu = !this.showLangMenu;
    },
    useSelectLang(l) {
      this.showLangMenu = false;
      this.$i18n.setLocale(l)
    }
  }
}
</script>