<template>
  <div id="selectResult">
    <commonHeader>
      <div class="left" slot="left">
        <router-link tag='span' to='/search'>
          <div class="re">返回</div>
        </router-link>
        <div class="select">
          <input type="text" v-model="select" @keyup.enter="sel()" placeholder="请输入要搜索的关键字">
        </div>
      </div>
    </commonHeader>
    <goodslist></goodslist>
  </div>
</template>
<script>
import commonHeader from '../components/header.vue'
import goodslist from '../components/goodslist.vue'
import { mapMutations } from 'vuex'
export default {
  name: 'selectResult',
  components: { goodslist, commonHeader },
  data() {
    return {
      select: '',
      list: ''
    }
  },
  methods: {
    ...mapMutations(['selGoodsList']),
    sel() {
      if (this.select === '') {
        alert('请输入')
      } else {
        this.getGoodsList(this.select)
      }
    },
    async getGoodsList(start, i) {
      const { data } = await this.$http.get(
        ` http://localhost:3000/goods?q=${start}&_start=${i}&_end=6`
      )
      this.selGoodsList(data)
    }
  },
  computed: {},
  mounted() {
    if (this.$route.query === '') {
      this.getGoodsList('')
    } else {
      this.getGoodsList(this.$route.query.q)
    }
  }
}
</script>
<style lang="scss" scoped>
#selectResult {
  height: 100%;
  .re {
    position: absolute;
  }
  .select {
    width: px2rem(522);
    height: px2rem(50);
    margin-left: px2rem(70);
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
}
</style>
