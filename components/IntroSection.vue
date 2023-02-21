<template>
  <div
      class="relative pt-[72px] h-screen background sm:pt-[100px]"
    >
      <div 
        :class="[
          'flex flex-col justify-evenly items-start mx-auto px-6 w-full h-full sm:justify-evenly sm:px-0 sm:pb-2',
          'sm:min-h-[400px] sm:max-h-[580px] sm:w-[632px] md:min-h-[580px] md:max-h-[750px] md:w-[852px] lg:max-h-[900px] lg:min-h-[700px] lg:w-[1280px]'
        ]">
        <!-- title -->
        <div class="relative w-full h-auto">
          <div
            class="relative w-full font-bold text-[32px] leading-[130%] tracking-[-0.4px] sm:text-4xl md:text-5xl lg:text-[56px] "
          >
            <div class="text-primary">{{ $t('intro.title1') }}</div>
            <div>{{ $t('intro.title2') }}</div>
          </div>

          <img 
            class="mx-auto max-w-[500px] w-full h-auto select-none sm:absolute sm:-right-20 sm:-top-6 sm:max-w-none sm:w-auto sm:h-[300px] md:-top-8 md:h-[380px] lg:-top-24 lg:h-[500px]"
            :src="background"
            alt="background-image"
          />

          <div
            :class="[
              'font-normal text-sm leading-[130%] text-black/60 sm:static sm:mt-6 sm:w-[380px] sm:text-base md:w-[500px] md:text-lg lg:w-[700px] lg:text-xl',
              $i18n.locale === 'zh' ? 'mt-[18px]' : 'mt-1'
            ]"
          >
            {{ $t('intro.subTitle') }}
          </div>
        </div>

        <!-- links -->
        <div
          :class="[
            'flex justify-between w-full my-5 sm:my-0 sm:w-[344px] md:w-[380px] lg:w-[447px]',
            $i18n.locale === 'zh' ? 'my-5' : 'my-1 link-container'
          ]"
        >
          <div 
            v-for="(l, i) in links"
            :key="i"
            class="flex flex-[0_0_48%] h-12 cursor-pointer overflow-hidden md:flex-[0_0_47%] md:h-[60px]"
          >
            <a 
              :class="[
                'flex justify-center items-center w-full h-full font-normal text-sm leading-5 border-2 border-primary rounded-xl sm:text-base md:text-lg lg:text-xl',
                i === 0 
                  ? 'bg-primary text-white hover:bg-hover hover:border-hover hover:text-primary'
                  : 'text-primary hover:bg-hover hover:border-hover hover:text-primary'
              ]" 
              :href="l.href"
            >
              {{ l.text }}
            </a>
          </div>
        </div>

        <div class="flex flex-wrap justify-between w-full">
          <FeatureBox
            v-for="(feature, i) of features"
            :key="i"
            :box-style="[
              boxStyle,
              i < 2 ? 'flex sm:flex' : 'hidden sm:flex'
            ]"
            :title="feature.title"
            :content="feature.content"
          />
        </div>
        <div class="flex flex-wrap justify-between w-full sm:hidden">
          <feature-box
            v-for="(feature, i) of features.slice(2)"
            :key="i"
            :box-style="[
              boxStyle,
              'flex'
            ]"
            :title="feature.title"
            :content="feature.content"
          />
        </div>
      </div>
  </div>
</template>

<script>
import { FixedNumber, utils } from "ethers";
import FeatureBox from "@/components/FeatureBox.vue";
import background from "@/assets/images/bg.png";
import { toThousands } from "@/helpers/utils";
import { ETH_ASSET_ID, LOCK_ADDRESS, WHITELIST_ASSET } from "@/helpers/constant/common";

