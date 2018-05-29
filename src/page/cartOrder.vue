<template>
  <div id="cartOrder">
    <commonHeader comTitle='订单结算'>
      <div class="left" slot="left">
        <router-link to='/cart'>
          <div class="retreat"></div>
        </router-link>
      </div>
    </commonHeader>
    <div id="addr">
      <addr></addr>
    </div>
    <div id="cartList">
      <orderList></orderList>
    </div>
    <div id="total">
      <orderTotal></orderTotal>
    </div>
  </div>
</template>
<script>
import commonHeader from '@/components/header'
import addr from '@/components/order/addr'
import orderList from '@/components/order/orderList'
import orderTotal from '../components/order/orderTotal'
export default {
  name: 'cartOrder',
  components: { commonHeader, addr, orderList, orderTotal },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
#cartOrder {
  height: 100%;
  overflow: hidden;
  background: #eee;
  .retreat {
    width: px2rem(30);
    height: px2rem(30);
    border-left: px2rem(4) solid #fff;
    border-bottom: px2rem(4) solid #fff;
    transform: rotate(45deg);
  }
  #addr {
    position: absolute;
    width: 100%;
    top: px2rem(80);
  }
  #cartList {
    position: absolute;
    width: 100%;
    top: px2rem(340);
    bottom: px2rem(90);
    overflow: auto;
  }
  #total {
    position: absolute;
    bottom: 0;
    z-index: 999;
    width: 100%;
    background: #fff;
  }
}
</style>
