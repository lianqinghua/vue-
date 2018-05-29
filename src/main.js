// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* 加载hotcss响应式布局 */
import './lib/hotcss'

// MintUI
import MintUI from 'mint-ui'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/state'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
