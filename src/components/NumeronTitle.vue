<template>
<v-app>
    <v-simple-table fixed-header>
        <v-row justify="center">
          <v-col cols="6">
            <v-row justify="center">
              <h1  style="borderBottom: solid 5px #29B6F6" class="elevation-24 display-4 font-italic font-weight-bold text-center light-blue--text text--lighten-1">
                {{title}}
              </h1>
            </v-row>
          </v-col>
        </v-row>
      </v-simple-table>
</v-app>
</template>

<script>
  export default {
    name: 'numeron-title',
    props: [
      'title',
    ],
    methods: {
      get_id() {
        this.axios.get("http://localhost:3000/users")
          .then((response)=> {console.log(response);})
          .catch((error)=> {console.log(error);})
      }
    }
  }
</script>