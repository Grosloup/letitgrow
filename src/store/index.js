import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import state from './state'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
