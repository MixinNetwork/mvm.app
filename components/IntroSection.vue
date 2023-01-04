<template>
  <div
      class="main relative mx-auto pb-2 px-6 w-full sm:p-0 sm:w-[632px] md:w-[852px] lg:w-[1200px]"
    >
      <div
        class="flex justify-center w-full sm:w-auto sm:absolute sm:-top-14 sm:-right-20 sm:h-[300px] md:h-[380px] md:-top-14 lg:h-[530px] lg:-top-[95px]"
      >
        <img
          class="w-full select-none sm:w-auto sm:h-full"
          :src="background"
          alt="background-image"
        />
      </div>

      <div>
        <!-- title -->
        <div
          class="relative w-full font-bold text-[30px] sm:text-[32px] md:text-[40px] lg:text-[56px] leading-[130%]"
        >
          <div class="text-primary">Cross-Chain</div>
          <div>Smart Contracts Platform</div>
        </div>
        <div
          class="relative mt-2.5 text-sm opacity-60 sm:mt-3 sm:w-[400px] md:text-base md:mt-6 md:w-[500px] lg:mt-6 lg:text-xl lg:w-[700px]"
        >
          Open source, secure, low-cost, lightning fast and decentralized.
        </div>

        <!-- links -->
        <div
          class="button-container flex justify-between relative my-6 sm:w-[344px] md:w-[380px] lg:w-[440px]"
        >
          <div class="btn">
            <a class="primary-btn" href="https://mvm.dev">Developer Docs</a>
          </div>
          <div class="btn">
            <a class="default-btn" href="https://bridge.mvm.app"
              >Bridge to MVM</a
            >
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