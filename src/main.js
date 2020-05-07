import App from "@/App.vue";
import Vue from "vue";
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import store from "@/store";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
  beforeCreate() {
    store.dispatch("auth/do_load");
  }
}).$mount("#app");
