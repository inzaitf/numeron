<template>
  <v-row align="center" justify="end" class="mx-auto">
    <v-col cols="1">
      <router-link to="/" style="color: white; text-decoration:none;">Home</router-link>
    </v-col>
    <v-col cols="1">
      <router-link to="/vscom" style="color: white ; text-decoration:none;">VScom</router-link>
    </v-col>
    <v-col cols="1">
      <router-link to="/online" style="color: white ; text-decoration:none;">Online</router-link>
    </v-col>
    <v-col cols="1">
      <router-link to="/judge" style="color: white ; text-decoration:none;">Judge</router-link>
    </v-col>
    <v-col cols="1" v-if="!is_login">
      <router-link to="/login" style="color: white ; text-decoration:none;">Login</router-link>
    </v-col>
    <v-col cols="1" v-if="!is_login">
      <router-link to="/signup" style="color: white ; text-decoration:none;">Signup</router-link>
    </v-col>
    <v-col cols="1" v-if="is_login">
      <router-link to="/" @click.native="logout" style="color: white ; text-decoration:none;">logout</router-link>
    </v-col>
    <v-col cols="1" v-if="is_login">
      <router-link to="/account" style="color: white ; text-decoration:none;">Account</router-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "UpBar",
  props: ["is_login"]

};
</script>
