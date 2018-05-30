<template>

  <div class="container">
    <div class="title">{{goodsList.category}}</div>
    <div class="image">
      <img src="../../../static/category-hot.jpg" alt="">
    </div>
    <div class="goods">
      <div class="tab" v-for="(item, index) in goodsList.list" :key='index'>
        <router-link tag='span' :to="'/details?id='+item.id"> <img :src="item.img" alt=""></router-link>
      </div>
    </div>
  </div>

</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['goodsList'])
  },
  methods: {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  overflow: auto;
  .title {
    padding: px2rem(15) 0;
    border-bottom: px2rem(1) solid #ccc;
  }
  .image {
    width: 100%;
    margin: px2rem(20) 0;
    border: px2rem(1) solid #ccc;
    overflow: hidden;
    img {
      width: 100%;
      float: left;
    }
  }
  .goods {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: flex-start;
    .tab {
      width: px2rem(140);
      height: px2rem(140);
      border: px2rem(1) solid #ccc;
      margin: px2rem(20);
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
