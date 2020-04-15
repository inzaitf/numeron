<template>
    <v-app>
        <v-container v-if="ok1">
             <v-row justify="center">
              <v-row>
                <v-col 
                  class="title font-weight-bold text-center light-blue--text text--lighten-1"
                  cols="12"
                  >
                  何桁で遊ぶ?
                </v-col>
              </v-row>
            </v-row>
            <v-row justify="center">
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
        <judge-btn-number
        :digit_number='digit_number' 
        :ok2='ok2'
        :my_number_lists='my_number_lists'
        :my_number='my_number'
        :judge_number_lists='judge_number_lists'
        ></judge-btn-number>
    </v-app>
</template>

<script>
import JudgeBtnNumber from '@/components/JudgeBtnNumber.vue'
export default {
    name: "Vscom",
    components: {
        JudgeBtnNumber,
    },
    methods: {
        click_auto_play_button_number(play_btn_number) {
            this.ok1 = false
            this.ok2 = true
            this.digit_number = play_btn_number
            this.judge_number_lists = new Array(this.digit_number)
            var max_index = 10;
            const numbers = [0,1,2,3,4,5,6,7,8,9];
            for(var i = 0; i < this.digit_number ; i++){   
              var index = Math.floor( Math.random() * max_index );
              this.my_number_lists.push(numbers[index]);
            }
            this.my_number = this.my_number_lists.join("");     
        },
    },
    data: () => ({
        ok1: true,
        ok2: false,
        digit_number: null,
        play_btn_numbers: [3,4,5],
        my_number_lists: [],
        my_number: null,
        judge_number_lists: [],
    }),

    

}
</script>