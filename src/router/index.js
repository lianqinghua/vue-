import Vue from 'vue'
import Router from 'vue-router'
// 购物车
import cart from '@/page/cart.vue'
// 分类
import category from '@/page/category.vue'
// 首页
import home from '@/page/home.vue'
// 搜索
import select from '@/page/select.vue'
// 用户
import user from '@/page/user.vue'

// 结算订单
import cartOrder from '@/page/cartOrder.vue'
// q启动页
import startup from '@/page/startup.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'startup',
      component: startup
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/cartOrder',
      name: 'cartOrder',
      component: cartOrder
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/select',
      name: 'select',
      component: select
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