export default {
  name: "Home",
  components: { FeatureBox },
  props: {
    initTvl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      boxStyle:"flex-[0_0_48%] flex-col justify-center items-center py-2 bg-white shadow-mvm rounded-xl box-border text-center sm:flex-[0_0_23.5%] sm:p-0 sm:h-20 md:h-[100px] lg:h-[142px]",
      background,
      tvl: this.initTvl,
      links: [
        {
          href: "https://mvm.dev",
          text: this.$t('intro.doc')
        },
        {
          href: "https://bridge.mvm.app",
          text: this.$t('intro.bridge')
        }
      ]
    };
  },
  mounted() {
    this.updateTvl();
  },
  computed: {
    features() {
      const tvlString = `$${toThousands(Math.floor(Number(this.tvl)).toString())}`;
      const titleStyle = "font-bold text-lg leading-[27px] text-black/80 md:text-[22px] lg:text-3xl lg:leading-[45px]";
      const contentStyle = "mt-1.5 font-normal text-sm leading-[130%] text-black/60 md:text-base lg:text-lg";
      return [
        {
          title: {
            text: "1 sec",
            style: titleStyle
          },
          content: {
            text: this.$t("intro.features.feature1"),
            style: contentStyle
          }
        },
        {
          title: {
            text: "< $0.01",
            style: titleStyle
          },
          content: {
            text: this.$t("intro.features.feature2"),
            style: contentStyle
          }
        },
        {
          title: {
            text: "44",
            style: titleStyle
          },
          content: {
            text: this.$t("intro.features.feature3"),
            style: contentStyle
          }
        },
        {
          title: {
            text: tvlString,
            style: titleStyle
          },
          content: {
            text: this.$t("intro.features.feature4"),
            style: contentStyle
          }
        },
      ];
    },
  },
  methods: {
    async fetchEthSupply() {
      const supplyResp = await this.$axios.$get(`https://scan.mvm.dev/api?module=stats&action=ethsupply`);
      const lockedSupply = await this.$axios.$get(`https://scan.mvm.dev/api?module=account&action=balance&address=${LOCK_ADDRESS}`);
      return FixedNumber.from(utils.formatEther(supplyResp.result))
        .subUnsafe(FixedNumber.from(utils.formatEther(lockedSupply.result)))
        .toString();
    },
    async fetchMixinAssets(whiteList) {
      const mixinAssetsResponse = await this.$axios.$get('https://scan.mvm.dev/api?module=token&action=getMixinAssets');
      const mixinAssets = mixinAssetsResponse.result.filter(asset => whiteList.includes(asset.mixinAssetId));
      return mixinAssets;
    },
    async fetchMvmToken(address) {
      const token = await this.$axios.$get(`https://scan.mvm.dev/api?module=token&action=getToken&contractaddress=${address}`);
      return token.result;
    },
    async updateTvl() {
      const WHITELIST_ASSET_ID = WHITELIST_ASSET.map((asset) => asset.id);  

      const [ethSupply, mixinAssets] = await Promise.all([
        this.fetchEthSupply(),
        this.fetchMixinAssets(WHITELIST_ASSET_ID),
      ]);

      const mixinTokens = await Promise.all(
        mixinAssets.map(a => this.fetchMvmToken(a.contractAddress))
      );

      const tvl = mixinAssets.reduce((prev, curr, i) => {
        if (curr.mixinAssetId === ETH_ASSET_ID) {
          return prev.addUnsafe(FixedNumber.from(curr.priceUSD).mulUnsafe(FixedNumber.from(ethSupply)));
        }

        try {
          const price = FixedNumber.from(curr.priceUSD);
          const supply = FixedNumber.from(utils.formatUnits(mixinTokens[i].totalSupply, curr.decimals).toString());
          return prev.addUnsafe(price.mulUnsafe(supply))
        } catch(e) {
          return prev.addUnsafe(FixedNumber.from('0'));
        }
      }, FixedNumber.from('0'));

      this.tvl = tvl.toString();
    },
  },
};
</script>

<style>
@media screen and (max-width: 719px) and (min-height: 690px) {
  .link-container {
    margin: 16px 0;
  }
}
</style>