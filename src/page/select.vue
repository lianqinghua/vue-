<template>
  <div id="select">
    <commonHeader></commonHeader>

    <commonfooter :switch='1'></commonfooter>
  </div>
</template>
<script>
import commonHeader from '../components/header.vue'
import commonfooter from '../components/footer.vue'
export default {
  name: 'select',
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
#select {
  color: red;
}
</style>
