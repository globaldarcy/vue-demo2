/**
 * Created by Shawn on 2017/8/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count:4
}
const mutations = {
  up(state){
    state.count ++
  },
  down(state){
    state.count --
  }
}
export default new  Vuex.Store({
  state,
  mutations
})



