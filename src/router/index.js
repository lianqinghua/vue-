import Vue from 'vue'
import Router from 'vue-router'
// 购物车
import cart from '@/page/cart'
// 分类
import category from '@/page/category'
// 首页
import home from '@/page/home'
// 搜索
import search from '@/page/search'
// 用户
import user from '@/page/user'

// 结算订单
import cartOrder from '@/page/cartOrder'
// 启动页
import startup from '@/page/startup'
// 详情页
import details from '@/page/details'

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
      path: '/details',
      name: 'details',
      component: details
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
      path: '/search',
      name: 'search',
      component: search
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
