<template>
<v-app>
      <numeron-title title="NumerOn"></numeron-title>

      <v-container>
        <v-row align="center" justify="center">
          ルール
        </v-row>
        <v-row align="center" justify="center">
          遊ぶモード
        </v-row>
        
        <v-row align="center" justify="center" style="height: 100px;">
          <v-col cols="4">
            <v-row align="center" justify="center">
                
                
              <mode-btn
                btn_color="light-blue lighten-1"
                mode_name="VSCOM"
                link_name="/vscom"
              >
              </mode-btn>

              <mode-btn
                btn_color="light-blue lighten-1"
                mode_name="ONLINE"
                link_name="/online"
              >
              </mode-btn>
          
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

      <my-btn-number></my-btn-number>

     <v-container>

      </v-container>
        <v-row v-if="ok4" justify="center">   
          <v-text class="red--text">※※ごめんね<br>まだそのモードは追加されてないんだ</v-text>       
        </v-row>
      </v-app>
</template>

<script>
import NumeronTitle from "@/components/NumeronTitle.vue"
import MyBtnNumber from '@/components/MyBtnNumber.vue'
import ModeBtn from '@/components/ModeBtn.vue'

  export default {
    name: 'Home',
    components: {
      NumeronTitle,
      MyBtnNumber,
      ModeBtn
    },
    methods: {
    },
    data: () => ({
      play_btn_numbers: [3,4,5],
      button_numbers: [
        {value: 0, clicked: false},
        {value: 1, clicked: false},
        {value: 2, clicked: false},
        {value: 3, clicked: false},
        {value: 4, clicked: false},
        {value: 5, clicked: false},
        {value: 6, clicked: false},
        {value: 7, clicked: false},
        {value: 8, clicked: false},
        {value: 9, clicked: false},
        ],
      numbers: [3,4,5],
      
      ok00: true, 
      ok0: false,
      ok4: false,
    }),
  };
</script>