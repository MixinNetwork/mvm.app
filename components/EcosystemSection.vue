<template>
  <div class="pt-[100px] pb-[86px] px-6 bg-footer md:pt-[140px] md:pb-[180px] md:px-0">
    <div class="mx-auto w-full sm:w-[632px] md:w-[852px] lg:w-[1014px] xl:w-[1280px]">
      <div class="w-full font-bold text-[32px] leading-[130%] sm:text-[50px] sm:leading-[72px] md:text-center">
        <span class="text-primary">{{ $t("ecosystem.title1") }}</span>{{ $t("ecosystem.title2") }}
      </div>

      <div class="mt-16 w-full md:mt-[120px]">
        <div
          v-for="(item, index) in list"
          :class="[
            'flex flex-col items-center md:justify-between',
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
            index === list.length - 1 ? '' : 'mb-[84px] md:mb-[120px] '
          ]"
        >
          <div class="w-full sm:w-[540px] md:w-[42%]">
            <img class="w-full" :src="item.image.src" :alt="item.image.alt"/>
          </div>

          <div class="w-full sm:w-full md:w-[42%]">
            <div 
              :class="[
                'mt-[26px] font-bold text-[22px] leading-[130%] text-black/80 tracking-[-0.4px]',
                'md:mt-0 md:text-2xl md:leading-9 md:text/black lg:text-3xl lg:leading-10 xl:text-[32px] xl:leading-[48px]'
              ]"
            >
              {{ item.title }}
            </div>
            <div 
              :class="[
                'mt-[26px] mb-4 font-normal text-base leading-[34px] text-black/90',
                'md:my-2 md:w-[105%] md:leading-7 lg:text-lg lg:leading-8 xl:mt-6 xl:text-[22px] xl:leading-[38px]'
              ]"
            >
              {{ item.content }}
            </div>
            <ul v-if="!!item.features" class="list-disc list-inside">
              <li 
                v-for="(f, i) in item.features" 
                :key="f"
                :class="[
                  'font-normal text-base leading-[34px] text-black/90',
                  'md:leading-7 lg:text-lg lg:leading-8 xl:text-[22px] xl:leading-[38px]' ,
                  i !== item.features.length - 1 ? 'mb-1 md:mb-0 xl:mb-1' : ''
                ]"
              >{{ f }}</li>
            </ul>
            <div class="mt-[50px] md:mt-4 xl:mt-[42px]">
              <a 
                :href="hrefList[index]"
                class="flex flex-row items-center"
              >
                <div class="font-semibold text-lg leading-5 text-primary tracking-[-0.8px] xl:text-[22px]">{{ $t("ecosystem.link") }}</div>
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