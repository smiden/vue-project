import Vue from 'vue'
import Vuex from 'vuex'

import themePage from './modules/themePage'
import lang from './modules/language/ru'

Vue.use(Vuex)

export const store = new Vuex.Store({
  namespaced: true,
  modules: {
    themePage,
    lang
  },
  strict: process.env.NODE_ENV !== 'production'
})
