<template>
  <div class="cartTotal">
    <div class="checkAll" @click="totalAll">
      <div class="check">
        <div class="check-in" v-if='checkAll'></div>
      </div>
      <span>全选</span>
    </div>
    <div class="total">
      <span>合计：</span>
      <span class="red" v-text='total'>12323</span>
    </div>
    <div class="subment">
      <span @click="accounts">结算(</span>
      <span v-text="count"></span>
      <span>)</span>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'cartTotal',
  data() {
    return {}
  },
  methods: {
    ...mapMutations(['setTotal', 'setCount', 'setCheck', 'setOrder']),
    totalAll() {
      let checks = !this.checkAll
      this.setCheck(checks)
      let counts = 0
      let total = 0
      this.cartData.forEach(element => {
        element.hid = checks
        element.goods.forEach(item => {
          item.hid = checks
          if (item.hid === true) {
            total += parseInt(item.price) * parseInt(item.num)
            ++counts
            this.setTotal(total)
            this.setCount(counts)
          } else {
            this.setTotal(0)
            this.setCount(0)
          }
        })
      })
    },
    accounts() {
      let goods = []
      this.cartData.forEach(element => {
        element.goods.forEach(item => {
          if (item.hid === true) {
            goods.push(item)
          }
        })
      })
      if (goods.length === 0) {
        alert('请选择你要结算的商品')
      } else {
        this.setOrder(goods)
        this.$router.push({
          path: '/cartOrder',
          name: 'cartOrder'
        })
      }
    }
  },
  computed: {
    ...mapState(['cartData', 'total', 'count', 'checkAll'])
  },
  mounted() {
    this.setTotal(0)
    this.setCount(0)
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/variate.scss';
.cartTotal {
  width: 100%;
  height: px2rem(80);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .checkAll {
    display: flex;
    align-items: center;
  }
  .total {
    margin-left: px2rem(20);
  }
  .subment {
    background: linear-gradient(left, #920757, #f51c5a);
    color: #fff;
    height: px2rem(80);
    line-height: px2rem(80);
    padding: 0 px2rem(20);
  }
  .red {
    color: #ec1a5a;
  }
}
.check {
  width: px2rem(40);
  height: px2rem(40);
  border-radius: px2rem(20);
  border: 1px solid #ccc;
  margin: 0 px2rem(15);
  display: flex;
  justify-content: center;
  align-items: center;
  .check-in {
    width: px2rem(35);
    height: px2rem(35);
    background: #ec1a5a;
    background-image: url('../../assets/ok@3x.png');
    background-size: px2rem(25) px2rem(20);
    background-position-x: px2rem(5);
    background-position-y: px2rem(7);
    background-repeat: no-repeat;
    border-radius: px2rem(35);
  }
}
</style>
