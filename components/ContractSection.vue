<template>
  <div class="flex justify-center items-center pt-[80px] pb-[16px] px-6 sm:pt-[180px] sm:pb-[108px] sm:px-0">
    <div class="flex flex-col items-center w-full sm:w-[632px] md:w-[852px] lg:w-[1280px]">
      <div class="mb-20 w-full font-bold text-[32px] leading-[130%] tracking-[-0.4px] sm:tracking-[-0.8px] sm:mb-[160px] sm:text-[50px] sm:leading-[72px] sm:text-center">
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
              ref="video"
              :width="videoSize.width"
              :height="videoSize.height"
              loop 
              muted 
              playsinline
              preload="auto"
              :poster="item.animation.poster"
              :autoplay="platform !== 'iOS' ? true : false"
              :controls="platform !== 'iOS' ? false : !item.animation.isPlayed"
              @click.once="onClick(index)"
            >
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
import { getMixinEnvironment, responsiveVideoSize } from "@/utils/index";
import contractAnimationMp4 from '@/assets/animations/contracts.mp4';
import contractAnimationWebm from '@/assets/animations/contracts.webm';
import contractImage from '@/assets/images/contracts.webp';
import assetsAnimationMp4 from '@/assets/animations/assets.mp4';
import assetsAnimationWebm from '@/assets/animations/assets.webm';  
import assetsImage from '@/assets/images/assets.webp';
import compatibleAnimationMp4 from '@/assets/animations/compatible.mp4';
import compatibleAnimationWebm from '@/assets/animations/compatible.webm';
import compatibleImage from '@/assets/images/compatible.webp';

if (process.client) {
  var platform = getMixinEnvironment();
  var videoSize = responsiveVideoSize();
}

export default {
  name: "ContractSection",
  data() {
    return {
      platform,
      counters: [0, 0, 0],
      videoSize: {
        width: 372,
        height: 263
      },
      list: [
        {
          animation: {
            mp4: contractAnimationMp4,
            webm: contractAnimationWebm,
            poster: contractImage,
            isPlayed: false,
          },
          title: this.$t("contract.section1.title"),
          content: this.$t("contract.section1.content")
        },
        {
          animation: {
            mp4: assetsAnimationMp4,
            webm: assetsAnimationWebm,
            poster: assetsImage,
            isPlayed: false,
          },
          title: this.$t("contract.section2.title"),
          content: this.$t("contract.section2.content")
        },
        {
          animation: {
            mp4: compatibleAnimationMp4,
            webm: compatibleAnimationWebm,
            poster: compatibleImage,
            isPlayed: false,
          },
          title: this.$t("contract.section3.title"),
          content: this.$t("contract.section3.content")
        },
      ]
    }
  },
  methods: {
    removeControllers(i) {
      this.list[i].animation.isPlayed = true;
    },
    videoEventCounter(i) {
      this.counters[i] = this.counters[i] + 1;
      if (this.counters[i] === 3) this.removeControllers(i);
    },
    onClick(i) {
      if (this.platform === 'iOS')
        this.$refs.video[i].addEventListener(
          'timeupdate', 
          this.videoEventCounter(i)
        )
    }
  },
  mounted() {
    this.videoSize = videoSize;
  },
  beforeDestroy() {
    this.list.forEach((item, i) => {
      if (item.animation.isPlayed = true) {
        this.$refs.video[i].removeEventListener(
          'timeupdate', 
          this.videoEventCounter(i)
        )
      }
    })
  }
}
</script>