<template>
  <v-app>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-row align="center" justify="center"> 
          <v-progress-circular
            :size="200"
            :width="10"
            color="light-blue lighten-1"
            indeterminate
          ></v-progress-circular>
        </v-row>
        <v-row align="center" justify="center" class="my-sm-12 my-10">
          <p  class="font-weight-light display-3 my-sm-12 my-10" style="color: #29B6F6;"> 相手を待っています... </p>
        </v-row>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
    name: 'Loading',
}
</script>