<template>
    <v-app>
        <v-row align="center" justify="center" >
            <v-col
                class="title font-weight-bold text-center light-blue--text text--lighten-1"
                cols="12"
                >
                {{message}}
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col
                v-for="digit_num in digit_nums" :key="digit_num.id"
                cols="2"
            >
                <v-row justify="center">
                    <v-btn
                        id="number_btn"
                        v-on:click="click_digit_btn(digit_num)"
                        class="mx-2"
                        fab large
                        outlined
                        color="light-blue lighten-1"
                    >
                        {{digit_num}}
                    </v-btn>
                </v-row>
            </v-col>
        </v-row>
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