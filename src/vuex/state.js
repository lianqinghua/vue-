import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
/* 数据 */
const state = {
  // 加入购物车数据
  cartData: [],
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
  cartCount: 0,
  goodsList: {
    category: '热门推荐',
    list: [],
    sel: '',
    newpage: ''
  }
}
/* 同步写入 */
const mutations = {
  // 请求
  setReq(state, stop) {
    state.goodsList.req = stop
  },
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
    let num = 0
    let a = 0
    if (state.cartData.length === 0) {
      stop[1].goods = []
      stop[1].goods.push(stop[0])
      state.cartData.push(stop[1])
    } else {
      state.cartData.forEach(element => {
        if (element.id === stop[1].id) {
          num++
          element.goods.forEach(item => {
            if (item.id === stop[0].id) {
              item.num++
              a++
            }
          })
          if (a === 0) {
            element.goods.push(stop[0])
          }
        }
      })
      if (num === 0) {
        stop[1].goods = []
        stop[1].goods.push(stop[0])
        state.cartData.push(stop[1])
      }
    }
  },
  // 添加购物车商品数量
  addCount(state, stop) {
    state.cartCount = stop
  },
  // 分类
  selCategory(state, stop) {
    state.goodsList.category = stop
  },
  // 分类列表
  selGoodsList(state, stop) {
    state.goodsList.list = stop
  },
  // 追加
  addGoodsList(state, stop) {
    stop.forEach(element => {
      state.goodsList.list.push(element)
    })
  }
}
/* 异步写入 */
const actions = {}
/* 将数据包装之后读出 */
const getters = {}
const store = new vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store
