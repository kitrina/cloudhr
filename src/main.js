// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import 'iview/dist/styles/iview.css'
import App from './App'
import store from './store'
import router from './router'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
