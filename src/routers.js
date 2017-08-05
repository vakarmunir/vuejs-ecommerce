import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import productsList from "pages/product/List.vue";
import productNew from "pages/product/New.vue";

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
