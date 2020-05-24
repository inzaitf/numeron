<template>
  <v-app>
    <div id="app" v-resize="onResize">
      <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-container fluid>
          <v-row align="start" justify="start">
            <!-- スマホで見るときのメニューボタン -->
            <v-col cols="1" v-if="is_small">
              <v-app-bar-nav-icon @click="drawer = true" />
            </v-col>
            <!-- ツールバーのタイトル -->
            <v-col :cols="is_small ? 10 : 4">
              <v-row align="center" :justify="is_small ? 'center' : 'start'">
                <v-toolbar-title class="display-3 font-weight-bold" style="color:#C5CAE9;">Numer0n</v-toolbar-title>
              </v-row>
            </v-col>
            <!-- パソコンで見るとき用のメニュー -->
            <v-col cols="8" v-if="!is_small">
              <up-bar is_login />
            </v-col>
          </v-row>
        </v-container>
      </v-toolbar>
      <!-- スマホで見るとき用のメニュー,サイドバー -->
      <side-bar />
      <router-view />
    </div>
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import UpBar from "@/components/UpBar.vue";
export default {
  name: "App",
  components: {
    SideBar,
    UpBar
  },
  data: () => ({
    drawer: false,
    is_small: true,
    width: 0
  }),

  mounted() {
    this.onResize();
  },

  computed: {
    is_login() {
      if (this.$store.state.auth.store_token == null) {
        return false;
      } else {
        return true;
      }
    }
  },

  methods: {
    onResize() {
      this.width = window.innerWidth;
      this.is_small = this.width <= 1000;
    },
    logout() {
      this.$store.dispatch("auth/do_logout");
    }
  }
};
</script>
