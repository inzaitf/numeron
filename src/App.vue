<template >
  <v-app >
    <div id="app" >
      
      <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-container>
        <v-row align="start" justify="start">
          <v-col cols="2">
            <v-app-bar-nav-icon 
            v-if="is_small"
            @click="drawer = true"
            >
            </v-app-bar-nav-icon>
            
          </v-col>
          <v-col cols="4">
            <v-row align="center" justify="start">
              <v-toolbar-title
                class=" display-3 font-weight-bold"
                style="color:#C5CAE9;">
                  Numer0n
              </v-toolbar-title>
            </v-row>
          </v-col>
          <!-- <v-col cols="6"> -->
            <v-row >
              <v-col cols="1">
                <router-link to="/">home {{is_small}}</router-link>
              </v-col>
              <v-col cols="1">
                <router-link to="/vscom">vscom</router-link>
              </v-col>
              <v-col cols="1">
                <router-link to="/online">online</router-link>
              </v-col>
              <v-col cols="1">
                <router-link to="/judge">judge</router-link>
              </v-col>
              <v-col cols="1">
                <v-btn icon>
                  <v-icon>mdi-export</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          <!-- </v-col> -->
        </v-row>

      </v-container>
    </v-toolbar>
    <v-navigation-drawer
              v-model="drawer"
              absolute
              temporary
            >
              <v-list
                nav
                dense
              >
                <v-list-item-group
                  v-model="group"
                  active-class="deep-purple--text text--accent-4"
                >
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Account</v-list-item-title>
                  </v-list-item>

                </v-list-item-group>
              </v-list>
            </v-navigation-drawer>
      <router-link to="/"></router-link>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
export default {
    name: 'App',
    data: () => ({
      drawer: false,
      is_small: true
    }),
    methods: {
      handle_resize: function () {
        if (document.body.clientWidth <= 600) {
          this.is_small = true
        }else {
          this.is_small = false
        }
      }
    },
    created() {
      window.addEventListener('resize',this.handle_resize)
      this.handle_resize()
    },
    destroyed() {
      window.removeEventListener('resize',this.handle_resize)
    }

}
</script>