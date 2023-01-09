<template>
  <div class="flex justify-center items-center mt-[130px] px-6 sm:mt-[261px] sm:px-0 ">
    <div class="flex flex-col items-center w-full sm:w-[632px] md:w-[852px] lg:w-[1200px]">
      <div class="mb-16 w-full font-bold text-[32px] leading-[130%] sm:mb-[164px] sm:text-[50px] sm:text-center">
        <span class="text-primary">{{ $t("nfts.title1") }}</span>{{ $t("nfts.title2") }}
      </div>

      <div class="flex flex-row flex-wrap justify-between w-full">
        <div
          v-for="(img, i) in list"
          :key="i"
          :class="[
            'relative flex-[0_0_31%] mb-3 sm:block sm:flex-[0_0_13%] sm:mb-7',
            i > 11 ? 'hidden' : ''
          ]"
        >
          <img 
            class="w-full"
            :src="img.src"
            :alt="img.alt"
          />
          <div 
          class="absolute top-0 right-0 w-full bg-black/50 rounded text-center text-sm font-bold leading-[150%] text-white lg:top-2.5 lg:right-2.5 lg:px-2.5 lg:w-fit lg:text-lg"
          >{{ img.type }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lotusGang from "@/assets/images/lotus_gang.png";
import degentoonz from "@/assets/images/degentoonz.png";
import ape from "@/assets/images/ape.png";
import eagle from "@/assets/images/cryptoninja_eagle.png";
import lion from "@/assets/images/lazy_lion.png";
import clonex from "@/assets/images/clone_x.png";
import star1 from "@/assets/images/Starcatchers1.png";
import star2 from "@/assets/images/Starcatchers2.png";
import renga from "@/assets/images/renga.png";
import seaman from "@/assets/images/seaman.png";
import angryCat from "@/assets/images/angry_cat.png";
import gu from "@/assets/images/genuine_undead.png";
import penguine1 from "@/assets/images/pudgy_penguins1.png";
import penguine2 from "@/assets/images/pudgy_penguins2.png";
import gutterCatGang from "@/assets/images/gutter_cat_gang.png";
import panda from "@/assets/images/cryptoninja_panda.png";
import woman from "@/assets/images/woman.png";
import castaways from "@/assets/images/castaways.png";

export default {
  name: "NftSection",
  data() {
    return {
      list: [
        {
          src: lotusGang,
          alt: "lotus gang",
          type: "SOLANA"
        },
        {
          src: degentoonz,
          alt: "degentoonz",
          type: "ERC 721"
        },
        {
          src: lotusGang,
          alt: "lotus gang",
          type: "SOLANA"
        },
        {
          src: ape,
          alt: "ape",
          type: "ERC 721"
        },
        {
          src: eagle,
          alt: "cryptoninja partner",
          type: "ERC 721"
        },
        {
          src: lion,
          alt: "lazy lion",
          type: "ERC 1155"
        },
        {
          src: clonex,
          alt: "Clone-X",
          type: "ERC 721"
        },
        {
          src: star1,
          alt: "Starcatchers",
          type: "ERC 721"
        },
        {
          src: star2,
          alt: "Starcatchers",
          type: "ERC 721"
        },
        {
          src: star1,
          alt: "Starcatchers",
          type: "ERC 721"
        },
        {
          src: renga,
          alt: "renga",
          type: "FLOW"
        },
        {
          src: seaman,
          alt: "seaman",
          type: "ERC 721"
        },
        {
          src: angryCat,
          alt: "AngryCat",
          type: "ERC 1155"
        },
        {
          src: gu,
          alt: "Genuine Undead",
          type: "ERC 1155"
        },
        {
          src: penguine1,
          alt: "Pudgy Penguins",
          type: "ERC 721"
        },
        {
          src: gutterCatGang,
          alt: "Gutter Cat Gang",
          type: "FLOW"
        },
        {
          src: penguine1,
          alt: "Pudgy Penguins",
          type: "ERC 721"
        },
        {
          src: panda,
          alt: "cryptoninja partner",
          type: "ERC 721"
        },
        {
          src: woman,
          alt: "woman",
          type: "ERC 721"
        },
        {
          src: penguine2,
          alt: "Pudgy Penguins",
          type: "ERC 721"
        },
        {
          src: castaways,
          alt: "Castaways",
          type: "ERC 721"
        },
      ]
    }
  }
}
</script>