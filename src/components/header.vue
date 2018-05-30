<template>
  <header>
    <div class="left">
      <slot name='left'></slot>
    </div>
    <div class="title" v-text='comTitle'>
    </div>
    <div class="right" @click="edits" v-text="editName[i]" v-if=hid></div>
  </header>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'commonHeader',
  props: ['comTitle', 'hid'],
  data() {
    return {
      editName: ['编辑', '完成'],
      i: 0
    }
  },
  methods: {
    ...mapMutations(['setEdit']),
    edits() {
      let edit = this.edit
      this.setEdit(!edit)
      if (this.i === 0) {
        this.i = 1
      } else {
        this.i = 0
      }
    }
  },
  computed: {
    ...mapState(['edit'])
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
header {
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100%;
  height: px2rem(80);
  background: linear-gradient(left, #900658, #f81c5b);
  color: #fff;
  & .title {
    text-align: center;
    line-height: px2rem(80);
    font-size: px2rem(34);
  }
  .right {
    position: absolute;
    top: px2rem(15);
    right: px2rem(25);
    font-size: px2rem(32);
  }
  .left {
    position: absolute;
    top: px2rem(13);
    left: px2rem(13);
  }
}
</style>
