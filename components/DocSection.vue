<template>
  <div class="pt-20 pb-[38px] px-6 w-full md:pt-[150px] md:pb-[120px] md:px-0">
    <div class="mx-auto w-full sm:w-[632px] md:w-[852px] lg:w-[1014px] xl:w-[1280px]">
      <div class="font-bold text-[32px] leading-[130%] tracking-[-0.4px] sm:text-[50px] sm:leading-[72px] sm:tracking-[-0.4px] md:text-center">
        <span class="text-primary">{{ $t("doc.title1") }}</span>{{ $t("doc.title2") }}
      </div>

      <div class="flex flex-row flex-wrap justify-between mt-16 min-w-[305px] md:mt-[120px] xl:flex-nowrap">
        <FeatureBox 
          v-for="(f, i) in list"
          :key="i"
          :box-style="boxStyle"
          :icon="f.icon"
          :title="f.title"
          :content="f.content"
          :link="f.link"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FeatureBox from "@/components/FeatureBox";
import ref from "@/assets/icons/references.svg";
import doc from "@/assets/icons/documentation.svg";
import tutorials from "@/assets/icons/tutorials.svg";
import faq from "@/assets/icons/faq.svg";
import openLink from "@/assets/icons/link_open.svg";

const iconStyle = "w-12 md:w-20";
const titleStyle = [
  "mt-5 mb-3 font-bold text-xl leading-[100%] text-black break-words break-all sm:mt-[38px] sm:mb-5 sm:text-3xl",
  "lg:my-4 lg:text-3xl",
  "xl:mt-[38px] xl:mb-5 xl:text-3xl"
];
const contentStyle = "font-normal text-base leading-6 text-black/60 sm:text-xl sm:leading-[30px]";
const linkStyle = "font-semibold text-base leading-5 text-primary tracking-[-0.8px] break-keep sm:text-[22px]";
const linkIconStyle = "ml-1.5 w-4 sm:ml-2 sm:w-6";
const iconList = [ref, doc, tutorials, faq];
const linkList = [
  "https://mvm.dev/api/intro.html",
  "https://mvm.dev/",
  "https://mvm.dev/zh/registry/call.html",
  "https://mvm.dev/resources/qa.html"
]

export default {
  name: "DocSection",
  components: { FeatureBox },
  data() {
    return {
      boxStyle: [
        "flex flex-col flex-[0_0_48%] justify-between h-full rounded-xl mb-4 pt-3 pb-[14px] px-3 shadow-mvm select-none sm:mb-6 sm:pt-7 sm:pb-[45px] sm:px-7 md:mb-8 lg:mb-0 lg:flex-[0_0_24%]",
        this.$i18n.locale === 'zh' ? 'h-[270px] sm:h-[360px] md:h-[400px] lg:h-[440px]' : 'h-[330px] sm:h-[410px] md:h-[400px] lg:h-[450px]'
      ],
      list: new Array(4).fill(0).map((_, i) => ({
        icon: {
          src: iconList[i],
          style: iconStyle
        },
        title: {
          text: this.$t(`doc.section${i + 1}.title`),
          style: titleStyle
        },
        content: {
          text: this.$t(`doc.section${i + 1}.content`),
          style: contentStyle
        },
        link: {
          text: this.$t(`doc.section${i + 1}.link`),
          style: linkStyle,
          href: linkList[i],
          icon: openLink,
          iconStyle: linkIconStyle,
          iconAlt: this.$t(`doc.section${i + 1}.link`)
        }
      }))
    }
  }
}
</script>