<template>
  <v-app>
    <!-- ロード画面 -->
    <loading v-if="!(load_flag)"></loading>

    <!-- 自分の数字の設定画面 -->
    <btn-number
      v-if="my_num_flag"
      :digit_num="digit_num"
      mutation="online/set_my_num"
      @clicked_btn='false_my_num_flag(); true_call_num_flag()'
      call_btn_name='設定'
    >
    </btn-number>

    <!-- コール画面 -->
    <btn-number
      v-if="call_num_flag"
      :digit_num='digit_num'
      :key="reset_key"
      mutation="online/set_call_num"
      @clicked_btn='call(); reset_btn_number()'
      call_btn_name='コール'
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
import Loading from '@/components/Loading.vue'
import BtnNumber from '@/components/BtnNumber.vue'
import History from '@/components/History.vue'

export default {
    name: 'Online',

    components: {
      Loading,
      BtnNumber,
      History,
    },


    data: () => ({
      socket: null,               // websocketとの接続状態
      message: null,              // websocket内のメッセージ

      digit_num: 4,               // 桁数
      judge_datas: [],            // 履歴に表示するデータ
      reset_key: 0,               // コール画面用のリセットキー
    }),

    computed: {

      // ロード画面の制御フラグ
      load_flag: function(){
        return this.$store.state.online.ready
      },

      // ユーザーID
      user_id: function(){
        return this.$store.state.auth.user_id
      },


      // マイナンバー設定画面の制御フラグ
      my_num_flag: function(){
        return this.$store.state.online.my_num_flag
      },
      // マイナンバー
      my_num: function(){
        return this.$store.state.online.my_num
      },

      // コールナンバー設定画面制御フラグ
      call_num_flag: function(){
        return this.$store.state.online.call_num_flag
      },
      // コールナンバー
      call_num: function(){
        return this.$store.state.online.call_num
      },

      // 履歴画面の制御フラグ
      history_flag: function(){
        return this.$store.state.online.history_flag
      },
    },

    mounted: function() {
      
      // このコンポーネントにはselfでアクセス
      const self = this

      // ユーザーIDの生成
      var id = self.get_unique_str()
      self.$store.commit('auth/set_user_id', id)

      // // Socketインスタンスを生成
      self.socket = new WebSocket('ws://localhost:80/ws')

      // self.socket.onopen = function(event){
      // }

      // サーバー側で保持しているメッセージを受信する
      this.$nextTick(function() {
        self.socket.onmessage = function(message) {
          var m = JSON.parse(message.data)
          if (m.user_id != self.user_id) {
            switch (m.type) {
              case 'ready':
                self.$store.commit('online/yes_ready')
                self.$store.commit('online/true_my_num_flag')
                break;
              case 'call':
                self.judge(m.call_number)
                break
              case 'result':
                self.recieved(m)
                break
            }
          }
        }
      });
    },

    methods: {

    // マイナンバー設定画面の制御フラグ有効化
    true_my_num_flag() {
      this.$store.commit('online/true_my_num_flag')
    },
    // 自分の数字の設定画面の制御フラグ無効化
    false_my_num_flag() {
      this.$store.commit('online/false_my_num_flag')
    },
    // コール画面の制御フラグの有効化
    true_call_num_flag() {
      this.$store.commit('online/true_call_num_flag')
    },
    // 履歴画面の制御フラグの有効化
    true_history_flag: function() {
      this.$store.commit('online/true_history_flag')
    },

    // サーバー側にメッセージを送信する(引数にはオブジェクト)
    send(call_number_obj){
      var call_number_json = JSON.stringify(call_number_obj)
      this.socket.send(call_number_json)
    },
    // 相手にコールナンバーを送信
    call: function(){
      var obj = {
        user_id: this.user_id,
        type: "call",
        call_number: this.call_num, 
      }
      this.send(obj)
    },
    // eatとbiteの判定
    judge: function(called_num){
      var eat = 0
      var bite = 0
      for (var index_m in this.my_num) {
        for (var index_c in called_num) {
          if (this.my_num[index_m] === called_num[index_c]) {
            if (index_m === index_c) {
              eat++
            } else {
              bite++
            }
          }
        }
      }
      var result_obj = {
        user_id: this.user_id,
        type: "result",
        result_eat: eat,
        result_bite: bite,
        call_number: called_num,
      }
      this.send(result_obj)
    },

      // 相手から結果を受け取った後の処理
      recieved: function(message){
        console.log("メッセ")
        var judge_data_obj = {
          eat: message.result_eat,
          bite: message.result_bite,
          call_number: message.call_number.join(""),
        }
        this.judge_datas.unshift(judge_data_obj)
        this.true_history_flag() 
      },

      // ランダムな文字列の生成(user_idに使う)
      get_unique_str: function(){
        var strong = 1000;
        return new Date().getTime().toString(16)  + Math.floor(strong*Math.random()).toString(16)
      },

      // コール画面の再レンダリング
      reset_btn_number() {
        this.reset_key++
      },
    },
}
</script>