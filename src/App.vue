<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import 'mint-ui/lib/style.css';
@import './scss/variate.scss';
* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px;
  padding: 0px;
}
body,
html {
  width: 100%;
  height: 100%;
  font-size: px2rem(22);
}
.mint-msgbox {
  width: 50%;
}
</style>
