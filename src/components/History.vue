<template>
  <v-app style="width:300px;">
    <v-container class="width:500px;">
      <v-row align="end" justify="start">
        <v-col cols="12">
          <v-card
            class="mx-auto overflow-y-auto"
            id="scroll-target"
            max-height="300px"
          >
            <v-toolbar color="light-blue lighten-1" dark>
              <v-toolbar-title>履歴</v-toolbar-title>
            </v-toolbar>
            <v-list-item v-for="data in judge_data" :key="data.id">
              <v-list-item-content>
                <v-list-item-title>{{ data.call_number }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title
                  >{{ data.eat }}eat{{ data.bite }}bite!</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "History",

  props: ["judge_data"]
};
</script>
