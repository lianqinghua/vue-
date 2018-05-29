<template>
  <div id="search">
    <commonHeader></commonHeader>
    <div class="content">
      <div class="sidernav">
        <ul>
          <li>热门推荐</li>
          <li>潮流女装</li>
          <li>品牌男装</li>
          <li>内衣配饰</li>
          <li>电脑办公</li>
          <li>手机数码</li>
          <li>母婴频道</li>
          <li>图书音像</li>
          <li>家用电器</li>
          <li>家具器材</li>
          <li>家居生活</li>
        </ul>
      </div>
    </div>
    <commonfooter :switch='1'></commonfooter>
  </div>
</template>
<script>
import commonHeader from '../components/header.vue'
import commonfooter from '../components/footer.vue'
export default {
  name: 'search',
  components: { commonHeader, commonfooter },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
#search {
  height: 100%;
  .content {
    position: absolute;
    width: 100%;
    top: px2rem(80);
    bottom: px2rem(100);
    overflow: auto;
  }
}
</style>
