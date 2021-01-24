<template>
    <div>
        <div class="filterBar">Filters etc</div>
        <div class="displayTokens">
            <TokenEntry :key="token.id" v-for="token in tokens" :name="token.name"></TokenEntry>
        </div>
    </div>
</template>

<script>
import TokenEntry from "@/components/TokenEntry.vue";

export default {
    name: "Market",
  components: {
    TokenEntry
  },
  data() {
      return {
          tokens: [{name:"token1", id:1}, {name:"token2", id:2}, {name:"token3", id:3}]
      }
  },
};
</script>
<style lang="scss">
    .filterBar {
        width: 100%;
        background: red;
        height:50px;

    }
    .displayTokens {
        margin-top: 5px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 5px;
        grid-column-gap: 5px;
    }
</style>