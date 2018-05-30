<template>
  <div class="sidernav">
    <ul>
      <li :class="{show:items.tagshow}" v-for="(items,index) in list" :key='index' @click="tagCategory(items)">{{items.name}}</li>
    </ul>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      list: [
        { name: '热门推荐', tagshow: true },
        { name: '潮流女装', tagshow: false },
        { name: '品牌男装', tagshow: false },
        { name: '内衣配饰', tagshow: false },
        { name: '电脑办公', tagshow: false },
        { name: '手机数码', tagshow: false },
        { name: '母婴频道', tagshow: false },
        { name: '图书音像', tagshow: false },
        { name: '家用电器', tagshow: false },
        { name: '家具器材', tagshow: false },
        { name: '家居生活', tagshow: false }
      ]
    }
  },
  methods: {
    ...mapMutations(['selCategory', 'selGoodsList']),
    tagCategory(items) {
      this.getGoodsList(encodeURI(items.name), items.name)
      this.list.forEach(element => {
        element.tagshow = false
      })
      items.tagshow = true
    },
    async getGoodsList(start, name) {
      const { data } = await this.$http.get(
        ` http://localhost:3000/goods?category=${start}&_start=0&_end=9`
      )
      this.goods = data
      this.selCategory(name)
      this.selGoodsList(data)
    }
  },
  mounted() {
    this.getGoodsList(encodeURI('热门推荐'), '热门推荐')
  }
}
</script>

<style lang="scss" scoped>
.sidernav {
  margin-right: px2rem(15);
  height: 100%;
  overflow: hidden;
  width: px2rem(158);
  ul {
    height: 100%;
    border-right: px2rem(1) solid #ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: px2rem(24);
      text-align: center;
      background: #e3e3e3;
      border-bottom: px2rem(1) solid #ccc;
    }
    li.show {
      background: #fff;
      border-left: px2rem(10) solid #ec1a5a;
    }
  }
}
</style>
