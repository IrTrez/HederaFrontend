<template>
  <nav>
    <router-link to="/">Home </router-link>
    <div id="spacer"></div>
    <router-link to="/about">About </router-link>
    <router-link to="/market"> Market </router-link>
    <router-link to="/mytokens"> My Tokens </router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

nav {
  display: flex;
  flex-direction: row;
  // flex-grow: 1;


  #spacer {
    flex-grow: 1;
  }
  a {
    // background: red;
    padding: 10px;
    font-weight: bold;
    color: #2c3e50;
    padding-right: 30px;
    font-size: 20px;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
