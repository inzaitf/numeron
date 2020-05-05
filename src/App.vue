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
            <v-col cols="1">
              <v-app-bar-nav-icon v-if="is_small" @click="drawer = true" />
            </v-col>
            <v-col cols="3">
              <v-row align="center" justify="start">
                <v-toolbar-title
                  class=" display-3 font-weight-bold"
                  style="color:#C5CAE9;"
                >
                  Numer0n
                </v-toolbar-title>
              </v-row>
            </v-col>
            <!-- パソコンで見るとき用のメニュー -->
            <v-col cols="8">
              <v-row
                v-if="!is_small"
                align="center"
                justify="end"
                class="mx-auto"
              >
                <v-col cols="1">
                  <router-link to="/" style="color: white">Home</router-link>
                </v-col>
                <v-col cols="1">
                  <router-link to="/vscom" style="color: white">VScom</router-link>
                </v-col>
                <v-col cols="1">
                  <router-link to="/online" style="color: white">Online</router-link>
                </v-col>
                <v-col cols="1">
                  <router-link to="/judge" style="color: white">Judge</router-link>
                </v-col>
                <v-col cols="1" v-if="!is_login">
                  <router-link to="/login" style="color: white">Login</router-link>
                </v-col>
                <v-col cols="1" v-if="!is_login">
                  <router-link to="/signup" style="color: white">Signup</router-link>
                </v-col>
                <v-col  cols="1" v-if="is_login" >
                  <router-link to="/" @click.native="logout" style="color: white">logout</router-link>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-toolbar>
      <!-- スマホで見るとき用のメニュー -->
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group active-class="deep-purple--text text--accent-4">
            <side-bar icon="mdi-home-circle" menu="home" link="/" />
            <side-bar icon="mdi-robot" menu="vscom" link="/vscom" />
            <side-bar icon="mdi-lan-connect" menu="online" link="/online" />
            <side-bar icon="mdi-gavel" menu="judge" link="/judge" />
            <side-bar icon="mdi-account" menu="account" link="/account" />
            <side-bar v-if="!is_login" icon="mdi-account-plus" menu="signup" link="/signup" />
            <side-bar v-if="!is_login" icon="mdi-import" menu="login" link="/login" />
            <side-bar v-if="is_login" icon="mdi-export" menu="logout" link="/logout" />
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <router-view />
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
    width: 0,
  }),

  mounted() {
    this.onResize()
    // is_login()  {
    //   if(this.$store.state.store_token == null) {
    //     return false
    //   }else{
    //     return true
    //   }
    // }
  },

  computed: {
    is_login() {
      
      if(this.$store.state.auth.store_token == null) {
        return false
      }else{
        return true
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
