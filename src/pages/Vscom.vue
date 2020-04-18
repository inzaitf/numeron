<template>
  <v-app>
    <!-- 桁数設定画面 -->
    <v-container v-if="digit_flag">
      <!-- 桁数を選択 -->
      <select-digit
      v-if="digit_flag"
      message="何桁で遊ぶ?"
      @set_digit_num="set_digit_num"
      @click_btn="auto_set_cp_num(); change_digit_flag(); change_judge_btn_num_flag()"
      >
      </select-digit>
    </v-container>

    <v-container>
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

    </v-container>

  </v-app>
</template>

<script>
import BtnNumber from '@/components/BtnNumber.vue'
import SelectDigit from '@/components/SelectDigit.vue'
import History from '@/components/History'

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
    cp_num: [],                 // CPの設定数字
    judge_num: [],              // コールする数字
    judge_datas: [],            // 履歴に表示するデータ

    digit_flag: true,           // 桁数選択画面の制御フラグ
    judge_btn_num_flag: false,  // コール画面の制御フラグ
    history_flag: false,        // 履歴画面の制御フラグ
  }),

  props: {
  },

  computed: {
  },

  methods: {
    // 桁数選択画面の制御フラグ変更
    change_digit_flag: function() {
      this.digit_flag = !this.digit_flag
    },

    // コール画面の制御フラグ変更
    change_judge_btn_num_flag: function() {
      this.judge_btn_num_flag = !this.judge_btn_num_flag
    },

    // 履歴画面の制御フラグ変更
    change_history_flag: function() {
      this.history_flag = true
    },

    // コールナンバーの設定
    set_judge_num: function(judge_num){
      this.judge_num = judge_num
      console.log(this.judge_num)
    },

    // 桁数の取得
    set_digit_num: function(digit_num){
      this.digit_num = digit_num
      console.log("yo")
    },

    // 与えた桁数分ランダムな数字を生成
    auto_set_cp_num: function() {
      this.cp_num = new Array(this.digit_num)
      var max_index = 10;
      const numbers = [0,1,2,3,4,5,6,7,8,9];
      for(var i = 0; i < this.digit_num ; i++){
        var index = Math.floor( Math.random() * max_index );
        this.cp_num.push(numbers[index]);
        numbers.splice(index, 1)
        max_index--
      }
    },

    // eatとbiteの判定
    judge: function(){
      console.log(this.judge_num)
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
      var judge_num = this.judge_num.join("")
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