export const state = () => ({
  user_id: null,
  is_login: false, //ログインの制御フラグ
  store_token: null
});

export const mutations = {
  set_user_id(state, payload) {
    state.user_id = payload;
  },
  delete_user_id(state) {
    state.user_id = null;
  },

  //トークンをローカルストレージに保存
  save_token(state) {
    localStorage.setItem("access_token", state.store_token);
  },

  //local storageからstoreに代入
  load(state) {
    if(state.store_token == null)
      state.store_token = localStorage.getItem("access_token")
  },

  //local storage,storeからトークンを削除
  logout(state) {
    
    localStorage.removeItem("access_token", state.store_token)
    state.store_token = null
  }

};

export const getters = {
  get_user_id(state) {
    return state.user_id;
  }
};

export const actions = {
  do_save({ commit }) {
    commit("save_token");
  },
  do_load({ commit }) {
    
    commit("load");
  },
  do_logout({ commit }) {
    
    commit("logout")
  }
};
