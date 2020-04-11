<template>
  <v-app>
    <div id="app" >

      <v-container>
        <v-row>
          <v-col 
            class="" cols="12"
          >
            <h1 class="display-4 font-italic font-weight-bold text-center">
               Numer0n
            </h1>
          </v-col>
              
        </v-row>  
      </v-container>

      <v-container grid-list-lg>
        <v-row v-if="ok0" justify="center">
            <v-col class="text-center" cols="2">
              <v-select
                :items="numbers"
                label="何桁で遊ぶ？"
                outlined
                v-model.number="digit_number"
              ></v-select>
            </v-col>
             <v-col class="text-center" cols="12" >
                 <v-btn v-on:click="click_play" fab large outlined color="light-blue lighten-1">遊ぶ</v-btn>
             </v-col>
        </v-row>

        <v-row v-if="ok1" justify="center">
          <v-col cols="2">
            <v-row>
              {{my_number_list}}
            </v-row>
            <v-container v-for="(button_number, index) in button_numbers" :key="button_number.id">             
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
            </v-container>
          
            <v-row>
              <v-col cols="6">
                  <v-btn v-on:click="click_set" fab large outlined color="light-blue lighten-1">設定</v-btn>
              </v-col>
              <v-col cols="6">
                  <v-btn v-on:click="click_auto_set" fab large outlined color="light-blue lighten-1">自動設定</v-btn>
              </v-col>            
            </v-row>     
          </v-col>
        </v-row>

        <v-row v-if="ok2" justify="center">
          <v-col cols="2">
            <v-col cols="2">
            <v-row>
              {{judge_number_list}}
            </v-row>
            <v-container v-for="(button_number, index) in button_numbers" :key="button_number.id">             
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
            </v-container>
          </v-col>

          </v-col>
          <v-col class="text-center" cols="12">
            <div >
              <v-btn v-on:click="click_judge" depressed large color="primary">判定</v-btn>
            </div>
          </v-col>
        </v-row>

        <v-row v-if="ok4" justify="center">   
          <v-text class="red--text">※※正しい桁数を入力してください</v-text>       
        </v-row>
      </v-container>

      <v-card
        max-width="500"
        class="mx-auto overflow-y-auto"
        v-if="ok3"
        id="scroll-target"
        style="max-height: 200px"
         
      >
        <v-toolbar
          color="indigo"
          dark
        >
          <v-toolbar-title>履歴</v-toolbar-title>
        </v-toolbar>
        <v-list-item
          v-for="judge_data in judge_datas"
          :key="judge_data.id"        
        >
        
          <v-list-item-content>
            <v-list-item-title >{{judge_data.judge_number}}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title >{{judge_data.eat}}eat{{judge_data.bite}}bite!</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </v-app>
</template>

<script>


  export default {
    name: 'App',

    methods: {
      click_play: function(){
        this.ok0 = false
        this.ok1 = true
      },

      click_set: function(){
        this.my_number = this.my_number_list.join("");
        for(var i in this.button_numbers) {
          this.button_numbers[i].clicked = false
        }
        if(this.digit_number === String(this.my_number).length) {
          this.ok2 = true
          this.ok1 = false
          this.ok4 = false
        }
        else {
          this.ok4 = true
        }
      },
      click_auto_set: function(){
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

        if(this.digit_number === String(this.my_number).length) {
          this.ok2 = true
          this.ok1 = false
          this.ok4 = false
        }
        else {
          this.ok4 = true
        }
      },

      click_my_button_number: function(btn_index) {
        //my＿number＿listのindexが等しい時に
        if (this.button_numbers[btn_index].clicked === false) {
          this.button_numbers[btn_index].clicked = true
          this.my_number_list.push(btn_index)
        }
        else {
          this.button_numbers[btn_index].clicked = false
          var my_num_index = this.my_number_list.indexOf(btn_index)
          this.my_number_list.splice(my_num_index,1) 
        } 
      },

      click_judge_button_number: function(btn_index) {
         if (this.button_numbers[btn_index].clicked === false) {
          this.button_numbers[btn_index].clicked = true
          this.judge_number_list.push(btn_index)
        }
        else {
          this.button_numbers[btn_index].clicked = false
          var judge_num_index = this.judge_number_list.indexOf(btn_index)
          this.judge_number_list.splice(judge_num_index,1) 
        } 
      },

      click_judge: function() {

        this.judge_number = this.judge_number_list.join("");
        for(var i in this.button_numbers) {
          this.button_numbers[i].clicked = false
        }
        if(this.digit_number === String(this.judge_number).length){
          this.ok3 = true
          this.ok4 = false
          var my_number_list = []
          var judge_number_list = []
          var my_number = this.my_number
          var judge_number = this.judge_number

          for (var x = 0; x < this.digit_number; x++) {
            my_number_list.unshift(my_number % 10)
            judge_number_list.unshift(judge_number % 10)
            my_number = parseInt(my_number / 10)
            judge_number = parseInt(judge_number / 10)
          }

          var eat = 0
          var bite = 0
          for (var index_m in my_number_list) {
            for (var index_j in judge_number_list) {
              if (my_number_list[index_m] === judge_number_list[index_j]) {
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
          this.judge_datas.push(judge_data_obj)
          this.judge_number_list.length = 0



        }
        else {
          this.ok4 = true
        }
      },
    },
    data: () => ({
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
      ok0: true,
      ok1: false,
      ok2: false,
      ok3: false,
      ok4: false,
      my_number_list: [],
      my_number: null,
      judge_number_list: [],
      judge_number: null,
      eat: 0,
      bite: 0,
      digit_number: null,
      judge_datas: [],
    }),
  };
</script>
