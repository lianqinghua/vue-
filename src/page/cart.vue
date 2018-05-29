<template>
  <div class="container">
    <commonHeader comTitle="购物车" hid='1'></commonHeader>
    <div class="content">
      <cartList></cartList>
    </div>
    <div id="total">
      <cartTotal></cartTotal>
    </div>
    <commonfooter :switch='3'></commonfooter>
  </div>
</template>
<script>
import commonHeader from '../components/header.vue'
import commonfooter from '../components/footer.vue'
import cartList from '../components/cart/cartList.vue'
import cartTotal from '../components/cart/cartTotal.vue'
export default {
  name: 'cart',
  components: { commonHeader, commonfooter, cartList, cartTotal },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.content {
  position: absolute;
  width: 100%;
  top: px2rem(80);
  bottom: px2rem(180);
  overflow: auto;
  background: #eee;
}
#total {
  position: absolute;
  bottom: px2rem(99);
  z-index: 999;
  width: 100%;
}
</style>
