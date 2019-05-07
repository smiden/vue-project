import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'

Vue.use(vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuex,
  components: { App },
  template: '<App/>'
})
