<template>
        <router-link :to="link_name">
            <v-btn
                class="mx-2"
                fab large 
                outlined
                :color="btn_color"
            >
                {{mode_name}}
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
