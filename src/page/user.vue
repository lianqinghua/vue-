<template>
  <div id="user">
    <commonHeader></commonHeader>

    <commonfooter :switch='4'></commonfooter>
  </div>
</template>
<script>
import commonHeader from '../components/header.vue'
import commonfooter from '../components/footer.vue'
export default {
  name: 'user',
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
#user {
  color: red;
}
</style>
