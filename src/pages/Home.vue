<template>
  <v-app>
    <!-- 説明画面 -->
    <v-container
      style="background-image: url('https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg');"
      fluid
    >
      <v-row align="center" justify="center">
        <v-col cols="12" xs="3">
          <rule-description />
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="12">
          <how-to-play />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import RuleDescription from "@/components/RuleDescription.vue";
import HowToPlay from "@/components/HowToPlay.vue";
export default {
  name: "Home",

  components: {
    RuleDescription,
    HowToPlay
  }
};
</script>
