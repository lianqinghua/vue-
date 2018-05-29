import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
/* 数据 */
const state = {
  // 加入购物车数据
  cartData: [
    // {
    //   id: 0,
    //   storename: '歌莉娅官方旗舰店',
    //   goods: [
    //     {
    //       id: 0,
    //       img: '../../static/goodsImg1.jpg',
    //       name: '歌莉娅女装 2016冬装新款 连衣帽针织衫 显瘦身 15DJ8C040',
    //       color: 'red',
    //       size: 's',
    //       oldprice: 200,
    //       price: 123,
    //       num: 1,
    //       stock: 10,
    //       monSales: 123
    //     },
    //     {
    //       id: 1,
    //       img: '../../static/goodsImg1.jpg',
    //       name: '歌莉娅女装 2016冬装新款 连衣帽针织衫 显瘦身 15DJ8C040',
    //       color: 'red',
    //       size: 's',
    //       price: 123,
    //       num: 1,
    //       stock: 10,
    //       oldprice: 200,
    //       monSales: 123
    //     }
    //   ]
    // },
    // {
    //   id: 1,
    //   storename: '歌莉娅官方旗舰店',
    //   goods: [
    //     {
    //       id: 0,
    //       img: '../../static/goodsImg1.jpg',
    //       name: '歌莉娅女装 2016冬装新款 连衣帽针织衫 显瘦身 15DJ8C040',
    //       color: 'red',
    //       size: 's',
    //       oldprice: 200,
    //       price: 123,
    //       num: 1,
    //       stock: 10,
    //       monSales: 123
    //     },
    //     {
    //       id: 1,
    //       img: '../../static/goodsImg1.jpg',
    //       name: '歌莉娅女装 2016冬装新款 连衣帽针织衫 显瘦身 15DJ8C040',
    //       color: 'red',
    //       size: 's',
    //       oldprice: 200,
    //       price: 123,
    //       num: 1,
    //       stock: 10,
    //       monSales: 123
    //     }
    //   ]
    // }
  ],
  //  购买列表
  orderDate: '',
  // 选择商品的总价格
  total: 0,
  // 选择商品的个数
  count: 0,
  // 是否选中全部
  checkAll: false,
  // 编辑
  edit: false,
  // 购物车数量
  cartCount: 4
}
/* 同步写入 */
const mutations = {
  // 写入total
  setTotal(state, stop) {
    state.total = stop
  },
  // 写入count
  setCount(state, stop) {
    state.count = stop
  },
  // 写入check
  setCheck(state, stop) {
    state.checkAll = stop
  },
  // 编辑
  setEdit(state, stop) {
    state.edit = stop
  },
  // 提交订单
  setOrder(state, stop) {
    state.orderDate = stop
  },
  // 添加购物车
  addCart(state, stop) {
    state.cartData.push(stop)
  },
  addCount(state, stop) {
    state.cartCount = stop
  }
}
/* 异步写入 */
const actions = {
  getCartData(state) {
    console.log(state)
  }
}
/* 将数据包装之后读出 */
const getters = {}
const store = new vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store
