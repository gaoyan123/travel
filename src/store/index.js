/**
 * Created by Administrator on 2019/3/18.
 */
/**
 * Created by Administrator on 2019/3/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations
})
