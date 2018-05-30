<template>
  <div id="details">
    <div class="container">
      <div class="image">

        <div class="back" @click="res()">
          <div class="back-in"></div>
        </div>

        <img :src='goods.img' alt="">
      </div>
      <div class="center">
        <div class="tab">
          <div class="icon mgtop"></div>
          <div class="title mgtop" v-text="goods.name">歌莉娅女装 2016冬装新款 连衣帽针织衫 显瘦身 </div>
          <p class="mgtop">100%正品保证 按时发货 极速退款 7天无理由退换货</p>
        </div>
        <div class="tab price">
          <span class="oldprice" v-text="goods.oldprice">1232</span>
          <span class="red new" v-text="goods.price">1231</span>
          <span class="sales red">月销
            <span v-text="goods.monSales">899</span>
            笔</span>
        </div>
        <div class="tab addrs">
          <div class="addr">
            <div>
              <span>配送至:</span>
              <select name="" id="">
                <option value="北京昌平区六环以内">北京昌平区六环以内 </option>
                <option value="北京昌平区六环以内">北京昌平区六环以内 </option>
                <option value="北京昌平区六环以内">北京昌平区六环以内 </option>
                <option value="北京昌平区六环以内">北京昌平区六环以内 </option>
              </select>
            </div>
            <div>
              <span class="red">有货，支持货到付款</span>
              <span class="ic">免运费</span>
            </div>
          </div>
          <p>服 务：由 优选网 发货并提供售后服务。15:00前完成下单,可预约今晚送达</p>
        </div>
        <div class="tab dis">
          <span>颜色 尺码</span>
          <span>&gt;</span>
        </div>
      </div>
    </div>
    <footer>
      <div class="icon">
        <div class="collect icon-wid">
          <img src="@/assets/collect.png" alt="collect">
          <p>收藏</p>
        </div>
        <div class="order-num icon-wid">
          <router-link to='/cart' tag="span">
            <img src="@/assets/des-carts.png" alt="">
            <i v-text="cartCount"></i>
            <p>购物车</p>
          </router-link>
        </div>
      </div>
      <div class="submit">
        <div class="cart-goods wid" @click="Cart">加入购物车</div>
        <div class="order wid" @click="desire">立即购买</div>
      </div>
    </footer>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'details',
  data() {
    return {
      goods: '',
      stores: ''
    }
  },
  methods: {
    ...mapMutations([
      'setOrder',
      'setTotal',
      'setCount',
      'addCart',
      'addCount'
    ]),
    res() {
      this.$router.back()
    },
    desire() {
      let data = this.goods
      this.setOrder([data])
      this.setTotal(data.price)
      this.setCount(1)
      this.$router.push({
        path: '/cartOrder',
        name: 'cartOrder'
      })
    },
    Cart() {
      // 购物车数量加一
      let cartCount = this.cartCount
      this.addCount(cartCount + 1)
      // 追加商品

      this.addCart([this.goods, this.stores])
    },
    async goodsList(start) {
      const { data } = await this.$http.get(
        ` http://localhost:3000/goods/${start}`
      )
      this.storeList(data.storeId)
      this.goods = data
    },
    async storeList(start) {
      const { data } = await this.$http.get(
        ` http://localhost:3000/store/${start}`
      )
      this.stores = data
    }
  },
  computed: {
    ...mapState(['cartCount'])
  },
  mounted() {
    this.goodsList(this.$route.query.id)
  }
}
</script>
<style lang="scss" scoped>
#details {
  background: #ccc;
  height: 100%;
  .container {
    position: absolute;
    top: 0;
    bottom: px2rem(100);
    background: #eee;
    overflow: auto;
    .back {
      width: px2rem(65);
      height: px2rem(65);
      background: #92938a;
      opacity: 0.5;
      position: absolute;
      top: px2rem(25);
      left: px2rem(25);
      border-radius: px2rem(65);
      cursor: pointer;
      .back-in {
        width: px2rem(30);
        height: px2rem(30);
        border-left: px2rem(5) solid #fff;
        border-bottom: px2rem(5) solid #fff;
        transform: translate(55%, 40%) rotate(45deg);
      }
    }
    .image {
      img {
        width: px2rem(750);
      }
    }
    .center {
      font-size: px2rem(22);
      .tab {
        padding: px2rem(28);
        border-bottom: px2rem(1) solid #ccc;
        .title {
          font-size: px2rem(28);
          font-weight: bold;
        }
        .mgtop {
          margin-top: px2rem(15);
        }
        .red {
          color: #ec1a5a;
        }
      }
      .addrs {
        p {
          font-size: px2rem(20);
        }
        .addr {
          display: flex;
          justify-content: space-between;
          margin-bottom: px2rem(10);
          .ic {
            background: #feae13;
            color: #fff;
            display: inline-block;
            padding: px2rem(3);
            margin-left: px2rem(10);
          }
          select {
            height: px2rem(40);
            width: px2rem(255);
            font-size: px2rem(22);
            option {
              font-size: px2rem(12);
            }
          }
        }
      }
      .dis {
        display: flex;
        justify-content: space-between;
      }
      .price {
        .oldprice {
          text-decoration: line-through;
        }
        .new {
          font-size: px2rem(32);
          margin-right: px2rem(20);
        }
      }
    }
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: px2rem(90);
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .submit {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .wid {
        height: 100%;
        width: px2rem(225);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: px2rem(30);
        background: linear-gradient(left, #920757, #f51c5a);
      }
      .cart-goods {
        background: #000;
      }
    }
    .icon {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-grow: 1;
      .icon-wid {
        width: px2rem(70);
        text-align: center;
      }
      .order-num {
        position: relative;
        i {
          display: inline-block;
          width: px2rem(30);
          height: px2rem(30);
          background: #ec1a5a;
          border-radius: px2rem(30);
          line-height: px2rem(30);
          text-align: center;
          color: #fff;
          position: absolute;
          top: px2rem(-10);
          right: px2rem(0);
        }
      }
    }
  }
}
</style>
