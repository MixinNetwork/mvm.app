<template>
  <Home :tvl="tvl" />
</template>

<script lang="ts">
import Vue from 'vue';
import { getMvmTvl } from "~/helpers/api";

export default Vue.extend({
  name: 'index',
  async asyncData() {
    const tvl = await getMvmTvl();
    return {
      tvl: tvl.toString()
    }
  }
})
</script>
