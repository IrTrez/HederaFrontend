<template>
    <div>
        <div class="createTokenArea">
            <div class="createTokenButton" @click="createNewToken()">New token</div>
        </div>
        <div class="currentTokens">
            <div>List of current tokens here.</div>
        </div>
    </div>
</template>

<script>
export default {
      name: "Mytokens",
  components: {
    // HelloWorld
  },
  methods: {
      createNewToken(){
          this.$router.push({name: 'NewToken'})
          console.log("hey")
      }
  },
};
</script>
<style lang="scss">
    .createTokenArea{
        padding-top: 30px;

        .createTokenButton {
            color: white;
            background: blueviolet;
            width: 100px;
            padding: 20px;
            font-size: 20px;
        }
        .createTokenButton:hover {
            background: darkviolet;
        }
    }
    .currentTokens {
        margin-top: 20px;
        background: lightgray;
        height: 70vh;
    }
</style>
