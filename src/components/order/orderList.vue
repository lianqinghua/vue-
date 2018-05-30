<template>
  <div class="orderList">
    <ul class="order">
      <li v-for="(items ,index) in orderDate" :key='index'>
        <router-link tag='span' :to="'/details?id='+items.id">
          <div class="tab">
            <div class="order">
              <span class="red">
                <span>订单:</span>
                <span v-text="index+1"></span>
              </span>
              <span class="title" v-text='items.name'></span>
            </div>
          </div>
          <div class="tab">
            <div class="container">
              <div class="image">
                <img :src='items.img' :alt="items.name">
              </div>
              <div class="center">
                <p>
                  <span>颜色</span>
                  <span class="color red" v-text="items.color">red</span>
                  <span>尺码：</span>
                  <span class="size red" v-text="items.size">d</span>
                </p>
                <p>
                  <span class="price red" v-text="items.price">23423</span>
                </p>
              </div>
            </div>
          </div>
          <div class="tab">
            <div class="delivergoos">
              <p>送货/付款</p>
              <div class="way">
                <p>
                  <span>普通快递送货上门</span>
                  <span>货到付款</span>
                </p>
                <img src="" alt="">
              </div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'orderList',
  data() {
    return {}
  },
  methods: {
    ...mapMutations(['delit'])
  },
  computed: {
    ...mapState(['orderDate'])
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.orderList {
  width: 100%;
  .order {
    li {
      background: #fff;
      .tab {
        padding: px2rem(15) px2rem(25);
        border-bottom: px2rem(1) solid #ccc;
        .delivergoos {
          display: flex;
          justify-content: space-between;
          align-items: top;
          .way {
            p {
              span {
                display: block;
              }
            }
          }
        }
        .container {
          display: flex;
          .image {
            width: px2rem(120);
            height: px2rem(120);
            border: px2rem(1) solid #ccc;
            margin-right: px2rem(10);
            img {
              width: px2rem(120);
              height: px2rem(120);
            }
          }
        }
        .red {
          color: #ec1a5a;
        }
        .order {
          .title {
            display: inline-block;
            margin-left: px2rem(20);
            font-weight: bold;
          }
        }
        .center {
          .color {
            margin: 0px px2rem(20);
            padding-right: px2rem(20);
          }
          .price {
            display: inline-block;
            font-size: px2rem(28);
            margin-top: px2rem(30);
          }
        }
      }
    }
  }
}
</style>
