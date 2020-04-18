export const state = () =>  ({
    ready: false,  // ロード画面の制御フラグ
});

export const mutations = {

    // 対戦相手がきた時
    yes_ready(state){
        state.ready = true
    },

    // 対戦が終わった時
    no_ready(state){
        state.ready = false
    }
};

export const getters = {
    get_ready(state){
        return state.ready
    }
};