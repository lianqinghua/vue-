<template>
  <div class="addr">
    <div class="addr-border"></div>
    <div class="addr-center">
      <div class="name">
        <span class="wid">收货人：</span>
        <span>张三</span>
      </div>
      <div class="phone">
        <span class="wid">联系方式：</span>
        <span>1707273837</span>
      </div>
      <div class="addres">
        <span class="wid">收货地址：</span>
        <span>北京 北京昌平区 建材城西路金燕龙办 公楼二楼210室</span>
      </div>
    </div>
    <div class="addr-border"></div>
  </div>
</template>
<script>
export default {
  name: 'addr',
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.addr {
  background: #fff;
  .addr-border {
    height: px2rem(20);
    background-image: url('../../assets/border-bg.jpg');
  }
  .addr-center {
    padding: px2rem(15) px2rem(25);
    font-size: px2rem(28);
    span {
      display: inline-block;
      width: px2rem(500);
      margin-top: px2rem(10);
    }
    .wid {
      display: inline-block;
      width: px2rem(140);
      vertical-align: top;
    }
  }
}
</style>
