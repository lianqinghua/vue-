<template>
  <div id="startup">
    <div class="start" v-if="hid">
      <div class="container">
        <div class="center">
          <img src="@/assets/logo.png" alt="logo">
          <img src="@/assets/slogan.png" alt="标语">
        </div>
      </div>
    </div>
    <mt-swipe :auto="0">
      <mt-swipe-item>
        <div class="start" name='info'>
          <div class="container" style='background:linear-gradient(#7efe52, #1ac853)'>
            <img src="@/assets/banner1.jpg" alt="">
          </div>
        </div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="start" name='info'>
          <div class="container" style='background:linear-gradient(#f98138, #e91c1c)'>
            <img src="@/assets/banner2.jpg" alt="">
          </div>
        </div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="start" name='info'>
          <div class="container" style='background:linear-gradient(#16e4f1, #156ff6)'>
            <img src="@/assets/banner3.jpg" alt="">
          </div>
        </div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui'

export default {
  name: 'startup',
  data() {
    return {
      hid: true
    }
  },
  methods: {},
  computed: {},
  mounted() {
    this.component(Swipe.name, Swipe)
    this.component(SwipeItem.name, SwipeItem)
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/variate.scss';
#startup {
  width: 100%;
  height: 100%;
  .start {
    height: 100%;
    background: linear-gradient(#f71c5a, #900758);
    .container {
      height: 100%;
      background-image: url('../assets/ind_bg.png');
      display: flex;
      justify-content: center;
      align-items: center;
      .center {
        width: 340px;
      }
    }
  }
}
</style>
