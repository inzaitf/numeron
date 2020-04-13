<template>
  <v-app>
    <div id="app" >
      <v-container>
        <v-row justify="center">          
          <v-col 
            class="" cols="6"
          ><v-row justify="center">
            <v-col cols="12">              
              <h1 style="borderBottom: solid 5px #29B6F6" class="display-4 font-italic font-weight-bold text-center light-blue--text text--lighten-1">
                 Numer0n
              </h1>
            </v-col>
          </v-row>
          </v-col>
              
        </v-row>  
      </v-container>

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
              <v-btn
               v-on:click="click_VS_com_mode_button()"
               class="mx-2"
               fab large 
               outlined
               color="light-blue darken-4"
              >
                VS com
              </v-btn>
              <v-btn
               v-on:click="click_online_mode_button()"
               class="mx-2"
               fab large 
               outlined
               color="light-blue lighten-1"
              
              >
                online
              </v-btn>
              <v-btn
               v-on:click="click_judge_mode_button()"
               class="mx-2"
               fab large 
               outlined
               color="light-blue lighten-1"
              >
                判定
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

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

      <v-container grid-list-lg>
        <v-row v-if="ok0" justify="center">
          <v-row>
            <v-col 
              class="title font-weight-bold text-center light-blue--text text--lighten-1"
              cols="12"
              >
              何桁で遊ぶ?
            </v-col>
          </v-row>
        </v-row>
        <v-row v-if="ok0" justify="center">
            <v-col 
              v-for="play_btn_number in play_btn_numbers" :key="play_btn_number.id"
              cols="2"              
            >
              <v-row justify="center">
                <v-btn
                  id="number_btn"
                  v-on:click="click_play_button_number(play_btn_number)"
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
        
        <v-row v-if="ok1" justify="center"> 
          <v-col v-for="i in digit_number" :key="i.id" cols="2">
              <v-card color="lightblue lighten-1" style="border: solid 1px #29B6F6; height: 100px;">
                <v-row
                style="height: 100px;"
                justify="center"
                align="center"
                >
                  <v-col cols="6" class="text-center">
                    <h2 class="display-3 font-weight-bold light-blue--text text--lighten-3">
                      {{my_number_lists[i-1]}}
                    </h2>
                  </v-col>
                </v-row>
              </v-card>
          </v-col>
        </v-row>
        <v-container v-if="ok1">
          <v-row align="center" justify="center">
            <v-col cols="4">
              <v-row align="center" justify="center">             
                <v-col v-for="(button_number, index) in button_numbers" :key="button_number.id" cols="4">
                  <v-row align="center" justify="center">
                    <v-btn v-if="!(button_number.clicked)" 
                        id="number_btn"
                        v-on:click="click_my_button_number(index)"
                        class="mx-2"
                        fab large 
                        outlined
                        color="light-blue lighten-1"
                    >
                      {{index}}
                    </v-btn>
                    <v-btn v-else
                        id="number_btn"
                        v-on:click="click_my_button_number(index)"
                        class="mx-2"
                        fab large dark color="cyan lighten-5"
                    >               
                      {{index}}              
                    </v-btn>
                  </v-row>
                </v-col>             
                <v-col cols="6">
                  <v-btn v-on:click="click_set" fab large outlined color="light-blue lighten-1">設定</v-btn>
                </v-col>               
              </v-row>            
            </v-col>                     
          </v-row>  
        </v-container>

        <v-row v-if="ok2" justify="center"> 
          <v-col v-for="i in digit_number" :key="i.id" cols="2">
              <v-card color="lightblue lighten-1" style="border: solid 1px #29B6F6; height: 100px;">
                <v-row
                style="height: 100px;"
                justify="center"
                align="center"
                >
                  <v-col cols="6" class="text-center">
                    <h2 class="display-3 font-weight-bold light-blue--text text--lighten-3">
                      {{judge_number_lists[i-1]}}
                    </h2>
                  </v-col>
                </v-row>
              </v-card>
          </v-col>
        </v-row>
        <v-container v-if="ok2">
          <v-row align="top">
            <v-col></v-col>      
            <v-col cols="4">
              <v-row align="center" justify="center">             
                <v-col v-for="(button_number, index) in button_numbers" :key="button_number.id" cols="4" class="m-auto">
                  <v-row align="center" justify="center">
                    <v-btn v-if="!(button_number.clicked)" 
                        id="number_btn"
                        v-on:click="click_judge_button_number(index)"
                        class="mx-2"
                        fab large 
                        outlined
                        color="light-blue lighten-1"
                    >
                      {{index}}
                    </v-btn>
                    <v-btn v-else
                        id="number_btn"
                        v-on:click="click_judge_button_number(index)"
                        class="mx-2"
                        fab large dark color="cyan lighten-5"
                    >               
                      {{index}}              
                    </v-btn>
                  </v-row>
                </v-col>
                <v-row align="end" justify="center">
                  <v-col cols="4"></v-col>
                </v-row>
                <v-row align="end" justify="end" >
                  <v-col cols="4" class="mx-auto">
                    <v-btn v-on:click="click_judge" :disabled="judge_push" fab large outlined color="light-blue lighten-1">判定</v-btn>
                  </v-col>               
                </v-row>               
              </v-row>
            </v-col>
            <v-col cols="4">                
              <v-row align="top" justify="end"> 
               <v-col cols="12">
                 <v-card
                   class="mx-auto overflow-y-auto"
                   v-if="ok3"
                   id="scroll-target"
                   max-height="300px"
                 >
                   <v-toolbar color="indigo" dark>
                     <v-row justify="center">
                      <v-toolbar-title>履歴</v-toolbar-title>
                     </v-row>
                   </v-toolbar>              
                   <v-list-item v-for="judge_data in judge_datas" :key="judge_data.id">        
                        <v-list-item-content>
                          <v-list-item-title >{{judge_data.judge_number}}</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-content>
                          <v-list-item-title >{{judge_data.eat}}eat{{judge_data.bite}}bite!</v-list-item-title>
                        </v-list-item-content>
                   </v-list-item>                      
                 </v-card>
               </v-col>
              </v-row>
            </v-col>
          </v-row>  
        </v-container>
        <!-- エラー文章 -->
        <v-row v-if="ok4" justify="center">   
          <v-text class="red--text">※※ごめんね<br>まだそのモードは追加されてないんだ</v-text>       
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
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
      click_play: function(){
        this.ok0 = false
        this.ok1 = true
        this.my_number_lists = new Array(this.digit_number)
        this.judge_number_lists = new Array(this.digit_number)
        
      },
      click_set: function(){
        this.ok2 = true
        this.ok1 = false
        this.ok4 = false
        this.my_number = this.my_number_lists.join("");
        for(var i in this.button_numbers) {
          this.button_numbers[i].clicked = false
        }
      },
      click_auto_play_button_number: function(play_btn_number){
        this.ok01 = false
        this.ok2 = true
        this.digit_number = play_btn_number
        this.my_number_lists = new Array(this.digit_number)
        this.judge_number_lists = new Array(this.digit_number)
        var max_index = 10;
        const auto_my_numbers = [];
        const numbers = [0,1,2,3,4,5,6,7,8,9];
        for(var i = 0; i < this.digit_number ; i++){   
          var index = Math.floor( Math.random() * max_index );
          auto_my_numbers.push(numbers[index]);            
          numbers.splice(index,index);
          max_index--
        }
        this.my_number = auto_my_numbers.join("");
      },
      click_play_button_number: function(play_btn_number){
        this.ok0 = false
        this.ok1 = true
        this.digit_number = play_btn_number
        this.my_number_lists = new Array(this.digit_number)
        this.judge_number_lists = new Array(this.digit_number)
      },
      click_my_button_number: function(btn_index) {
        //桁数以上の数字を入力出来ないようにする
        var my_num_index = this.my_number_lists.indexOf(btn_index)
        if(this.button_numbers[btn_index].clicked === true) {
          this.button_numbers[btn_index].clicked = false
          this.my_number_lists[my_num_index] = null
        }else {
          for (var i = 0; i < this.digit_number; i++) {
            if(this.my_number_lists[i] == null) {
              this.button_numbers[btn_index].clicked = true  
              this.my_number_lists[i] = btn_index
              break   
            }
          }
        }
      },
      click_judge_button_number: function(btn_index) {
        var judge_num_index = this.judge_number_lists.indexOf(btn_index)
        if(this.button_numbers[btn_index].clicked === true) {
          this.button_numbers[btn_index].clicked = false
          this.judge_number_lists[judge_num_index] = null
        }else {
          for (var i = 0; i < this.digit_number; i++) {
            if(this.judge_number_lists[i] == null) {
              this.button_numbers[btn_index].clicked = true  
              this.judge_number_lists[i] = btn_index
              break   
            }
          }
        }
        this.judge_push = false
        for (var x = 0; x < this.digit_number; x++) {
          if(this.judge_number_lists[x] == null) {
            this.judge_push = true
          }
        }
      },
      click_judge: function() {
        this.judge_number = this.judge_number_lists.join("");
        this.judge_push = true
        for(var i in this.button_numbers) {
          this.button_numbers[i].clicked = false
        }
          this.ok3 = true
          this.ok4 = false
          var my_number_lists = []
          var judge_number_lists = []
          var my_number = this.my_number
          var judge_number = this.judge_number
           for (var x = 0; x < this.digit_number; x++) {
            my_number_lists.unshift(my_number % 10)
            judge_number_lists.unshift(judge_number % 10)
            my_number = parseInt(my_number / 10)
            judge_number = parseInt(judge_number / 10)
          }
          var eat = 0
          var bite = 0
          for (var index_m in my_number_lists) {
            for (var index_j in judge_number_lists) {
              if (my_number_lists[index_m] === judge_number_lists[index_j]) {
                if (index_m === index_j) {
                  eat++;
                } else {
                  bite++;
                }
              }
            }
          }
          this.eat = eat
          this.bite = bite
          var judge_data_obj = {
            eat: this.eat,
            bite: this.bite,
            judge_number: this.judge_number,
          }          
          this.judge_datas.unshift(judge_data_obj)
          this.judge_number_lists.length = 0
      }
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
      to_disable: false,
      ok00: true, 
      ok0: false,
      ok1: false,
      ok2: false,
      ok3: false,
      ok4: false,
      my_number_lists: [],
      my_number: null,
      judge_number_lists: [],
      judge_number: null,
      eat: 0,
      bite: 0,
      digit_number: null,
      judge_datas: [],
      judge_push: true,
    }),
  };
</script>