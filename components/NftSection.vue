<template>
  <div class="flex justify-center items-center pt-[160px] pb-[88px] px-3 md:pt-[300px] md:pb-[172px] md:px-9">
    <div class="flex flex-col items-center w-full">
      <div class="mb-16 px-3 w-full font-bold text-[32px] leading-[130%] sm:px-0 sm:w-[632px] sm:text-[50px] sm:leading-[72px] md:mb-[162px] md:w-full md:text-center">
        <span class="text-primary">{{ $t("nfts.title1") }}</span>{{ $t("nfts.title2") }}
      </div>

      <div class="flex flex-row flex-wrap justify-between w-full max-w-[1610px]">
        <div
          v-for="(img, i) in list"
          :key="i"
          :class="[
            'relative flex-[0_0_31%] mb-3 rounded-lg overflow-hidden md:block md:flex-[0_0_13%] md:mb-7',
            i > 11 ? 'hidden' : ''
          ]"
        >
          <img 
            class="w-full"
            :src="img.src"
            :alt="img.alt"
          />
          <div 
            class="absolute top-0 right-0 w-full bg-black/50 text-center text-sm font-bold leading-[150%] text-white xl:top-2.5 xl:right-2.5 xl:px-2.5 xl:w-fit xl:text-lg xl:rounded"
          >{{ img.type }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lotusGang from "@/assets/images/nft/lotus_gang.webp";
import degentoonz from "@/assets/images/nft/degentoonz.webp";
import ape from "@/assets/images/nft/bayc.webp";
import eagle from "@/assets/images/nft/cryptoninja_eagle.webp";
import lion from "@/assets/images/nft/lazy_lion.webp";
import clonex from "@/assets/images/nft/clone_x.webp";
import star1 from "@/assets/images/nft/Starcatchers.webp";
import renga from "@/assets/images/nft/renga.webp";
import angryCat from "@/assets/images/nft/angry_cat.webp";
import gu from "@/assets/images/nft/genuine_undead.webp";
import penguine1 from "@/assets/images/nft/pudgy_penguins1.webp";
import penguine2 from "@/assets/images/nft/pudgy_penguins2.webp";
import gutterCatGang from "@/assets/images/nft/gutter_cat_gang.webp";
import panda from "@/assets/images/nft/cryptoninja_panda.webp";
import woman from "@/assets/images/nft/woman.webp";
import castaways from "@/assets/images/nft/castaways.webp";
import boxcat from "@/assets/images/nft/boxcat.webp";
import bananos from "@/assets/images/nft/bananos.webp";
import degod from "@/assets/images/nft/degod.webp";
import mimic from "@/assets/images/nft/mimic.webp";
import y00t from "@/assets/images/nft/y00t.webp";

export default {
  name: "NftSection",
  data() {
    return {
      list: [
        {
          src: boxcat,
          alt: "boxcat planet",
          type: "ERC 721"
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
          type: "ERC 721"
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
          src: mimic,
          alt: "Mimic Shhans",
          type: "ERC 1155"
        },
        {
          src: bananos,
          alt: "Bananos M1",
          type: "ERC 1155"
        },
        {
          src: renga,
          alt: "renga",
          type: "ERC 721"
        },
        {
          src: y00t,
          alt: "y00t",
          type: "Solana"
        },
        {
          src: angryCat,
          alt: "AngryCat",
          type: "ERC 721"
        },
        {
          src: gu,
          alt: "Genuine Undead",
          type: "ERC 721"
        },
        {
          src: degod,
          alt: "Degod",
          type: "Solana"
        },
        {
          src: gutterCatGang,
          alt: "Gutter Cat Gang",
          type: "ERC 721"
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