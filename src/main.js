/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
import WENUI from "wenwen-ui/packages/index";
import "wenwen-ui/packages/theme-default/lib/index.css";
// import "wenwen-ui/dist/theme-default/index.css";
Vue.use(WENUI);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");