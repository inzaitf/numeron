<template>
    <v-app>
        <v-container>
            <v-row align="start" justify="center">
        <v-col cols="4">
            <v-row align="start" justify="end">
                <v-col cols="12">
                    <v-card
                        class="mx-auto overflow-y-auto"
                        id="scroll-target"
                        max-height="300px"
                    >
                        <v-toolbar color="light-blue lighten-1" dark>
                            <v-row justify="center">
                                <v-toolbar-title>履歴</v-toolbar-title>
                            </v-row>
                        </v-toolbar>
                        <v-list-item v-for="data in judge_data" :key="data.id">
                            <v-list-item-content>
                                <v-list-item-title >{{data.judge_number}}</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item-title >{{data.eat}}eat{{data.bite}}bite!</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>

            </v-row>
        </v-container>
    </v-app>
</template>

<script>
export default {
    name: "History",

    props:[
        'judge_data',
    ],
}
</script>