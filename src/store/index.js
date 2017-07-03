import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import module1 from './modules/module1'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    module1
  }
})
