<template>
<v-app>
      <numeron-title title="NumerOn"></numeron-title>

      <v-container v-if="ok00" grid-list-lg>
        <v-row align="center" justify="center">
          ルール
        </v-row>
        <v-row align="center" justify="center">
          遊ぶモード
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="4">
            <v-row align="center" justify="center">
                <router-link to="/vscom">
                    <v-btn
                     v-on:click="click_VS_com_mode_button()"
                     class="mx-2"
                     fab large 
                     outlined
                     color="light-blue darken-4"
                    >
                      VS com
                    </v-btn>
                </router-link>
                <router-link to="/online">
                    <v-btn
                     v-on:click="click_online_mode_button()"
                     class="mx-2"
                     fab large 
                     outlined
                     color="light-blue lighten-1"
                    >
                      online
                    </v-btn>
                </router-link>
                <router-link to="/judge">
                    <v-btn
                     v-on:click="click_judge_mode_button()"
                     class="mx-2"
                     fab large 
                     outlined
                     color="light-blue lighten-1"
                    >
                        judge
                    </v-btn>
                </router-link>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <router-view></router-view>

      <my-btn-number></my-btn-number>

     <v-container>
         <v-row v-if="ok01" justify="center">
          <v-row>
            <v-col 
              class="title font-weight-bold text-center light-blue--text text--lighten-1"
              cols="12"
              >
              何桁で遊ぶ?
            </v-col>
          </v-row>
        </v-row>
        <v-row v-if="ok01" justify="center">
            <v-col 
              v-for="play_btn_number in play_btn_numbers" :key="play_btn_number.id"
              cols="2"              
            >
              <v-row justify="center">
                <v-btn
                  id="number_btn"
                  v-on:click="click_auto_play_button_number(play_btn_number)"
                  class="mx-2"
                  fab large 
                  outlined
                  color="light-blue lighten-1"
                >
                  {{play_btn_number}}
                </v-btn>  
              </v-row>
            </v-col>
        </v-row>  
      </v-container>
        <v-row v-if="ok4" justify="center">   
          <v-text class="red--text">※※ごめんね<br>まだそのモードは追加されてないんだ</v-text>       
        </v-row>
      </v-app>
</template>

<script>
import NumeronTitle from "@/components/NumeronTitle.vue"
import MyBtnNumber from '@/components/MyBtnNumber.vue'
  export default {
    name: 'Home',
    components: {
      NumeronTitle,
      MyBtnNumber
    },
    methods: {
      click_VS_com_mode_button: function(){
        this.ok00 = false
        this.ok01 = true
      },
      click_online_mode_button: function(){
        this.ok00 = false
        this.ok4 = true
      },
      click_judge_mode_button: function(){
        this.ok00 = false
        this.ok0 = true
      },
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