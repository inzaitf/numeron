import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "@/store/modules/auth";
import online from "@/store/modules/online";
import judge from "@/store/modules/judge";
import vscom from "@/store/modules/vscom";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    online,
    auth,
    judge,
    vscom,
  },
  plugins: [
    createPersistedState({
      key: "numeron",
      paths: ["auth.user_id"],
      storage: window.sessionStorage
    })
  ]
});
