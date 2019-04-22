import Vue from "vue";
import App from "./App.vue";
import { util } from "./assets/utility.js";

Vue.prototype.$util = util;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
