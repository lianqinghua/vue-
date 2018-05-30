<template>
  <div id="search">
    <commonHeader>
      <div class="left" slot="left">
        <div class="select">
          <input type="text" v-model="select" @keyup.enter="sel()" placeholder="请输入要搜索的关键字">
        </div>
      </div>
    </commonHeader>

    <div class="content">
      <div class="container">
        <div class="tit">
          <p>最近搜索</p>
        </div>
        <div class="con">
          <div class="tab">
            <span v-for="(items,index) in tab" :key='index' @click="sel(items)">{{items}}</span>
          </div>
        </div>
        <div class="close">
          <span @click="close">清除历史记录</span>
        </div>
      </div>
    </div>
    <commonfooter :switch='1'></commonfooter>
  </div>
</template>
<script>
import commonHeader from '../components/header.vue'
import commonfooter from '../components/footer.vue'
import selectResult from './selectResult.vue'
export default {
  name: 'search',
  components: { commonHeader, commonfooter, selectResult },
  data() {
    return {
      select: '',
      tab: ''
    }
  },
  methods: {
    sel(i) {
      if (this.select === '' && i === 0) {
        alert('请输入')
      } else {
        if (this.select !== '') {
          let select = sessionStorage.getItem('select')
          if (select === '') {
            sessionStorage.setItem('select', this.select)
          } else {
            sessionStorage.setItem('select', select + ',' + this.select)
          }
        }
        this.$router.push({
          path: '/selectResult',
          name: 'selectResult',
          query: {
            q: this.select | i
          }
        })
      }
    },
    close() {
      this.tab = ''
      sessionStorage.setItem('select', '')
    }
  },
  computed: {},
  mounted() {
    let select = sessionStorage.getItem('select')
    let sele = select.split(',')
    this.tab = sele
  }
}
</script>
<style lang="scss" scoped>
#search {
  height: 100%;
  .select {
    width: px2rem(522);
    height: px2rem(50);
    margin-left: px2rem(60);
    margin-top: px2rem(-10);
    background: linear-gradient(left, #6e073d, #a3113e);
    border-radius: px2rem(50);
    position: relative;

    input {
      position: absolute;
      width: px2rem(400);
      top: 50%;
      left: px2rem(30);
      height: px2rem(30);
      transform: translateY(-50%);
      outline: none;
      background: transparent;
      border: 0;
      color: #fff;
      font-size: px2rem(28);
    }
    ::-webkit-input-placeholder {
      color: #fff;
    }
  }
  .goodslist {
    position: absolute;
    width: 100%;
    top: px2rem(80);
    bottom: 0;
    overflow: auto;
    background: #eee;
  }
  .content {
    position: absolute;
    width: 100%;
    top: px2rem(80);
    bottom: px2rem(100);
    background: #eee;
    .container {
      padding: px2rem(30);
      .close {
        text-align: center;
        span {
          background: #bcbcbc;
          display: inline-block;
          padding: px2rem(5);
        }
      }
      .con {
        width: px2rem(600);
        margin: px2rem(20) auto px2rem(50);
        .tab {
          span {
            background: #ffffff;
            display: inline-block;
            padding: px2rem(10);
            margin: px2rem(10) px2rem(20);
          }
        }
      }
    }
  }
}
</style>
