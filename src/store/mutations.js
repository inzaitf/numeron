export const state = {
    digit_flag: true,
};

export const mutations = {
    change_digit_flag(){
        this.state.digit_flag = !(this.state.digit_flag);
    },
}