<template>
    <v-app>
        <v-container v-if="ok1">
             <select-digit
             v-if="digit_flag"
             :digit_number='digit_number'
             :message=何桁で遊ぶ
             >
             </select-digit>
        </v-container>
        <judge-btn-number
          :digit_number='digit_number'
          :ok2='ok2'
          :my_number_lists='my_number_lists'
          :my_number='my_number'
          :judge_number_lists='judge_number_lists'
        ></judge-btn-number>
    </v-app>
</template>

<script>
import JudgeBtnNumber from '@/components/JudgeBtnNumber.vue'
import SelectDigit from '@/components/SelectDigit.vue'
export default {
    name: "Vscom",
    components: {
      JudgeBtnNumber,
      SelectDigit,
    },
    computed: {
      digit_flag: function(){
        return this.$store.state.digit_flag
      }
    },
    methods: {
        click_auto_play_button_number(play_btn_number) {
          this.ok1 = false
          this.ok2 = true
          this.digit_number = play_btn_number
          this.judge_number_lists = new Array(this.digit_number)
          var max_index = 10;
          const numbers = [0,1,2,3,4,5,6,7,8,9];
          for(var i = 0; i < this.digit_number ; i++){
            var index = Math.floor( Math.random() * max_index );
            this.my_number_lists.push(numbers[index]);
          }
          this.my_number = this.my_number_lists.join("");
        },
    },
    data: () => ({
        ok1: true,
        ok2: false,
        digit_number: null,
        play_btn_numbers: [3,4,5],
        my_number_lists: [],
        my_number: null,
        judge_number_lists: [],
    }),
}
</script>