export const state = () => ({
         digit_flag: true,     // 桁数選択画面の制御フラグ
         call_num_flag: false, // コールナンバー設定画面の制御フラグ
         history_flag: false,  // 履歴画面の制御フラグ

         digit_num: null,      // 桁数
         cp_num: [],           // CPナンバー
         call_num: []          // コールナンバー
      });

export const mutations = {
         // 桁数設定画面の有効化
        true_digit_flag: function(state) {
          state.digit_flag = true;
        },
        // 桁数設定画面の無効化
        false_digit_flag: function(state) {
          state.digit_flag = false;
        },
        // 桁数の設定
        set_digit_num: function(state, digit_num) {
          state.digit_num = digit_num;
        },

        // CPナンバーの設定
        set_cp_num: function(state, digit_num) {
          var max_index = 10;
          const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
          for (var i = 0; i < digit_num; i++) {
            var index = Math.floor(Math.random() * max_index);
            state.cp_num.push(numbers[index]);
            numbers.splice(index, 1);
            max_index--;
          }
        },

        // コールナンバー設定画面の有効化
        true_call_num_flag: function(state) {
          state.call_num_flag = true;
        },
        // コールナンバー設定画面の無効化
        false_call_num_flag: function(state) {
          state.call_num_flag = false;
        },
        // コールナンバーの設定
        set_call_num: function(state, number) {
          state.call_num = number;
        },

        // 履歴画面の有効化
        true_history_flag: function(state) {
          state.history_flag = true;
        },
        // 履歴画面の無効化
        false_history_flag: function(state) {
          state.history_flag = false;
        }
      };
