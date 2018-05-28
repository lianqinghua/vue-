<template>
  <div id="cartOrder">
    <commonHeader comTitle='订单结算'></commonHeader>
  </div>
</template>
<script>
import commonHeader from '../components/header.vue'
export default {
  name: 'cartOrder',
  components: { commonHeader },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
#cartOrder {
  color: red;
}
</style>
