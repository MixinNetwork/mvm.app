<template>
  <div class="py-20 px-6 w-full eco-background md:pt-40 md:pb-[172px] md:px-0">
    <div
      class="font-bold text-[32px] leading-[130%] tracking-[-0.4px] sm:mx-auto sm:w-[632px] sm:text-[50px] sm:leading-[72px] md:mx-0 md:w-full md:tracking-[-0.8px] md:text-center">
      <span class="text-primary">{{ $t("audit.title1") }}</span>{{ $t("audit.title2") }}
    </div>

    <div class="flex flex-col items-center mt-12 w-full sm:mx-auto sm:w-[632px] md:mt-[120px] md:flex-row md:justify-between md:w-[852px] lg:w-[1014px] xl:w-[1200px]">
      <div
        class="flex flex-col justify-between py-10 px-5 w-full h-[456px] border-box bg-white/30 shadow-audit rounded-xl sm:px-12 md:w-[48%]"
      >
        <div class="w-full">
          <div
            class="font-semibold text-2xl leading-9 text-black/90 tracking-[-0.8px] sm:text-[38px] sm:leading-[57px]">{{
              $t("audit.opensource.title")
            }}</div>
          <div class="mt-3 font-normal text-lg leading-[150%] text-black/60 md:mt-[23px]">{{
            $t("audit.opensource.subTitle")
          }}</div>
        </div>

        <div class="w-full">
          <div v-for="i in 3" class="box-border w-full h-[62px] border-b-[1px] border-b-primary/20">
            <a class="block relative w-full h-full" :href="openSourceLinks[i - 1]">
              <div class="absolute left-0 bottom-4 font-medium text-base leading-6 text-black/90 sm:bottom-2.5 sm:text-xl sm:leading-[30px]">
                {{ $t(`audit.opensource.link${i}`) }}
              </div>
              <img class="absolute right-0 bottom-3 w-6" :src="openLink" :alt="$t(`audit.opensource.link${ i }`)" />
            </a>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col justify-between mt-5 border-box py-10 px-5 w-full h-[480px] bg-white/30 shadow-audit rounded-xl sm:px-12 sm:h-[456px] md:w-[48%] md:mt-0">
        <div>
          <div
            class="font-semibold text-2xl leading-9 text-black/90 tracking-[-0.8px] sm:text-[38px] sm:leading-[57px]">{{
            $t("audit.audit.title") }}</div>
          <div class="mt-3 font-normal text-lg leading-[150%] text-black/60 md:mt-[23px]">{{ $t("audit.audit.subTitle")
          }}</div>
        </div>
        <div class="flex flex-col justify-between w-full sm:flex-row">
          <div
            v-for="(item, index) in auditList"
            :key="index"
            class="sm:w-[232px] md:w-[48%]"
          >
            <div 
              :class="[
                'w-[136px] bg-white rounded-lg overflow-hidden sm:w-full',
                index === auditList.length - 1 ? 'mt-6 sm:mt-0' : ''
              ]"
            >
              <img class="w-full" :src="item.image.src" :alt="item.image.alt" />
            </div>
            <a 
              :class="[
                'block w-full mt-1 font-medium text-base leading-6 text-primary',
                'sm:text-xl sm:leading-[30px] md:mt-5 md:text-sm lg:text-lg xl:text-xl xl:leading-[30px]'
              ]"
              :href="item.link.href"
            >{{ item.link.text }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import openLink from "@/assets/icons/link_open.svg";
import ioactive from "@/assets/icons/ioactive.svg";
import slowmist from "@/assets/icons/slowmist.svg";

export default {
  name: "AuditSection",
  data() {
    return {
      openLink,
      ioactive,
      slowmist,
      openSourceLinks: [
        "https://github.com/MixinNetwork/trusted-group/tree/master/mvm",
        "https://github.com/MixinNetwork/bridge.mvm.app",
        "https://github.com/MixinNetwork/blockscout"
      ],
      auditList: [
        {
          image: {
            src: ioactive,
            alt: 'IOActive'
          },
          link: {
            text: 'Report-IOActive.pdf',
            href: 'https://github.com/MixinNetwork/audits/blob/main/mixin-virtual-machine-ioactive.pdf'
          }
        },
        {
          image: {
            src: slowmist,
            alt: 'Slowmist'
          },
          link: {
            text: 'Report-Slowmist.pdf',
            href: 'https://github.com/MixinNetwork/audits/blob/main/mixin-virtual-machine-slowmist.pdf'
          }
        },
      ]
    }
  }
}
</script>