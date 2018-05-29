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
* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px;
  padding: 0px;
}
body,
html,
#app {
  width: 100%;
  height: 100%;
  font-size: px2rem(22);
}
.mint-msgbox {
  width: 50%;
}
.mint-swipe-indicator {
  width: 25px;
  height: 25px;
  margin: px2rem(10);
}
</style>
