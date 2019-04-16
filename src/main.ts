import Vue from "vue";
import './plugins/axios'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/stylus/app.styl'
import '../public/mock'
import './plugins/element.js'
import "./plugins/jk.js";
import "./plugins/filters.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
