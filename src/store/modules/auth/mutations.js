export const state = () =>  ({
    user_id: null,
});

export const mutations = {
  set_user_id(state, payload) {
    state.user_id = payload;
  },
  delete_user_id(state) {
    state.user_id = null;
  },
};

export const getters = {
  get_user_id(state) {
    return state.user_id;
  },
};

