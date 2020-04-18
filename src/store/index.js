import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import flag from "@/store/modules/flag/";
import auth from "@/store/modules/auth/";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    flag,
    auth,
  },
  plugins: [
    createPersistedState({
      key: "numeron",
      paths: ["auth.user_id"],
      storage: window.sessionStorage,
    }),
  ],
});
