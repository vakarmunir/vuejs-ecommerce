import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import productsList from "./components/product/List.vue";
import productNew from "./components/product/New.vue";

let routes = [
  {
    path: '/',
    component: productsList
  },
  {
    path: '/add-new',
    component: productNew
  }
];

export default new VueRouter({
  routes
});
