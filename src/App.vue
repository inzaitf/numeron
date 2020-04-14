<template>
  <v-app>
    <div id="app">
      <router-link to="/"></router-link>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
export default {
    name: 'App'
}
</script>