<template>
  <v-app>
    <!-- タイトルロゴ -->
    <numeron-title  title="NumerOn"></numeron-title>

    <v-container fluid>

      <!-- 説明画面 -->
      <v-row align="center" justify="center">
        <v-col cols='12' xs="3">
          <v-row align="center" justify="center">
            ルール
          </v-row>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols='12' xs="3">
          <v-row align="center" justify="center">
            遊ぶモード
          </v-row>
        </v-col>
      </v-row>
    </v-container>

      <!-- モード選択画面 -->
    <v-container style="height: 100%;" fluid>
      <v-row align="center" justify="center" style="height: 100%;">
        <v-col cols="12" style="height: 100%;">
          <v-row align="center" justify="center" ma-5 >
            <!-- VSCOMモード -->

            <v-col cols='12' xs="3">
              <v-row align="center" justify="center">
                <mode-btn
                  btn_color="light-blue lighten-1"
                  mode_name="VSCOM"
                  link_name="/vscom"
                >
                </mode-btn>
              </v-row>
            </v-col>
            <!-- ONLINEモード -->
            <v-col cols='12' xs="3">
              <v-row align="center" justify="center">
                <mode-btn
                  btn_color="light-blue lighten-1"
                  mode_name="ONLINE"
                  link_name="/online"
                >
                </mode-btn>
              </v-row>
            </v-col>
            <!-- JUDGEモード -->
            <!-- <v-col cols='12' xs="3">
              <v-row align="center" justify="center"> -->
                <mode-btn
                  btn_color="light-blue lighten-1"
                  mode_name="JUDGE"
                  link_name="/judge"
                >
                </mode-btn>
              <!-- </v-row>
            </v-col> -->
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <router-view></router-view>
  </v-app>
</template>

<script>
import NumeronTitle from "@/components/NumeronTitle.vue"
import ModeBtn from '@/components/ModeBtn.vue'

export default {

  name: 'Home',

  components: {
    NumeronTitle,
    ModeBtn
  },

};
</script>