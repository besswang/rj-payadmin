import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Setting from "./views/Setting.vue";
import Ditch from "./views/Ditch.vue";
import TopUpType from "./views/TopUpType.vue";
import TopUpMoney from "./views/TopUpMoney.vue";
import TopUpMethod from "./views/TopUpMethod.vue";
import Orders from "./views/Orders.vue";
Vue.use(Router);

export default new Router({
  // mode: "history",
  // base:'/admin/',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Home.vue"),
      children: [
        {
          path: "/",
          component: Setting
        },
        {
          path: "/ditch",
          component: Ditch
        },
        {
          path: "/topUpType",
          component: TopUpType
        },
        {
          path: "/topUpMoney",
          component: TopUpMoney
        },
        {
          path: "/topUpMethod",
          component: TopUpMethod
        },
        {
          path: "/orders",
          component: Orders
        }
      ]
    }
  ]
});
