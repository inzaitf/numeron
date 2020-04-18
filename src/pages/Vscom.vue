<template>
  <v-app>
    <!-- 桁数設定画面 -->
    <v-container v-if="digit_flag">
      <!-- 桁数を選択 -->
      <select-digit
        v-if="digit_flag"
        mutation='vscom/set_digit_num'
        message="何桁で遊ぶ?"
        @click_btn="set_cp_num(); false_digit_flag(); true_call_num_flag()"
      >
      </select-digit>
    </v-container>

    <v-container>
    <!-- コール画面 -->
    <btn-number
      v-if="call_num_flag"
      :key="reset_key"
      :digit_num='digit_num'
      mutation='vscom/set_call_num'
      @clicked_btn='true_history_flag(); reset_btn_number(); judge()'
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
    play_btn_numbers: [3,4,5],  // 桁数の候補
    judge_datas: [],            // 履歴に表示するデータ
    reset_key: 0,               // コール画面用のリセットキー
  }),

  props: {
  },

  computed: {
    // 桁数設定画面の制御フラグ
    digit_flag: function(){
      return this.$store.state.vscom.digit_flag
    },
    // 桁数
    digit_num: function(){
      return this.$store.state.vscom.digit_num
    },

    // CPナンバー
    cp_num: function(){
      return this.$store.state.vscom.cp_num
    },

    // コールナンバー設定画面制御フラグ
    call_num_flag: function(){
      return this.$store.state.vscom.call_num_flag
    },
    // コールナンバー
    call_num: function(){
      return this.$store.state.vscom.call_num
    },

    // 履歴画面の制御フラグ
    history_flag: function(){
      return this.$store.state.vscom.history_flag
    },
  },

  methods: {
    // 桁数選択画面の制御フラグ無効化
    false_digit_flag() {
      this.$store.commit('vscom/false_digit_flag')
    },
    // コール画面の制御フラグの有効化
    true_call_num_flag() {
      this.$store.commit('vscom/true_call_num_flag')
    },
    // 履歴画面の制御フラグの有効化
    true_history_flag: function() {
      this.$store.commit('vscom/true_history_flag')
    },

    // 与えた桁数分ランダムな数字を生成
    set_cp_num: function() {
      this.$store.commit('vscom/set_cp_num', this.digit_num)
    },

    // eatとbiteの判定
    judge: function(){
      var eat = 0
      var bite = 0
      console.log("cπナムだよ"+this.cp_num)
      console.log("callナムだよ"+this.call_num)

      for (var index_c in this.cp_num) {
        for (var index_j in this.call_num) {
          if (this.cp_num[index_c] == this.call_num[index_j]) {
            if (index_c == index_j) {
              eat++;
            } else {
              bite++;
            }
          }
        }
      }
      this.eat = eat
      this.bite = bite
      var call_num = this.call_num.join("")
      var judge_data_obj = {
        eat: this.eat,
        bite: this.bite,
        call_number: call_num,
      }
      this.judge_datas.unshift(judge_data_obj)
    },

    // コール画面の再レンダリング
    reset_btn_number() {
      this.reset_key++
    }
  },
}
</script>