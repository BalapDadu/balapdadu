import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    BASE_URL: 'http://localhost:3000',
    rooms: []
  },
  mutations: {},
  actions: {},
  modules: {}
})
