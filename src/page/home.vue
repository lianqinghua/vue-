<template>
  <div id="home">
    <commonHeader></commonHeader>
    <div class="content">

    </div>
    <commonfooter :switch='0'></commonfooter>
  </div>
</template>
<script>
import commonHeader from '../components/header.vue'
import commonfooter from '../components/footer.vue'
export default {
  name: 'home',
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
#home {
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
