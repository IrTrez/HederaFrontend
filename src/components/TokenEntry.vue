<template>
<div class="card">
    <p>token name: {{name}}</p>
</div>
</template>

<script>

export default {
    name: "TokenEntry",
  components: {
  },
  props:{
      name: String
  }

};
</script>
<style lang="scss">
    .card {
        padding: 60px;
        background: grey;
    }
</style>