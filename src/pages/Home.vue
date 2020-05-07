<template>
  <v-app>
    <!-- 説明画面 -->
    <v-container
      style="background-image: url('https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg');"
      fluid
    >
      <v-row align="center" justify="center" no-gatters>
        <v-col cols="12" xs="3">
          <v-row align="center" justify="center">
            ルール
          </v-row>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" xs="3">
          <v-row align="center" justify="center">
            遊ぶモード
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- モード選択画面 -->
    <v-container style="height: 100% ;" fluid>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Home",

  components: {}
};
</script>
