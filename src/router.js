import Vue from "vue";
import Router from "vue-router";

// 使いたいコンポーネントのimport
import Home from "@/pages/Home.vue";
import Vscom from "@/pages/Vscom.vue";
import Online from "@/pages/Online.vue";
import Judge from "@/pages/Judge.vue";
import Login from "@/pages/Login.vue";
import Signup from "@/pages/Signup.vue";
import Account from "@/pages/Account.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/vscom",
      component: Vscom
    },
    {
      path: "/online",
      component: Online
    },
    {
      path: "/judge",
      component: Judge
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/signup",
      component: Signup
    },
    {
      path: "/account",
      component: Account
    },
  ]
});
