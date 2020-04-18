<template>
  <v-app>
    <!-- 桁数設定画面 -->
    <v-container v-if="digit_flag">
        <select-digit
        v-if="digit_flag"
        :digit_num='digit_num'
        message="何桁で遊ぶ?"
        @set_digit_num="set_digit_num"
        @click_btn="change_digit_flag(); change_my_btn_num_flag()"
        >
        </select-digit>
    </v-container>


    <!-- 自分の数字の設定画面 -->
    <btn-number
      v-if="my_btn_num_flag"
      :digit_num='digit_num'
      @set_num="set_my_num"
      @clicked_btn='change_my_btn_num_flag(); change_judge_btn_num_flag()'
      call_btn_name='設定'
    >
    </btn-number>

    <!-- コール画面 -->
    <btn-number
      v-if="judge_btn_num_flag"
      :digit_num='digit_num'
      @set_num="set_judge_num"
      @clicked_btn='change_history_flag(); judge()'
      call_btn_name='判定'
    >
    </btn-number>

    <!-- コール履歴 -->
    <history
      v-if='history_flag'
      :judge_data='judge_datas'
    >
    </history>

  </v-app>
</template>

<script>
import BtnNumber from '@/components/BtnNumber.vue'
import SelectDigit from '@/components/SelectDigit.vue'
import History from '@/components/History.vue'

export default {
  name: "Vscom",

  components: {
    BtnNumber,
    SelectDigit,
    History,
  },

  data: () => ({
    digit_num: null,            // 桁数
    play_btn_numbers: [3,4,5],  // 桁数の候補
    my_num: [],                 // 自分の設定した数字
    judge_num: [],              // コールする数字
    eat: 0,                     // イート
    bite: 0,                    // バイト
    judge_datas: [],            // 履歴に表示するデータ

    digit_flag: true,           // 桁数選択画面の制御フラグ
    my_btn_num_flag: false,     // 自分の数字の設定画面の制御フラグ
    judge_btn_num_flag: false,  // コール画面の制御フラグ
    history_flag: false,        // 履歴画面の制御フラグ
  }),

  props: {
  },


  methods: {
    // 桁数選択画面の制御フラグ変更
    change_digit_flag() {
      this.digit_flag = !this.digit_flag
    },
    // 自分の数字の設定画面の制御フラグ変更
    change_my_btn_num_flag() {
      this.my_btn_num_flag = !this.my_btn_num_flag
    },
    // コール画面の制御フラグ変更
    change_judge_btn_num_flag() {
        this.judge_btn_num_flag = !this.judge_btn_num_flag
    },

    // 履歴画面の制御フラグ
    change_history_flag: function() {
      this.history_flag = true
    },

    // 桁数の取得
    set_digit_num: function(digit_num){
      this.digit_num = digit_num
    },

    // 自分の数字の設定
    set_my_num: function(my_num){
      this.my_num = my_num
    },

    // コールナンバーの設定
    set_judge_num: function(judge_num){
      this.judge_num = judge_num
    },

    // eatとbiteの判定
    judge: function(){
      var eat = 0
      var bite = 0
      for (var index_c in this.cp_num) {
        for (var index_j in this.judge_num) {
          if (this.cp_num[index_c] === this.judge_num[index_j]) {
            if (index_c === index_j) {
              eat++;
            } else {
              bite++;
            }
          }
        }
      }
      this.eat = eat
      this.bite = bite
      var judge_num = Number(this.judge_num.join(""))
      var judge_data_obj = {
        eat: this.eat,
        bite: this.bite,
        judge_number: judge_num,
      }
      this.judge_datas.unshift(judge_data_obj)
    },
  },
}
</script>