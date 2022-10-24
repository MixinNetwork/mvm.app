<template>
  <Home :eth="tvl" />
</template>

<script lang="ts">
import Vue from "vue";
import { getEthValue } from "~/helpers/api";

export default Vue.extend({
  name: "Index",
  async asyncData() {
    const tvl = await getEthValue();
    return {
      tvl: tvl.toString(),
    };
  },
});
</script>
