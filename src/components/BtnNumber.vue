<template>
  <v-app style="height: 1300px;">
    <!-- ナンバーの表示画面 -->
    <v-container style="height: 400px; ">
      <v-row align="center" justify="center" style="height: 100%;">
        <v-col v-for="i in digit_num" :key="i.id" cols="2" class="mx-3">
          <v-card
          outlined
            color="blue darken-2"
            :style="{ 'background-image': 'url(' + card_icon + ')' }"
            style="border: solid 1px #29B6F6; height: 200px; width:200px; background-size: cover; "
          >
            <v-row style="height: 100%;" justify="center" align="center">
              <v-col cols="6">
                <v-row align="center" justify="center">
                  <h2
                    class="display-3 font-weight-bold light-blue--text text--lighten-3"
                  >{{ number[i - 1] }}</h2>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- 数字選択ボタン画面 -->
    <v-container style="height: 900px;">
      <v-row align="center" justify="center">
        <v-col cols="8" xs="4">
          <v-row align="center" justify="center">
            <v-col v-for="(btn, index) in btn_num" :key="btn.id" cols="4" class="ma-auto">
              <v-row align="center" justify="center">
                <v-btn
                  v-if="!btn.clicked"
                  id="number_btn"
                  v-on:click="
                    click_btn_num(index);
                    to_disable_btn();
                  "
                  class="mx-2"
                  fab
                  large
                  outlined
                  color="light-blue lighten-1"
                  height="150px"
                  width="150px"
                >{{ index }}</v-btn>
                <v-btn
                  v-else
                  id="number_btn"
                  v-on:click="
                    click_btn_num(index);
                    to_disable_btn();
                  "
                  class="mx-2"
                  fab
                  dark
                  color="cyan lighten-5"
                  height="1s50px"
                  width="150px"
                >{{ index }}</v-btn>
              </v-row>
            </v-col>
            <v-col cols="4" class="ma-auto"></v-col>
            <v-col cols="4" xs="4" class="ma-auto">
              <!-- 実行ボタン -->
              <v-row align="end" justify="center">
                <v-btn
                  id="number_btn"
                  v-on:click="clicked_btn()"
                  :disabled="disable"
                  class="mx-2"
                  fab
                  outlined
                  color="light-blue lighten-1"
                  height="150px"
                  width="150px"
                >{{ call_btn_name }}</v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import CardIcon from "@/assets/background_new.png";
export default {
  name: "BtnNumber",

  props: ["digit_num", "mutation", "call_btn_name"],

  data: () => ({
    card_icon: CardIcon,
    disable: true,
    btn_num: [
      { value: 0, clicked: false },
      { value: 1, clicked: false },
      { value: 2, clicked: false },
      { value: 3, clicked: false },
      { value: 4, clicked: false },
      { value: 5, clicked: false },
      { value: 6, clicked: false },
      { value: 7, clicked: false },
      { value: 8, clicked: false },
      { value: 9, clicked: false }
    ],
    number: []
  }),

  methods: {
    // 選択した数字の取得
    click_btn_num: function(btn_index) {
      var num_index = this.number.indexOf(btn_index);
      if (this.btn_num[btn_index].clicked === true) {
        this.btn_num[btn_index].clicked = false;
        this.number[num_index] = null;
      } else {
        for (var i = 0; i < this.digit_num; i++) {
          if (this.number[i] == null) {
            this.btn_num[btn_index].clicked = true;
            this.number[i] = btn_index;
            break;
          }
        }
      }
    },
    // 桁数以上入力できないようにする
    to_disable_btn: function() {
      this.disable = false;
      for (var x = 0; x < this.digit_num; x++) {
        if (this.number[x] == null) {
          this.disable = true;
        }
      }
    },

    clicked_btn: function() {
      this.$store.commit(this.mutation, this.number);
      this.$emit("clicked_btn");
    }
  }
};
</script>
