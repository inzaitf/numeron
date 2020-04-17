<template>
  <v-app>
    <!-- タイトルロゴ -->
    <numeron-title title="NumerOn"></numeron-title>

    <v-container>
      
      <!-- 説明画面 -->
      <v-row align="center" justify="center">
        <v-col cols='4'>
        ルール
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="4">
        遊ぶモード
        </v-col>
      </v-row>
      
      <!-- モード選択画面 -->
      <v-row align="center" justify="center" style="height: 100px;">
        <v-col cols="8">
          <v-row align="center" justify="center">
            <!-- VSCOMモード -->
            <mode-btn
              btn_color="light-blue lighten-1"
              mode_name="VSCOM"
              link_name="/vscom"
            >
            </mode-btn>
            <!-- ONLINEモード -->
            <mode-btn
              btn_color="light-blue lighten-1"
              mode_name="ONLINE"
              link_name="/online"
            >
            </mode-btn>
            <!-- JUDGEモード -->
            <mode-btn
              btn_color="light-blue lighten-1"
              mode_name="JUDGE"
              link_name="/judge"
            >
            </mode-btn>
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