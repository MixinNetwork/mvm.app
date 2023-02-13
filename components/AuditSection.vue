<template>
  <div class="py-20 px-6 w-full eco-background sm:pt-40 sm:pb-[172px] sm:px-0">
    <div class="font-bold text-[32px] leading-[130%] tracking-[-0.8px] sm:text-[50px] sm:leading-[72px] sm:text-center">
        <span class="text-primary">{{ $t("audit.title1") }}</span>{{ $t("audit.title2") }}
    </div>

    <div class="flex flex-col items-center mt-12 w-full sm:mt-[120px] lg:flex-row lg:justify-center">
        <div class="flex flex-col justify-between py-10 px-5 w-full h-[456px] border-box bg-white/30 shadow-audit rounded-xl sm:px-12 sm:w-[578px]">
          <div class="w-full">
            <div class="font-semibold text-2xl leading-9 text-black/90 tracking-[-0.8px] sm:text-[38px] sm:leading-[57px]">{{ $t("audit.opensource.title") }}</div>
            <div class="mt-3 font-normal text-lg leading-[150%] text-black/60 sm:mt-[23px]">{{ $t("audit.opensource.subTitle") }}</div>
          </div>
          
          <div class="w-full">
            <div 
              v-for="i in 3"
              class="flex flex-col justify-center w-full h-[62px] border-b-[1px] border-b-primary/20"
            >
              <a class="flex flex-row justify-between my-auto w-full" :href="openSourceLinks[i - 1]">  
                <div class="font-medium text-base leading-6 text-black/90 sm:text-xl sm:leading-[30px]">{{ $t(`audit.opensource.link${i}`) }}</div>
                <img class="w-6" :src="openLink" :alt="$t(`audit.opensource.link${i}`)" />
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-between mt-5 border-box py-10 px-5 w-full h-[456px] bg-white/30 shadow-audit rounded-xl sm:px-12 sm:w-[578px] lg:mt-0 lg:ml-11">
          <div>
            <div class="font-semibold text-2xl leading-9 text-black/90 tracking-[-0.8px] sm:text-[38px] sm:leading-[57px]">{{ $t("audit.audit.title") }}</div>
            <div class="mt-3 font-normal text-black/60 text-lg leading-[150%] sm:mt-[23px]">{{ $t("audit.audit.subTitle") }}</div>
          </div>
          <div class="flex flex-col justify-between w-full sm:flex-row">
            <div>
              <div class="w-[136px] bg-white rounded-lg overflow-hidden sm:w-[232px]">
                <img class="block w-full" :src="ioactive" alt="IOActive"/>
              </div>
              <a 
                class="block w-full mt-1 font-medium text-base leading-6 text-primary sm:mt-5 sm:text-xl sm:leading-[30px]"
                href="https://github.com/MixinNetwork/audits/blob/main/mixin-virtual-machine-ioactive.pdf"
              >Report-IOActive.pdf</a>
            </div>
            <div>
              <div class="mt-6 w-[136px] bg-white rounded-lg overflow-hidden sm:mt-0 sm:w-[232px]">
                <img class="block w-full" :src="slowmist" alt="Slowmist"/>
              </div>
              <a 
                class="block w-full mt-1 font-medium text-base leading-6 text-primary sm:mt-5 sm:text-xl sm:leading-[30px]"
                href="https://github.com/MixinNetwork/audits/blob/main/mixin-virtual-machine-slowmist.pdf"
              >Report-Slowmist.pdf</a>
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
      ]
    }
  }
}
</script>