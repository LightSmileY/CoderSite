import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      id: "-1",
      login_name: "",
      nickName: ""
    }
  },
  mutations: {
    ['userInfo'](state, data){
      state.userInfo = data
    }
  },
  actions: {
    getUserInfo({commit}, data){
      commit('userInfo', data)
    }
  }
})
