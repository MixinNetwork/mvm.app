<template>
  <div class="flex justify-center items-center pt-[96px] px-6 eco-background sm:pt-[170px] sm:pb-[138px] sm:px-0">
    <div class="flex flex-col items-center w-full sm:w-[632px] md:w-[852px] lg:w-[1280px]">
      <div class="mb-[100px] w-full font-bold text-[32px] leading-[130%] sm:mb-[180px] sm:text-[50px] sm:leading-[72px] sm:text-center">
        <span class="text-primary">{{ $t("contract.title1") }}</span>{{ $t("contract.title2") }}
      </div>

      <div
        v-for="(item, index) in list"
        :key="index"
        class="flex flex-col w-full mb-[100px]"
      >
        <div class="font-bold text-[22px] leading-[130%] text-black/80 md:hidden">{{ item.title }}</div>
        <div :class="[
          'flex flex-col mt-[52px] w-full md:justify-between',
          index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
        ]">
          <div class="w-full md:flex-[0_0_43%]">
            <img class="w-full" :src="item.image.src" :alt="item.image.alt"/>
          </div>
          <div class="flex flex-col justify-center mt-[22px] w-full md:mt-0 md:flex-[0_0_43%] md:w-auto">
            <div class="hidden font-semibold text-[32px] leading-[48px] md:block">{{ item.title }}</div>
            <div class="font-normal text-base leading-[34px] text-black/90 sm:text-[22px] sm:leading-[38px] md:mt-[21px]">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/images/contract_img1.png";
import img2 from "@/assets/images/contract_img2.png";
import img3 from "@/assets/images/contract_img3.png";

export default {
  name: "ContractSection",
  data() {
    return {
      list: [
        {
          image: {
            src: img1,
            alt: this.$t("contract.section1.title")
          },
          title: this.$t("contract.section1.title"),
          content: this.$t("contract.section1.content")
        },
        {
          image: {
            src: img2,
            alt: this.$t("contract.section2.title")
          },
          title: this.$t("contract.section2.title"),
          content: this.$t("contract.section2.content")
        },
        {
          image: {
            src: img3,
            alt: this.$t("contract.section3.title")
          },
          title: this.$t("contract.section3.title"),
          content: this.$t("contract.section3.content")
        },
      ]
    }
  }
}
</script>