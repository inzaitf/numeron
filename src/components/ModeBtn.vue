<template>
        <router-link :to="link_name">
            <v-btn
                class="mx-2 my-12 elevation-24"
                fab
                outlined
                :color="btn_color"
                height="350px"
                width="350px"
            >
                <p class="display-4"> {{mode_name}} </p>
            </v-btn>
        </router-link>
</template>

<script>
export default {
    name: 'ModeBtn',

    props: [
        'btn_color',  // ボタンの色
        'mode_name',  // モードの名前
        'link_name',  // リンク先URL
    ],
}
</script>
