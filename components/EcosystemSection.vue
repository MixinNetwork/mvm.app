<template>
  <div class="pt-[100px] px-6 bg-footer sm:pt-[140px] sm:pb-[60px] sm:px-0">
    <div class="mx-auto w-full sm:w-[632px] md:w-[852px] lg:w-[1280px]">
      <div class="w-full font-bold text-[32px] leading-[130%] sm:text-[50px] sm:leading-[72px] sm:text-center">
        <span class="text-primary">{{ $t("ecosystem.title1") }}</span>{{ $t("ecosystem.title2") }}
      </div>

      <div class="mt-16 w-full sm:mt-[120px]">
        <div
          v-for="(item, index) in list"
          :class="[
            'flex flex-col items-center md:justify-between',
            index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse',
            index === list.length - 1 ? '' : 'mb-20 sm:mb-[120px] '
          ]"
        >
          <div class="w-full sm:w-[540px]">
            <img class="w-full" :src="item.image.src" :alt="item.image.alt"/>
          </div>
          <div class="w-full sm:w-[540px]">
            <div class="mt-[26px] font-bold text-[22px] leading-[130%] text-black sm:text-[32px] sm:leading-[48px] lg:mt-0">
              {{ item.title }}
            </div>
            <div class="mt-[26px] mb-4 font-normal text-base leading-[34px] text-black/90 sm:mt-6 sm:text-[22px] sm:leading-[38px]">
              {{ item.content }}
            </div>
            <ul v-if="!!item.features" class="list-disc list-inside">
              <li 
                v-for="(f, i) in item.features" 
                :key="f"
                :class="[
                  'font-normal text-base leading-[34px] text-black/90 sm:text-[22px] sm:leading-[38px]'
                  , i !== item.features.length - 1 ? 'mb-1' : '']"
              >{{ f }}</li>
            </ul>
            <div class="mt-12 sm:mt-10">
              <a 
                :href="hrefList[index]"
                class="flex flex-row items-center"
              >
                <div class="font-semibold text-lg leading-5 text-primary tracking-[-0.8px] sm:text-[22px]">{{ $t("ecosystem.link") }}</div>
                <img class="ml-2 w-6" :src="openLink" :alt="$t('ecosystem.link')" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import openLink from "@/assets/icons/link_open.svg";
import bridge from "@/assets/images/mvmBridge.webp";
import quill from "@/assets/images/quill.webp";
import trident from "@/assets/images/trident.webp";
import fourSwap from "@/assets/images/4swap.webp";
import pandoRing from "@/assets/images/pandoRings.webp";
import pandoLeaf from "@/assets/images/pandoLeaf.webp";
import optionDance from "@/assets/images/optiondance.webp";
import murmurs from "@/assets/images/murmurs.webp";

export default {
  name: "EcosystemSection",
  data() {
    return {
      openLink,
      hrefList: [
        "https://bridge.mvm.app/",
        "https://quill.im/",
        "https://thetrident.one/",
        "https://app.4swap.org/",
        "https://rings.pando.im/",
        "https://leaf.pando.im/",
        "https://option.dance/",
        "https://murmurs.io/"
      ],
      list: [
        {
          image: {
            src: bridge,
            alt: "MVM Bridge",
          },
          title: this.$t("ecosystem.bridge.title"),
          content: this.$t("ecosystem.bridge.content"),
          features: new Array(4).fill(0).map((_, i) => this.$t(`ecosystem.bridge.feature${i + 1}`)),
        },
        {
          image: {
            src: quill,
            alt: "Quil",
          },
          title: this.$t("ecosystem.quill.title"),
          content: this.$t("ecosystem.quill.content")
        },
        {
          image: {
            src: trident,
            alt: "Trident",
          },
          title: this.$t("ecosystem.trident.title"),
          content: this.$t("ecosystem.trident.content"),
          features: new Array(5).fill(0).map((_, i) => this.$t(`ecosystem.trident.feature${i + 1}`)),
        },
        {
          image: {
            src: fourSwap,
            alt: "4Swap",
          },
          title: this.$t("ecosystem.fourSwap.title"),
          content: this.$t("ecosystem.fourSwap.content"),
        },
        {
          image: {
            src: pandoRing,
            alt: "Pando Ring",
          },
          title: this.$t("ecosystem.pandoRings.title"),
          content: this.$t("ecosystem.pandoRings.content"),
        },
        {
          image: {
            src: pandoLeaf,
            alt: "Pando Leaf",
          },
          title: this.$t("ecosystem.pandoLeaf.title"),
          content: this.$t("ecosystem.pandoLeaf.content"),
        },
        {
          image: {
            src: optionDance,
            alt: "Option Dance",
          },
          title: this.$t("ecosystem.optionDance.title"),
          content: this.$t("ecosystem.optionDance.content"),
          features: new Array(3).fill(0).map((_, i) => this.$t(`ecosystem.optionDance.feature${i + 1}`)),
        },
        {
          image: {
            src: murmurs,
            alt: "Murmurs",
          },
          title: this.$t("ecosystem.murmurs.title"),
          content: this.$t("ecosystem.murmurs.content"),
          features: new Array(4).fill(0).map((_, i) => this.$t(`ecosystem.murmurs.feature${i + 1}`)),
        },
      ]
    }
  }
}
</script>