<template>
  <div id="goodslist" @touchstart="touchStart($event)" @touchmove="touchMove($event)">
    <div class="list" v-for="(items,index) in goodsList.list" :key='index'>
      <div class="container">
        <router-link tag='span' :to="'/details?id='+items.id">
          <div class="image">
            <img :src="items.img" alt="">
          </div>
        </router-link>
        <p class="name tab">{{items.name}}</p>
        <div class="prirce">
          <div class="old tab">
            <p>{{items.oldprice}}</p>
            <span class="red tab">RMB</span>
          </div>
          <div class="new red tab">
            {{items.price}}
          </div>
          <div class="mont red tab">
            月销{{items.monSales}}笔
          </div>
        </div>
        <div class="icon tab">
          <span class="phone">手机专享</span>
          <span>直减</span>
        </div>
      </div>

    </div>
    <p v-if="!this.goodsList.list.length ">没有此产品</p>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'goodslist',
  data() {
    return {
      show: false,
      downAddr: '',
      c: 0,
      count: 1
    }
  },
  methods: {
    ...mapMutations(['addGoodsList']),
    touchStart(e) {
      this.downAddr = e.targetTouches[0].pageY
      this.c = 0
    },
    touchMove(e) {
      let ca = this.downAddr - e.targetTouches[0].pageY
      if (ca >= 100) {
        return (this.c = 1)
      }
    },
    async getGoodsList(start, i) {
      const { data } = await this.$http.get(
        ` http://localhost:3000/goods?q=${start}&_page=${i}&_limit=6`
      )
      if (data.length !== 0) {
        this.addGoodsList(data)
        console.log('加载成功')
      }
    }
  },
  computed: {
    ...mapState(['goodsList'])
  },
  watch: {
    c(old, news) {
      if (old === 1) {
        this.getGoodsList(this.$route.query.q, this.count)
        this.count++
      }
    }
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
#goodslist {
  overflow: auto;
  position: absolute;
  top: px2rem(90);
  bottom: px2rem(0);
  .list {
    width: 50%;
    float: left;
    .container {
      background: #fff;
      margin: px2rem(20);
      overflow: hidden;
      .image {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .tab {
        padding: px2rem(5) px2rem(10);
        overflow: hidden;
      }
      .name {
        overflow: hidden;
        white-space: nowrap; /*不换行*/
        text-overflow: ellipsis; /*超出部分文字以...显示*/
      }
      .prirce {
        overflow: hidden;
        .red {
          color: #f0487b;
        }
        .old {
          p {
            text-decoration: line-through;
          }
          float: left;
        }
        .new {
          float: left;
          font-size: px2rem(28);
        }
        .mont {
          float: right;
          font-size: px2rem(20);
        }
      }
      .icon {
        float: right;
        span {
          font-size: px2rem(21);
          background: #7927d8;
          color: #fff;
          display: inline-block;
          padding: px2rem(3) px2rem(5);
        }
        .phone {
          background: #99ddff;
        }
      }
    }
  }
}
</style>
