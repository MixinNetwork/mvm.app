<template>
  <div class="pt-[100px] pb-[60px] w-full sm:pt-[140px] sm:pb-[130px]">
    <div class="mb-[60px] px-6 w-full font-bold text-[32px] leading-[130%] sm:p-0 sm:text-[50px] sm:text-center">
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
import stc from "@/assets/icons/stc.webp";
import btcsv from "@/assets/icons/btcsv.webp";
import btc from "@/assets/icons/btc.webp";
import rvn from "@/assets/icons/rvn.webp";
import eos from "@/assets/icons/eos.webp";
import bnb from "@/assets/icons/bnb.webp";
import bts from "@/assets/icons/bts.webp";
import akash from "@/assets/icons/akash.webp";
import polygon from "@/assets/icons/polygon.webp";
import eth from "@/assets/icons/eth.webp";
import ar from "@/assets/icons/ar.webp";
import atom from "@/assets/icons/atom.webp";
import zen from "@/assets/icons/zen.webp";
import avax from "@/assets/icons/avax.webp";
import tribe from "@/assets/icons/tribe.webp";
import dot from "@/assets/icons/dot.webp";
import ckb from "@/assets/icons/ckb.webp";
import zec from "@/assets/icons/zec.webp"; 
import ksm from "@/assets/icons/ksm.webp";
import dash from "@/assets/icons/dash.webp";
import algo from "@/assets/icons/algo.webp";
import dcr from "@/assets/icons/dcr.webp";
import ltc from "@/assets/icons/ltc.webp";
import alpaca from "@/assets/icons/alpaca.webp";
import ton from "@/assets/icons/ton.webp";
import hmt from "@/assets/icons/hmt.webp";
import mob from "@/assets/icons/mob.webp";
import xmr from "@/assets/icons/xmr.webp";
import near from "@/assets/icons/near.webp";
import sc from "@/assets/icons/sc.webp";
import sol from "@/assets/icons/sol.webp";
import nmc from "@/assets/icons/nmc.webp";
import xtz from "@/assets/icons/xtz.webp";
import trx from "@/assets/icons/trx.webp";
import v from "@/assets/icons/v.webp";
import p from "@/assets/icons/p.webp";
import nem from "@/assets/icons/nem.webp";
import xlm from "@/assets/icons/xlm.webp";
import xrp from "@/assets/icons/xrp.webp";
import doge from "@/assets/icons/doge.webp";
import etc from "@/assets/icons/etc.webp";

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
          {src: stc, alt: "stc"},
          {src: btc, alt: "btc"},
          {src: rvn, alt: "rvn"},
          {src: btcsv, alt: "btcsv"},
          {src: eth, alt: "eth"},
          {src: eos, alt: "eos"},
          {src: bnb, alt: "bnb"},
          {src: bts, alt: "bts"},
          {src: akash, alt: "akash"},
          {src: polygon, alt: "polygon"},
          {src: ar, alt: "ar"},
          {src: atom, alt: "atom"},
          {src: zen, alt: "zen"},
          {src: avax, alt: "avax"}
        ],
        [
          {src: tribe, alt: "tribe"},
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
          {src: ton, alt: "ton"},
          {src: hmt, alt: "hmt"},
          {src: nmc, alt: "nmc"},
          {src: sc, alt: "sc"},
          {src: sol, alt: "sol"},
          {src: xtz, alt: "xtz"},
          {src: trx, alt: "trx"},
          {src: v, alt: "v"},
          {src: nem, alt: "nem"},
          {src: xlm, alt: "xlm"},
          {src: p, alt: "p"},
          {src: doge, alt: "doge"},
          {src: etc, alt: "etc"},
          {src: xrp, alt: "xrp"}
        ]
      ]
    }
  },
}
</script>