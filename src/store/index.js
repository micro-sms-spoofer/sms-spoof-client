import Vue from 'vue'
import Vuex from 'vuex'
import Auth from '../warehouse/Auth'
import Sms from '../warehouse/Sms'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Auth,
    Sms
  }
})
