import Vue from "vue";
import Router from "vue-router";

// 使いたいコンポーネントのimport
import Home from '@/pages/Home.vue'
// import Vscom from '@/pages/Vscom.vue'
import Online from "@/pages/Online.vue";
// import Judge from "@/pages/Judge.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    // {
    //   path: "/vocom",
    //   component: Vscom
    // },
    {
      path: "/online",
      component: Online
    },
    // {
    //   path: "/judge",
    //   component: Judge
    // },
  ]
});