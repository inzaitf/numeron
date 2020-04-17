<template>
    <v-app>

        <!-- ナンバーの表示画面 -->
        <v-container>
            <v-row justify="center">
                <v-col v-for="i in digit_num" :key="i.id" cols="2">
                    <v-card color="lightblue lighten-1" style="border: solid 1px #29B6F6; height: 100px;">
                        <v-row
                            style="height: 100px;"
                            justify="center"
                            align="center"
                        >
                            <v-col cols="6" class="text-center">
                                <h2 class="display-3 font-weight-bold light-blue--text text--lighten-3">
                                    {{number[i-1]}}
                                </h2>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <!-- 数字選択ボタン画面 -->
        <v-container>
            <v-row align="top">
                <v-col cols="4">
                    <v-row align="center" justify="center">
                        <v-col v-for="(btn_num, index) in btn_num" :key="btn_num.id" cols="4" class="m-auto">
                            <v-row align="center" justify="center">
                                <v-btn v-if="!(btn_num.clicked)"
                                    id="number_btn"
                                    v-on:click="click_btn_num(index); to_disable_btn()"
                                    class="mx-2"
                                    fab large
                                    outlined
                                    color="light-blue lighten-1"
                                >
                                    {{index}}
                                </v-btn>
                                <v-btn v-else
                                    id="number_btn"
                                    v-on:click="click_btn_num(index); to_disable_btn()"
                                    class="mx-2"
                                    fab large dark color="cyan lighten-5"
                                >
                                    {{index}}
                                </v-btn>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <!-- 実行ボタン -->
            <v-btn
                id="number_btn"
                v-on:click="clicked_btn"
                :disabled='disable'
                class="mx-2"
                fab large
                outlined
                color="light-blue lighten-1"
            >
                {{call_btn_name}}
            </v-btn>

        </v-container>

    </v-app>
</template>

<script>
export default {
    name: "BtnNumber",

    props: [
        'digit_num',
        'judge_btn_num_flag',
        'call_btn_name',
    ],


    data: ()=> ({
        disable: true,
        btn_num: [
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
        flag: true,
        number: [],
    }),

    methods: {
        // 選択した数字の取得
        click_btn_num: function(btn_index) {
            var num_index = this.number.indexOf(btn_index)
            if(this.btn_num[btn_index].clicked === true) {
                this.btn_num[btn_index].clicked = false
                this.number[num_index] = null
            }else {
                for (var i = 0; i < this.digit_num; i++) {
                    if(this.number[i] == null) {
                        this.btn_num[btn_index].clicked = true
                        this.number[i] = btn_index
                        break
                    }
                }
            }
            this.$emit('set_num', this.number)
        },
        // 桁数以上入力できないようにする
        to_disable_btn: function() {
            this.disable = false
            for (var x = 0; x < this.digit_num; x++) {
                if(this.number[x] == null) {
                    this.disable = true
                }
            }
        },

        clicked_btn: function(){
            this.$emit('clicked_btn')  
            for(var i in this.number){
                this.btn_num[this.number[i]].clicked = false
                this.number[i] = null
            }
        },
    },
}
</script>