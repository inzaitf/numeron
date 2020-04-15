<template>
    <v-app>
        <v-container v-if="ok1">
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
                                {{my_number_lists[i-1]}}
                              </h2>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container v-if="ok1">
            <v-row align="center" justify="center">
                <v-col cols="4">
                    <v-row align="center" justify="center">             
                        <v-col v-for="(button_number, index) in button_numbers" :key="button_number.id" cols="4">
                            <v-row align="center" justify="center">
                                <v-btn v-if="!(button_number.clicked)" 
                                    id="number_btn"
                                    v-on:click="click_my_button_number(index)"
                                    class="ma-2"
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
                        <v-row align="end" justify="center">
                            <v-col cols="4" class="ma-2">
                            </v-col>
                        </v-row>    
                        <v-col cols="4">
                            <v-btn v-on:click="click_set" :disabled="to_disabled" class="ma-2" fab large outlined color="light-blue lighten-1">設定</v-btn>
                        </v-col>               
                    </v-row>            
                </v-col>                     
            </v-row>  
        </v-container>
        <judge-btn-number
            :digit_number='digit_number' 
            :ok2='ok2'
            :button_numbers='button_numbers'
            :to_disabled='to_disabled'
            :my_number_lists='my_number_lists'
            :my_number='my_number'
            :judge_number_lists='judge_number_lists'
        ></judge-btn-number>
    </v-app>
</template>

<script>
import JudgeBtnNumber from '@/components/JudgeBtnNumber.vue'
export default {
    name: "MyBtnNumber",
    components: {
        JudgeBtnNumber
    },
    methods: {
        click_my_button_number(btn_index) {
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
            this.to_disabled = false
            for (var x = 0; x < this.digit_number; x++) {
              if(this.my_number_lists[x] == null) {
                this.to_disabled = true
              }
            }
        },
        click_set(){
            this.ok2 = true
            this.ok1 = false
            this.ok4 = false
            this.my_number = this.my_number_lists.join("");
            for(var i in this.button_numbers) {
                this.button_numbers[i].clicked = false
            }
        },
    },
    props: [
        'digit_number',
        'ok0',
        'ok1',
        'play_btn_numbers',
        'my_number_lists',
        'my_number',
        'judge_number_lists',
    ],
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
        to_disabled: true,
        ok2: false,
        ok4: false,
    }),    
}


</script>


