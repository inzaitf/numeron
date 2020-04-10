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
            <v-text-field
              label="数字を設定してね！"
              outlined
              v-model.number="my_number"
            ></v-text-field>
          </v-col>
          <v-col class="text-center" cols="12">
              <v-btn v-on:click="click_set" depressed large color="primary">設定</v-btn>
          </v-col>
        </v-row>

        <v-row v-if="ok2" justify="center">
          <v-col cols="2">
            <v-text-field
              label="数字を当てよう！"
              outlined
              v-model.number="judge_number"
            ></v-text-field>
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
        if(this.digit_number === String(this.my_number).length) {
          this.ok2 = true
          this.ok1 = false
          this.ok4 = false
        }
        else {
          this.ok4 = true
        }
  
      },
  
      click_judge: function() {
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
  
  
        }
        else {
          this.ok4 = true
        }
      },
    },
    data: () => ({
      numbers: [3,4,5],
      ok0: true,
      ok1: false,
      ok2: false,
      ok3: false,
      ok4: false,
      my_number: null,
      judge_number: null,
      eat: 0,
      bite: 0,
      digit_number: null,
      judge_datas: [],
    }),
  };
</script>
