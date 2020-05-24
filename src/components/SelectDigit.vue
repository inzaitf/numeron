<template>
  <v-app>
    <v-container style="height: 100%; background-image:url('~@/assets/card_icon.jpg');" fluid>
      <v-row align="center" justify="center">
        <v-col
          class="display-2 font-weight-bold text-center light-blue--text text--lighten-1"
          cols="12"
        >
          <h1 style="font-size: 100%;">{{ message }}</h1>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col v-for="digit_num in digit_nums" :key="digit_num.id" cols="3" sm="3" class="pa-8">
          <v-row align="center" justify="center">
            <v-btn
              id="number_btn"
              v-on:click="click_digit_btn(digit_num)"
              class="ma-sm-4 ma-lg-8 pa-4"
              fab
              outlined
              color="blue darken-2"
              :style="{ 'background-image': 'url(' + card_icon + ')' }"
              style="background-size: cover; height: 100%; width: 100%"
            >
              <h1 style="font-size: 1000%;">{{ digit_num }}</h1>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import CardIcon from "@/assets/btn2.png";
export default {
  name: "SelectDigit",
  data: () => ({
    digit_nums: [3, 4, 5],
    card_icon: CardIcon
  }),
  props: ["mutation", "message"],
  methods: {
    click_digit_btn: function(digit_num) {
      this.$store.commit(this.mutation, digit_num);
      this.$emit("click_btn");
    }
  }
};
</script>