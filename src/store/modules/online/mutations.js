export const state = () => ({
    ready: false,          // ロード画面の制御フラグ

    // digit_flag: true,      // 桁数選択画面の制御フラグ
    my_num_flag: false,    // マイナンバー設定画面の制御フラグ
    call_num_flag: false,  // コールナンバー設定画面の制御フラグ
    history_flag: false,   // 履歴画面の制御フラグ

    digit_num: null,       // 桁数
    my_num: [],            // マイナンバー
    call_num: []           // コールナンバー
});

export const mutations = {

    // 対戦相手がきた時
    yes_ready(state){
        state.ready = true
    },
    // 対戦が終わった時
    no_ready(state){
        state.ready = false
    },


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

    // マイナンバー設定画面の有効化
    true_my_num_flag: function(state) {
      state.my_num_flag = true;
    },
    // マイナンバー設定画面の無効化
    false_my_num_flag: function(state) {
      state.my_num_flag = false;
    },
    // マイナンバーの設定
    set_my_num: function(state, number) {
      state.my_num = number;
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
    },
};

export const getters = {
    get_ready(state){
        return state.ready
    }
};