<template>
  <div class="flex justify-center items-center pt-[80px] pb-[16px] px-6 eco-background sm:pt-[110px] sm:pb-[154px] sm:px-0">
    <div class="flex flex-col items-center w-full sm:w-[632px] md:w-[852px] lg:w-[1280px]">
      <div class="mb-20 w-full font-bold text-[32px] leading-[130%] tracking-[-0.4px] sm:tracking-[-0.8px] sm:mb-[180px] sm:text-[50px] sm:leading-[72px] sm:text-center">
        <span class="text-primary">{{ $t("contract.title1") }}</span>{{ $t("contract.title2") }}
      </div>

      <div
        v-for="(item, index) in list"
        :key="index"
        class="flex flex-col w-full mb-[100px] lg:mb-[84px]"
      >
        <div class="font-bold text-[22px] leading-[130%] tracking-[-0.4px] text-black/80 sm:text-[32px] sm:leading-[48px] sm:text-black lg:hidden">
          {{ item.title }}
        </div>
        <div :class="[
          'flex flex-col items-center mt-[52px] w-full lg:justify-between lg:mt-0',
          index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
        ]">
          <div class="w-full sm:w-[528px]">
            <video 
              autoplay 
              loop 
              muted 
              playsinline
            >
              <!-- TODO: 两倍尺寸，mp4 更清晰，背景不透明 -->
              <source :src="item.animation.webm" type="video/webm">
              <source :src="item.animation.mp4" type="video/mp4">
            </video>
          </div>
          <div class="flex flex-col justify-center mt-[22px] w-full lg:mt-0 lg:w-[528px]">
            <div class="hidden w-[120%] font-semibold text-[32px] leading-[48px] lg:block">{{ item.title }}</div>
            <div class="font-normal text-base leading-[34px] text-black/90 sm:text-[22px] sm:leading-[38px] lg:mt-6">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contractAnimationMp4 from '@/assets/animations/contracts.mp4';
import assetsAnimationMp4 from '@/assets/animations/assets.mp4';
import compatibleAnimationMp4 from '@/assets/animations/compatible.mp4';
import contractAnimationWebm from '@/assets/animations/contracts.webm';
import assetsAnimationWebm from '@/assets/animations/assets.webm';  
import compatibleAnimationWebm from '@/assets/animations/compatible.webm';

export default {
  name: "ContractSection",
  data() {
    return {
      list: [
        {
          animation: {
            mp4: contractAnimationMp4,
            webm: contractAnimationWebm
          },
          title: this.$t("contract.section1.title"),
          content: this.$t("contract.section1.content")
        },
        {
          animation: {
            mp4: assetsAnimationMp4,
            webm: assetsAnimationWebm
          },
          title: this.$t("contract.section2.title"),
          content: this.$t("contract.section2.content")
        },
        {
          animation: {
            mp4: compatibleAnimationMp4,
            webm: compatibleAnimationWebm
          },
          title: this.$t("contract.section3.title"),
          content: this.$t("contract.section3.content")
        },
      ]
    }
  }
}
</script>