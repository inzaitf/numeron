<template>
  <v-app>
    <div id="app" v-resize="onResize">
      <v-toolbar
        dark
        prominent
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-container>
          <v-row align="start" justify="start">
            <v-col cols="2">
              <v-app-bar-nav-icon v-if="is_small" @click="drawer = true">
              </v-app-bar-nav-icon>
            </v-col>
            <v-col cols="4">
              <v-row align="center" justify="start">
                <v-toolbar-title
                  class=" display-3 font-weight-bold"
                  style="color:#C5CAE9;"
                >
                  {{ width }}
                </v-toolbar-title>
              </v-row>
            </v-col>
            <!-- パソコンで見るとき用のメニュー -->
            <v-row v-if="!is_small">
              <v-col cols="2">
                <router-link to="/">home</router-link>
              </v-col>
              <v-col cols="2">
                <router-link to="/vscom">vscom</router-link>
              </v-col>
              <v-col cols="2">
                <router-link to="/online">online</router-link>
              </v-col>
              <v-col cols="2">
                <router-link to="/judge">judge</router-link>
              </v-col>
              <v-col cols="2">
                <v-btn icon>
                  <v-icon>mdi-export</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-row>
        </v-container>
      </v-toolbar>
      <!-- スマホで見るとき用のメニュー -->
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <side-bar icon="mdi-home-circle" menu="home" link="/"></side-bar>

            <side-bar icon="mdi-robot" menu="vscom" link="/vscom"></side-bar>

            <side-bar
              icon="mdi-lan-connect"
              menu="online"
              link="/online"
            ></side-bar>

            <side-bar icon="mdi-gavel" menu="judge" link="/judge"></side-bar>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  name: "App",
  components: {
    SideBar
  },
  data: () => ({
    drawer: false,
    is_small: true,
    width: 0
  }),

  mounted() {
    this.onResize();
  },

  methods: {
    onResize() {
      this.width = window.innerWidth;
      this.is_small = this.width <= 1000;
    }
  }
};
</script>
