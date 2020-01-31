import Vue from "vue";
import Vuex from "./../Kvuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    increment(state) {
      console.log("------------------------------------");
      console.log(state);
      console.log("------------------------------------");
      return "我是" + state.count;
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    }
  },
  modules: {}
});
