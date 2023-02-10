<template>
  <div class="pt-[58px] pb-[76px] w-full px-6 sm:pt-[120px] sm:pb-[200px] sm:px-0">
    <div class="mx-auto w-full sm:w-[632px] md:w-[852px] lg:w-[1280px]">
      <div class="w-full text-left font-bold text-[32px] leading-[130%] sm:text-[50px] sm:leading-[72px] sm:text-center">
        <span class="text-primary">{{ $t("community.title1") }}</span>{{ $t("community.title2") }}
      </div>

      <div class="flex flex-row flex-wrap justify-between mt-[84px] sm:mt-30">
        <div
          v-for="(f, i) in list"
          :key="i"
          class="flex-[0_0_48%] mb-4 sm:flex-[0_0_23%]"
          @click="useJumpTo(f.title.text)"
        >
          <FeatureBox
            :box-style="f.boxStyle"
            :inner-box-style="innerBoxStyle"
            :icon="f.icon"
            :title="f.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeatureBox from "@/components/FeatureBox";
import twi from "@/assets/icons/community_twitter.svg";
import dc from "@/assets/icons/community_discord.svg";
import tg from "@/assets/icons/community_telegram.svg";
import mixin from "@/assets/icons/community_mixin.svg";

const boxStyle = "h-[190px] rounded-xl cursor-pointer md:h-[300px] lg:h-[372px]";
const innerBoxStyle = "flex flex-col items-center";
const iconStyle = "mt-[46px] mb-4 w-12 cursor-pointer sm:w-22 sm:mb-[30px] md:mt-20 lg:mt-[112px]";
const titleStyle = "font-semibold text-lg text-white sm:text-[22px]";

export default {
  name: "CommunitySection",
  components: { FeatureBox },
  data() {
    return {
      innerBoxStyle,
      list: [
        {
          boxStyle: `twitter-background ${boxStyle}`,
          icon: {
            src: twi,
            style: iconStyle
          },
          title: {
            text: "Twitter",
            style: titleStyle
          }
        },
        {
          boxStyle: `discord-background ${boxStyle}`,
          icon: {
            src: dc,
            style: iconStyle
          },
          title: {
            text: "Discord",
            style: titleStyle
          }
        },
        {
          boxStyle: `telegram-background ${boxStyle}`,
          icon: {
            src: tg,
            style: iconStyle
          },
          title: {
            text: "Telegram",
            style: titleStyle
          }
        },
        {
          boxStyle: `mixin-background ${boxStyle}`,
          icon: {
            src: mixin,
            style: iconStyle
          },
          title: {
            text: "Mixin",
            style: titleStyle
          }
        }
      ]
    };
  },
  methods: {
    useJumpTo(site) {
      const urlMap = {
        Twitter: "https://twitter.com/MvmBridge",
        Discord: "https://discord.gg/JER9jmbRB6",
        Telegram: "https://t.me/mvmbridge",
        Mixin: "https://mvm-bridge.mixin.group"
      };
      window.open(urlMap[site]);
    }
  }
}
</script>