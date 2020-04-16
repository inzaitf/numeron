<template>
<v-app>
    <v-row v-if="ok01" justify="center">
        <v-row>
            <v-col
              class="title font-weight-bold text-center light-blue--text text--lighten-1"
              cols="12"
              >
              {{message}}
            </v-col>
        </v-row>
    </v-row>
    <v-row justify="center">
        <v-col
            v-for="digit_number in digit_numbers" :key="digit_number.id"
            cols="2"
        >
            <v-row justify="center">
                <v-btn
                    id="number_btn"
                    v-on:click="click_digit_btn(digit_number), change_digit_flag()"
                    class="mx-2"
                    fab large
                    outlined
                    color="light-blue lighten-1"
                >
                  {{digit_number}}
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
        digit_number: 0,
        digit_numbers: [3,4,5],
        message: "",

    }),
    methods: {
        click_digit_btn(digit_number){
            this.digit_number = digit_number
        },
        change_digit_flag(){
            this.$store.commit('change_digit_flag')
        }
    }

}
</script>