<template>
  <div id="home">
    <commonHeader></commonHeader>

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
  color: red;
}
</style>
