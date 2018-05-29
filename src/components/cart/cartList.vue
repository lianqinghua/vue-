<template>
  <div class="cartList">
    <div class="cartList" v-for="(item,i) in cartData" :key='i'>
      <div class="store-top" @click="checks(item)">
        <div class="check">
          <div class="check-in" v-if="item.hid"></div>
        </div>
        <div class="storename" v-text="item.storename">歌莉娅官方旗舰店</div>
      </div>
      <div class="store-item" v-for="(element,index) in item.goods" :key="index">
        <div class="check" @click="check(element,i)">
          <div class="check-in" v-if='element.hid'></div>
        </div>
        <div class="item-img" @click="delit(element)">
          <img :src="element.img" :alt="element.name">
        </div>
        <div class="item-details">
          <div class="item-name" v-text="element.name">歌莉娅女装 2016冬装新款 连衣帽针织衫 显瘦身 15DJ8C040</div>
          <div class="item-tab-1">
            <span>颜色:</span>
            <span class="item-color red" v-text="element.color">13</span>
            <span>尺码:</span>
            <span class="item-size red" v-text="element.size">2131</span>
          </div>
          <div class="item-tab-2">
            <div class="phone">
              <img src="@/assets/phone@3x.png" alt="手机">
              <span>手机专享</span>
            </div>
          </div>
          <div class="item-tab-3">
            <div class="item-price red" v-text="element.price">123</div>
          </div>
          <div class="item-tab-4" v-if="edit" @click="numhid(element)">
            <div class="item-num">
              <span class="item-count" @click="element.num<element.stock?element.num++:element.stock">+</span>
              <span class="item-count">
                <input type="text" name="" id="" v-model="element.num">
              </span>
              <span class="item-count" @click="element.num>1?element.num--:1">-</span>
            </div>
            <div class="item-edit" @click="addNote(i,index)">
              <img src="@/assets/Edit@3x.png" alt="备注">
            </div>
          </div>
          <div class="item-tab-4" v-if="!edit">
            <span>数量:
              <span class="red" v-text="element.num"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'cartList',
  data() {
    return {}
  },
  methods: {
    ...mapMutations(['setTotal', 'setCount', 'setCheck', 'delit']),
    // 商品选择
    check(item, i) {
      if (item.hid === true) {
        item.hid = false
        this.cartData[i].hid = false
      } else {
        item.hid = true
      }
      this.chengeCount()
    },
    // 店铺选择
    checks(item) {
      if (item.hid === true) {
        item.hid = false
        item.goods.forEach(element => {
          element.hid = false
        })
      } else {
        item.hid = true
        item.goods.forEach(element => {
          element.hid = true
        })
      }
      this.chengeCount()
    },
    // 计算 total count
    chengeCount() {
      this.setCheck(false)
      let con = 0
      let totall = 0
      this.cartData.forEach(element => {
        element.goods.forEach(item => {
          if (item.hid === true) {
            totall += parseInt(item.price) * parseInt(item.num)
            con++
          }
        })
        this.setTotal(totall)
        this.setCount(con)
      })
    },
    // 添加备注
    addNote(i1, i2) {
      MessageBox.prompt('Please tell me your note').then(({ value }) => {
        if (typeof this.cartData[i1].goods[i2] === 'undefined') {
          this.$set(this.cartData[i1].goods[i2], 'note', value)
        } else {
          this.cartData[i1].goods[i2].note = value
        }
      })
    },
    // 编辑
    numhid(item) {
      // item.hid = false
      this.chengeCount()
    },
    // 详情页
    delit(stop) {
      this.$router.push({
        path: '/details',
        name: 'details',
        params: stop
      })
    }
  },
  computed: {
    ...mapState(['cartData', 'total', 'count', 'checkAll', 'edit'])
  },
  mounted() {
    this.cartData.forEach(element => {
      this.$set(element, 'hid', false)
      element.goods.forEach(item => {
        this.$set(item, 'hid', false)
      })
    })
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/variate.scss';
.cartList {
  .cartList {
    background: #fff;
    margin-bottom: px2rem(30);
    border-bottom: px2rem(1) solid #ccc;
    .store-top {
      height: px2rem(70);
      border-bottom: px2rem(1) solid #ccc;
      display: flex;
      display: -webkit-flex;
      align-items: center;
    }
    .store-item {
      display: -webkit-box;
      justify-content: space-between;
      align-items: center;
      .item-img {
        width: px2rem(185);
        height: px2rem(185);
        border: px2rem(1) solid #ccc;
        margin: px2rem(15);
        margin-left: 0;
        cursor: pointer;
        & img {
          width: px2rem(185);
          height: px2rem(185);
        }
      }
      .item-details {
        flex-grow: 1;
        .item-name {
          line-height: px2rem(30);
        }
        .item-tab-2 {
          color: #fff;
          overflow: hidden;
          .phone {
            float: left;
            background: #99ddff;
            padding: px2rem(5) px2rem(8);
            margin: px2rem(5) 0;
            font-size: px2rem(12);
            img {
              width: px2rem(10);
              vertical-align: middle;
            }
          }
        }
        .item-tab-3 {
          .item-price {
            font-size: px2rem(28);
          }
        }
        .item-tab-4 {
          height: px2rem(40);
          display: flex;
          justify-content: space-between;
          .item-num {
            span {
              border: px2rem(1) solid #ccc;
              padding: px2rem(5) px2rem(10);
              float: left;
              input {
                outline: none;
                border: 0;
                width: px2rem(30);
                font-size: px2rem(20);
              }
            }
          }
          .item-edit {
            padding: 0 px2rem(25);
            img {
              width: px2rem(35);
            }
          }
        }
      }
      .red {
        color: #ec1a5a;
        margin-right: px2rem(10);
      }
    }
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
