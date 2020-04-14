<template>
    <v-container>
        <v-row justify="center">          
          <v-col 
            class="" cols="6"
          ><v-row justify="center">
            <v-col cols="12">              
              <h1 style="borderBottom: solid 5px #29B6F6" class="display-4 font-italic font-weight-bold text-center light-blue--text text--lighten-1">
                 {{title}}
              </h1>
            </v-col>
          </v-row>
          </v-col>
              
        </v-row>  
      </v-container>
</template>

<script>
  export default {
    name: 'numeron-title',
    props: [
      'title',
    ],
    data() {
      return {
        
      }
    },
  }
</script>