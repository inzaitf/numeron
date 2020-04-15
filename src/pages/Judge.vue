<template>
    <v-app>
        <v-container v-if="ok0">
            <v-row align="center" justify="center">
                <v-col 
                    class="title font-weight-bold text-center light-blue--text text--lighten-1"
                    cols="12"
                >
                    何桁で遊ぶ?
                </v-col>
            </v-row>
            <v-row justify="center">
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
        </v-container>
        <my-btn-number 
        :ok1="ok1" 
        :digit_number="digit_number"
        :play_btn_numbers="play_btn_numbers"
        :my_number_lists="my_number_lists"
        :my_number="my_number"
        :judge_number_lists="judge_number_lists"
        ></my-btn-number>
    </v-app>
</template>

<script>
import MyBtnNumber from "@/components/MyBtnNumber.vue"
    export default {
        name: 'Judge',
        components: {
            MyBtnNumber
        },
    
        methods: {
            click_play_button_number(play_btn_number) {
                this.ok0 = false
                this.ok1 = true
                this.digit_number = play_btn_number
                this.my_number_lists = new Array(this.digit_number)
                this.judge_number_lists = new Array(this.digit_number)
            },
        },
        data: () => ({
            ok0: true,
            ok1: false,
            digit_number: null,
            play_btn_numbers: [3,4,5],
            my_number_lists: [],
            my_number: null,
            judge_number_lists: [],
        }),
    };
</script>