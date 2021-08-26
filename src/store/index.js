import Vue from 'vue'
import Vuex from 'vuex'
import decode from 'jwt-decode'
import router from '../router/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: '',
    userDB: '',
  },
  mutations: {
    getUser(state, payload) {
      state.token = payload
      if (payload === '') {
        state.userDB = ''
      } else {
        state.userDB = decode(payload)
      }
    },
  },
  actions: {
    setUser({ commit }, payload) {
      localStorage.setItem('token_id', payload)
      commit('getUser', payload)
    },

    // [AUTH_LOGOUT]: ({ commit, dispatch }) => {
    //   return new Promise((resolve, reject) => {
    //     commit(AUTH_LOGOUT)
    //     localStorage.removeItem('token_id')
    //     resolve()
    //   }) 
    // }
    logout({ commit }) {
      commit('getUser', '')
      localStorage.removeItem('token_id')
      
    },
  },
  modules: {},
})

export default store
