<template>
    <v-app>
      <v-container v-if="ok2">
       <v-row justify="center"> 
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
        </v-container>
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
                    <v-btn v-on:click="click_judge" :disabled="to_disabled" fab large outlined color="light-blue lighten-1">判定</v-btn>
                  </v-col>               
                </v-row>               
              </v-row>
            </v-col>
            <v-col cols="4">                
              <v-row align="top" justify="end"> 
               <v-col cols="12">
                 <v-card
                   class="mx-auto overflow-y-auto"
                   id="scroll-target"
                   v-if="ok3"
                   max-height="300px"
                 >
                   <v-toolbar color="light-blue lighten-1" dark>
                     <v-row justify="center">
                      <v-toolbar-title>履歴</v-toolbar-title>
                     </v-row>
                   </v-toolbar>              
                   <v-list-item v-for="judge_data in judge_datas" :key="judge_data.id" 
                      
                    
                      >   
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
    </v-app>
</template>

<script>
export default {
    name: "JudgeBtnNumber",
    props: [
        'digit_number', 
        'my_number_lists',
        'my_number',
        'ok2',
        'judge_number_lists',
    ],
    methods: {
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
            this.to_disabled = false
            for (var x = 0; x < this.digit_number; x++) {
              if(this.judge_number_lists[x] == null) {
                this.to_disabled = true
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
        ok3: false,
        judge_number: null,
        eat: 0,
        bite: 0,
        judge_datas: [],
        to_disabled: true,
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
        ]
    })
}

</script>