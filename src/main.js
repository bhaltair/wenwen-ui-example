/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
// import WENUI from "../../packages/index";
import WENUI from "wenwen-ui";
import "wenwen-ui/dist/theme-default/index.css";
// import "../../packages/theme-default/lib/index.css";
Vue.use(WENUI);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");