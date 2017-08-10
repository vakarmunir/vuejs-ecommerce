import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import App from './App.vue'

//import 'bootstrap-vue/dist/bootstrap-vue.css'


// global.JQuery = JQuery
// import JQuery from 'jquery'
//
// let Bootstrap = require("bootstrap")
// Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css'
import 'vuetify/dist/vuetify.min.css'

import router from './routers'

window.Event = new Vue();


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
