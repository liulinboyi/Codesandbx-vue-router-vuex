import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: localStorage.getItem("count") !== null ? atob(localStorage.getItem("count")) : 0
  },
  mutations: {
    increment: (state) => {
      state.count++
      console.log(state.count)
      let temp = btoa(state.count)
      console.log("存上了",temp)
      localStorage.setItem("count",temp)
      console.log("存上了",temp)
    },
    decrement: (state) => {
       state.count--
       console.log(state.count)
      let temp = btoa(state.count)
      console.log("存上了",temp)
      localStorage.setItem("count",temp)
      console.log("存上了",temp)
    }
  },
  actions: {}
});
