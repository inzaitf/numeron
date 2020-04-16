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
    
    data: () => ({
    }),
    
    props: [
        'btn_color',
        'mode_name',
        'link_name',
    ],
}
</script>
