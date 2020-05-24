<template>
  <v-row class="my-8">
    <router-link :to="link" class="link-black font-weight-bold" style="height: 100%;">
      <v-list-item>
        <v-list-item-icon style="height: 100%;">
          <v-icon size="50px" left>{{ icon }}</v-icon>
        </v-list-item-icon>
        <v-container style="height: 100%;">
          <v-row style="height: 100px;">
            <v-list-item-title style="font-size: 40px; height: 100%;">{{ menu }}</v-list-item-title>
          </v-row>
        </v-container>
      </v-list-item>
    </router-link>
  </v-row>
</template>

<script>
export default {
  name: "SideBarMenu",
  props: ["menu", "icon", "link"]
};
</script>
