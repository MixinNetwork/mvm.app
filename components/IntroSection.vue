<template>
  <div
      class="relative mx-auto pt-[88px] pb-3 px-6 h-screen min-h-[720px] sm:px-0 sm:pt-[150px] sm:pb-2 sm:min-h-[495px] sm:w-[632px] md:min-h-[580px] md:w-[852px] lg:min-h-[700px] lg:w-[1200px]"
    >
      <div class="flex flex-col justify-around items-start w-full h-full sm:justify-evenly">
        <!-- title -->
        <div class="relative w-full">
          <div
            class="relative w-full font-bold text-[30px] sm:text-[32px] md:text-[40px] lg:text-[56px] leading-[130%]"
          >
            <div class="text-primary">Cross-Chain</div>
            <div>Smart Contracts Platform</div>
          </div>

          <img 
            class="w-full select-none sm:absolute sm:-right-20 sm:-top-16 sm:w-auto sm:h-[300px] md:h-[380px] lg:-top-32 lg:h-[530px]"
            :src="background"
            alt="background-image"
          />

          <div
            class="relative mt-4 text-sm opacity-60 sm:mt-3 sm:w-[400px] md:text-base md:mt-6 md:w-[500px] lg:mt-6 lg:text-xl lg:w-[700px]"
          >
            Open source, secure, low-cost, lightning fast and decentralized.
          </div>
        </div>

        <!-- links -->
        <div
          class="button-container flex justify-between relative my-3 w-full sm:my-6 sm:w-[344px] md:w-[380px] lg:w-[440px]"
        >
          <div class="flex flex-[0_0_48%] h-12 cursor-pointer overflow-hidden text-sm md:flex-[0_0_47%] md:h-[60px] lg:text-xl">
            <a 
              class="flex justify-center items-center w-full h-full border-2 border-primary rounded-xl bg-primary text-white hover:bg-hover hover:border-hover hover:text-primary" 
              href="https://mvm.dev"
            >
              Developer Docs
            </a>
          </div>
          <div class="flex flex-[0_0_48%] h-12 cursor-pointer overflow-hidden text-sm md:flex-[0_0_47%] md:h-[60px] lg:text-xl">
            <a 
              class="flex justify-center items-center w-full h-full border-2 border-primary rounded-xl text-primary hover:bg-hover hover:border-hover hover:text-primary" 
              href="https://bridge.mvm.app"
            >
              Bridge to MVM
            </a>
          </div>
        </div>

        <!-- status -->
        <div class="flex flex-wrap justify-between relative w-full">
          <feature-box
            v-for="(feature, i) of features"
            :key="i"
            :title="feature.title"
            :content="feature.content"
          />
        </div>
      </div>
  </div>
</template>

<script>
import FeatureBox from "@/components/FeatureBox";
import background from "@/static/bg.png";
import { getMvmTvl } from "@/helpers/api";
import { toThousands } from "@/helpers/utils";

export default {
  name: "Home",
  components: { FeatureBox },
  props: {
    eth: {
      type: String,
    },
  },
  data() {
    return {
      background,
      tvl: this.eth,
    };
  },
  mounted() {
    this.updateTvl();
  },
  computed: {
    features() {
      const tvlString = `$${toThousands(Math.floor(Number(this.tvl)).toString())}`;
      return [
        {
          title: "1 sec",
          content: "Transaction Finality",
        },
        {
          title: "< $0.01",
          content: "Fee",
        },
        {
          title: "44",
          content: "Connected Chains",
        },
        {
          title: tvlString,
          content: "Total Value Locked",
        },
      ];
    },
  },
  fetchOnServer: false,
  async fetch() {
    setInterval(async () => {
      await this.updateTvl();
    }, 1000 * 60);
  },
  methods: {
    async updateTvl() {
      const tvl = await getMvmTvl();
      this.tvl = tvl.toString();
    },
  },
};
</script>