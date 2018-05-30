<template>
  <div id="category">
    <commonHeader comTitle="分类"></commonHeader>
    <div class="content">
      <div class="left">
        <sidernav></sidernav>
      </div>
      <div class="right">
        <sidercontent></sidercontent>
      </div>
    </div>
    <commonfooter :switch='2'></commonfooter>
  </div>
</template>
<script>
import commonHeader from '../components/header'
import commonfooter from '../components/footer'
import sidernav from '@/components/category/sidernav'
import sidercontent from '@/components/category/sidercontent.vue'
export default {
  name: 'category',
  components: { commonHeader, commonfooter, sidernav, sidercontent },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
#category {
  .content {
    position: absolute;
    width: 100%;
    top: px2rem(80);
    bottom: px2rem(100);
    overflow: auto;
    display: flex;
    justify-content: space-between;
    .right {
      flex-grow: 1;
      margin-right: px2rem(25);
    }
  }
}
</style>
