<template>
  <v-row class="my-8">
    <router-link :to="link" class="link-black font-weight-bold">
      <v-list-item>
        <v-list-item-icon>
          <v-icon size="50px" left>{{ icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title style="font-size: 25px;">{{
          menu
        }}</v-list-item-title>
      </v-list-item>
    </router-link>
  </v-row>
</template>

<script>
export default {
  name: "side-bar",
  props: ["menu", "icon", "link"]
};
</script>
