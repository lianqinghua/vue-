<template>
  <footer>
    <div class="home icon" v-for="(item,index) in icon" :key='index'>
      <router-link :to='item.router' tag='span'>
        <img :src=item.img[1] :alt=item.describe v-if="item.hid">
        <img :src=item.img[0] :alt=item.describe v-if="!item.hid">
        <p v-text="item.name" :class="{color:item.hid}"></p>
      </router-link>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'commonfooter',
  props: ['switch'],
  data() {
    return {
      icon: [
        {
          name: '首页',
          img: ['../../static/home.png', '../../static/home-1.png'],
          describe: 'home',
          router: '/home'
        },
        {
          name: '搜索',
          img: ['../../static/select.png', '../../static/select-1.png'],
          describe: 'select',
          router: '/select'
        },
        {
          name: '分类',
          img: ['../../static/category.png', '../../static/category-1.png'],
          describe: 'category',
          router: '/category'
        },
        {
          name: '购物车',
          img: ['../../static/cart.png', '../../static/cart-1.png'],
          describe: 'cart',
          router: '/cart'
        },
        {
          name: '我的',
          img: ['../../static/user.png', '../../static/user-1.png'],
          describe: 'user',
          router: '/user'
        }
      ]
    }
  },
  methods: {},
  computed: {},
  mounted() {
    this.icon.forEach(element => {
      this.$set(element, 'hid', false)
    })
    this.$set(this.icon[this.switch], 'hid', true)
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/variate.scss';
footer {
  position: absolute;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: px2rem(100);
  background: #171717;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .icon {
    color: #fff;
    width: px2rem(70);
    text-align: center;
    p {
      margin-top: px2rem(5);
    }
  }
  .color {
    color: #ec1a5a;
  }
}
</style>
