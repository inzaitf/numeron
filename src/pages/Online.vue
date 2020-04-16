<template>
  <v-app>
    <v-btn @click="send_call()"></v-btn>
    {{messages}}
  </v-app>
</template>

<script>
// import io from 'socket.io-client'

export default {
    name: 'Online',

    methods: {
      send_call(){
        // サーバー側にメッセージを送信する
        this.socket.send(this.dummy_json)
      },
    },

    data: () => ({
      socket: null,
      message: '',
      messages: [],

      dumy_message: 
      {
        "eat": 0,
        "bite": 1,
      },
    }),

    computed: {
      dummy_json: function(){
        return JSON.stringify(this.dumy_message)
      }
    },

    mounted() {
      // // Socketインスタンスを生成
      this.socket = new WebSocket('ws://localhost:80/ws')

      this.socket.onopen = function(event){
        console.log(event)
      }

      // サーバー側で保持しているメッセージを受信する
      this.socket.onmessage = function(message) {
          console.log(message.data)
      };
    },
}
</script>