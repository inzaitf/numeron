<template>
  <v-navigation-drawer absolute temporary>
    <v-list nav dense>
      <v-list-item-group active-class="deep-purple--text text--accent-4">
        <side-bar-menu icon="mdi-home-circle" menu="home" link="/" />
        <side-bar-menu icon="mdi-robot" menu="vscom" link="/vscom" />
        <side-bar-menu icon="mdi-lan-connect" menu="online" link="/online" />
        <side-bar-menu icon="mdi-gavel" menu="judge" link="/judge" />
        <side-bar-menu v-if="!is_login" icon="mdi-account-plus" menu="signup" link="/signup" />
        <side-bar-menu v-if="!is_login" icon="mdi-import" menu="login" link="/login" />
        <side-bar-menu v-if="is_login" icon="mdi-account" menu="account" link="/account" />
        <side-bar-menu v-if="is_login" icon="mdi-export" menu="logout" link="/logout" />
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import SideBarMenu from "@/components/SideBarMenu.vue";
export default {
  name: "SideBar",
  props: ["is_login"],
  components: {
    SideBarMenu
  }
};
</script>
