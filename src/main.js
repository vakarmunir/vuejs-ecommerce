import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import App from './App.vue'

//import 'bootstrap-vue/dist/bootstrap-vue.css'


// global.JQuery = JQuery
// import JQuery from 'jquery'
//
// let Bootstrap = require("bootstrap")
// Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css'


import router from './routers'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
