import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    page: '/',
    userId: '',
    list: [],
    dialogVisible: false,
    loading: false,
    btnLoading: false
  },
  mutations: {
    changePage (state, data) {
      state.page = data
    },
    saveUserId (state, data) {
      state.userId = data
    },
    list(state, data) {
      state.list = data.list;
    },
    toList(state, data) {
      state.list = data;
    },
    changeVisible(state) {
      let flag = state.dialogVisible;
      state.dialogVisible = !flag;
    },
    changeLoading(state) {
      let flag = state.loading;
      state.loading = !flag;
    },
    changeBtnLoading(state) {
      let flag = state.btnLoading;
      state.btnLoading = !flag;
    },
    cancel(state) {
      state.dialogVisible = false;
      state.btnLoading = false;
    }
  },
  actions: {}
});
