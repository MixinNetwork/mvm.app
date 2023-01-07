<template>
  <div class="w-full">
    <div class="mt-[100px] mb-[60px] px-6 w-full font-bold text-[32px] leading-[130%] sm:mb-[180px] sm:p-0 sm:text-[50px] sm:text-center">
      <span class="text-primary">{{ $t("assets.title1") }}</span>{{ $t("assets.title2") }}
    </div>
    
    <div class="flex flex-col items-center w-full h-[156px] overflow-x-hidden sm:h-[384px]">
      <div 
        v-for="(row, i) in iconList" 
        :key="i"
        :class="[
          'relative mb-4 w-[675px] whitespace-nowrap sm:mb-10 sm:w-[1320px] lg:w-[1675px]',
          offset[i]
        ]" 
      >
        <img 
          class="inline-block mr-3 w-9 sm:mr-[28px] sm:w-[66px] lg:mr-[34px] lg:w-[88px]" 
          v-for="icon in row" 
          :key="icon.alt"
          :src="icon.src" 
          :alt="icon.alt" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import btcsv from "@/assets/icons/btcsv.png";
import btc from "@/assets/icons/btc.png";
import rvn from "@/assets/icons/rvn.png";
import eos from "@/assets/icons/eos.png";
import bnb from "@/assets/icons/bnb.png";
import bts from "@/assets/icons/bts.png";
import akash from "@/assets/icons/akash.png";
import eth from "@/assets/icons/eth.png";
import ar from "@/assets/icons/ar.png";
import atom from "@/assets/icons/atom.png";
import zen from "@/assets/icons/zen.png";
import dot from "@/assets/icons/dot.png";
import ckb from "@/assets/icons/ckb.png";
import zec from "@/assets/icons/zec.png"; 
import ksm from "@/assets/icons/ksm.png";
import dash from "@/assets/icons/dash.png";
import algo from "@/assets/icons/algo.png";
import dcr from "@/assets/icons/dcr.png";
import ltc from "@/assets/icons/ltc.png";
import alpaca from "@/assets/icons/alpaca.png";
import mob from "@/assets/icons/mob.png";
import xmr from "@/assets/icons/xmr.png";
import near from "@/assets/icons/near.png";
import sc from "@/assets/icons/sc.png";
import sol from "@/assets/icons/sol.png";
import nmc from "@/assets/icons/nmc.png";
import xtz from "@/assets/icons/xtz.png";
import trx from "@/assets/icons/trx.png";
import v from "@/assets/icons/v.png";
import nem from "@/assets/icons/nem.png";
import xlm from "@/assets/icons/xlm.png";
import xrp from "@/assets/icons/xrp.png";
import doge from "@/assets/icons/doge.png";
import etc from "@/assets/icons/etc.png";

export default {
  name: "AssetsSection",
  data() {
    return {
      offset: {
        0: "-left-2.5 sm:-left-7",
        1: "left-2.5 sm:left-7",  
        2: ""
      },
      imgStyle: "mr-3 w-9 md:mr-[20px] md:w-[44px] md:mr-[28px] md:w-[66px] lg:mr-[34px] lg:w-[88px]",
      iconList: [
        [
          {src: btcsv, alt: "btcsv"},
          {src: btc, alt: "btc"},
          {src: rvn, alt: "rvn"},
          {src: btcsv, alt: "btcsv"},
          {src: btc, alt: "btc"},
          {src: eos, alt: "eos"},
          {src: bnb, alt: "bnb"},
          {src: bts, alt: "bts"},
          {src: akash, alt: "akash"},
          {src: eth, alt: "eth"},
          {src: ar, alt: "ar"},
          {src: atom, alt: "atom"},
          {src: zen, alt: "zen"},
          {src: eth, alt: "eth"}
        ],
        [
          {src: dot, alt: "dot"},
          {src: ckb, alt: "ckb"},
          {src: zec, alt: "zec"},
          {src: dot, alt: "dot"},
          {src: ksm, alt: "ksm"},
          {src: dash, alt: "dash"},
          {src: algo, alt: "algo"},
          {src: dcr, alt: "dcr"},
          {src: ltc, alt: "ltc"},
          {src: alpaca, alt: "alpaca"},
          {src: mob, alt: "mob"},
          {src: xmr, alt: "xmr"},
          {src: near, alt: "near"},
          {src: alpaca, alt: "alpaca"}
        ],
        [
          {src: sc, alt: "sc"},
          {src: sol, alt: "sol"},
          {src: nmc, alt: "nmc"},
          {src: sc, alt: "sc"},
          {src: sol, alt: "sol"},
          {src: xtz, alt: "xtz"},
          {src: trx, alt: "trx"},
          {src: v, alt: "v"},
          {src: nem, alt: "nem"},
          {src: xlm, alt: "xlm"},
          {src: xrp, alt: "xrp"},
          {src: doge, alt: "doge"},
          {src: etc, alt: "etc"},
          {src: xlm, alt: "xlm"}
        ]
      ]
    }
  },
}
</script>