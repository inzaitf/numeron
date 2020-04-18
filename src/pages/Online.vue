<template>
  <v-app>
    <!-- ロード画面 -->
    <loading v-if="!(load_flag)"></loading>

    <!-- 自分の数字の設定画面 -->
    <btn-number
      v-if="my_btn_num_flag"
      :digit_num="digit_num"
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
      @clicked_btn='call(); '
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

      digit_num: 4,
      my_num: [],                 // 自分の設定した数字
      judge_num: [],              // コールする数字
      judge_datas: [],            // 履歴に表示するデータ

      digit_flag: true,           // 桁数選択画面の制御フラグ
      my_btn_num_flag: false,     // 自分の数字の設定画面の制御フラグ
      judge_btn_num_flag: false,  // コール画面の制御フラグ
      history_flag: false,        // 履歴画面の制御フラグ
    }),

    computed: {
      dummy_json: function(){
        return JSON.stringify(this.dumy_message)
      },

      // ロード画面の制御フラグ
      load_flag: function(){
        return this.$store.state.flag.ready
      },

      // ユーザーID
      user_id: function(){
        return this.$store.state.auth.user_id
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
                console.log("readyきました")
                self.$store.commit('flag/yes_ready')
                self.my_btn_num_flag = true
                break;
              case 'call':
                console.log("コールきました")
                self.judge(m.call_number)
                break
              case 'result':
                console.log("結果きました")
                self.recieved(m)
                break
            }
          }
        }
      });
    },

    methods: {

      // 自分の数字の設定画面の制御フラグ変更
      change_my_btn_num_flag() {
        this.my_btn_num_flag = !this.my_btn_num_flag
      },

      // コール画面の制御フラグ変更
      change_judge_btn_num_flag() {
        this.judge_btn_num_flag = true
      },
  
      // 履歴画面の制御フラグ/
      change_history_flag: function() {
        this.history_flag = true
      },

      // 自分の数字の設定
      set_my_num: function(my_num){
        this.my_num = my_num
      },

      // コールナンバーの設定
      set_judge_num: function(judge_num){
        this.judge_num = judge_num
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
          call_number: this.judge_num.join(""), 
        }
        this.send(obj)
      },

      // eatとbiteの判定
      judge: function(called_num){
        var eat = 0
        var bite = 0
        for (var index_m in this.my_num) {
          for (var index_c in called_num) {
            console.log(this.my_num[index_m], called_num[index_c])
            if (this.my_num[index_m] === called_num[index_c]) {
              if (index_m === index_c) {
                eat++
              } else {
                bite++
              }
            }
          }
        }
        console.log(eat, bite)
        var result_obj = {
          user_id: this.user_id,
          type: "result",
          eat: eat,
          bite: bite,
          call_number: called_num,
        }
        this.send(result_obj)
      },

      // 相手から結果を受け取った後の処理
      recieved: function(message){
        var judge_data_obj = {
          eat: message.eat,
          bite: message.bite,
          judge_number: message.call_number,
        }
        this.judge_datas.unshift(judge_data_obj)
        console.log(this.judge_datas)
        this.change_history_flag() 
      },

      // ランダムな文字列の生成(user_idに使う)
      get_unique_str: function(){
        var strong = 1000;
        return new Date().getTime().toString(16)  + Math.floor(strong*Math.random()).toString(16)
      }
    },
}
</script>