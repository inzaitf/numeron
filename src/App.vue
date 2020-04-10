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
                 <v-btn v-on:click="click_play" depressed large color="primary">遊ぶ</v-btn>
             </v-col>
        </v-row>

        <v-row v-if="ok1" justify="center">
          <v-col cols="2">
            <v-container v-for="(button_number, index) in button_numbers" :key="button_number.id">
              <v-btn 
                id="number_btn"
                v-on:click="click_my_button_number(index)"
                class="mx-2"
               
                :disabled="button_number.disabled"
                fab large color="cyan"
              >
                {{index}}
              </v-btn>
            </v-container>

            
            
            <!-- <v-text-field
              label="数字を設定してね！"
              outlined
              v-model.number="my_number"
            ></v-text-field> -->
          <v-row>
            <v-col cols="6">
                <v-btn v-on:click="click_set" depressed large color="primary">設定</v-btn>
            </v-col>
            <v-col cols="6">
                <v-btn v-on:click="click_auto_set" depressed large color="primary">自動設定</v-btn>
            </v-col>            
          </v-row>     
          </v-col>
        </v-row>

        <v-row v-if="ok2" justify="center">
          <v-col cols="2">
            
            <v-container v-for="(button_number, index) in button_numbers" :key="button_number.id">
              <v-btn 
                v-on:click="click_judge_button_number(index)" 
                class="mx-2" 
                :disabled="button_number.disabled"
                fab large color="cyan"
              >
                  {{index}}
              </v-btn>
            </v-container>

            <!-- <v-text-field
              label="数字を当てよう！"
              outlined
              v-model.number="judge_number"
            ></v-text-field> -->
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
  // export default {
  //   name: "number_btn",
  //   data: () => ({
  //     to_disable: false, 
  //   }),
  //   methods: {
  //     click_my_button_number: function(index) {
  //     //ボタンをdisableにする
  //     this.to_disable = true
  //     //入力された値をmy_numberに加える        
  //     App.my_number_list.push(index);    
  //     },
  //   },
  // };

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
          this.button_numbers[i].disabled = false
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

      click_my_button_number: function(index) {
        //ボタンをdisableにする
        this.button_numbers[index].disabled = true
        console.log(this.button_numbers[index].disabled)
        //入力された値をmy_numberに加える        
        this.my_number_list.push(index);
        
      },

      click_judge_button_number: function(index) {
        //ボタンをdisableにする
        this.button_numbers[index].disabled = true
        //入力された値をmy_numberに加える        
        this.judge_number_list.push(index);
        
      },

      click_judge: function() {

        this.judge_number = this.judge_number_list.join("");
        for(var x in this.button_numbers) {
          this.button_numbers[x].disabled = false
        }
        if(this.digit_number === String(this.judge_number).length){
          this.ok3 = true
          this.ok4 = false
          var my_number_list = []
          var judge_number_list = []
          var my_number = this.my_number
          var judge_number = this.judge_number

          for (var i = 0; i < this.digit_number; i++) {
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
        {value: 0, disabled: false},
        {value: 1, disabled: false},
        {value: 2, disabled: false},
        {value: 3, disabled: false},
        {value: 4, disabled: false},
        {value: 5, disabled: false},
        {value: 6, disabled: false},
        {value: 7, disabled: false},
        {value: 8, disabled: false},
        {value: 9, disabled: false},
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
