<template>
    <v-app>
        <v-container style="height: 50%;" py-auto>
            <v-row
            align="center"
            justify="center"
            >
                <v-col
                    class="display-2 font-weight-bold text-center light-blue--text text--lighten-1"
                    cols="12"
                >
                    <h1 display-4>{{message}}</h1>
                </v-col>
            </v-row>
            <v-row align="center" justify="center">
                <v-col
                    v-for="digit_num in digit_nums" :key="digit_num.id"
                    class=""
                    cols="2"
                    sm="12"
                    my-3
                >
                <v-row align="center" justify="center">
                    <v-btn
                        id="number_btn"
                        v-on:click="click_digit_btn(digit_num)"
                        class="ma-sm-4 ma-lg-8 pa-4"
                        fab
                        height="350px"
                        width="350px"
                        outlined
                        color="light-blue lighten-1"
                    >
                        <h1 display-4>{{digit_num}}</h1>
                    </v-btn>

                </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
export default {
    name: "SelectDigit",
    data: () =>  ({
        digit_nums: [3,4,5],
    }),
    props: [
        'message',
    ],
    methods: {
        click_digit_btn: function(digit_num){
            this.$emit('set_digit_num', digit_num)
            this.$emit('click_btn')
        },
    },
}
</script>