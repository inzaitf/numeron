<template>
    <v-app>
        <v-container>
            <v-row v-if="ok01" justify="center">
              <v-row>
                <v-col 
                  class="title font-weight-bold text-center light-blue--text text--lighten-1"
                  cols="12"
                  >
                  何桁で遊ぶ?
                </v-col>
              </v-row>
            </v-row>
            <v-row v-if="ok01" justify="center">
                <v-col 
                  v-for="play_btn_number in play_btn_numbers" :key="play_btn_number.id"
                  cols="2"              
                >
                  <v-row justify="center">
                    <v-btn
                      id="number_btn"
                      v-on:click="click_auto_play_button_number(play_btn_number)"
                      class="mx-2"
                      fab large 
                      outlined
                      color="light-blue lighten-1"
                    >
                    
                            {{play_btn_number}}
                        </v-btn>  
                    </v-row>
                </v-col>
            </v-row>  
        </v-container>
    </v-app>
</template>

<script>
export default {
    name: 'Online'
}
</script>