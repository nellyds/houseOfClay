import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: {
      name: "",
      phone: "",
      date: null,
      time: null,
      message: ""
    },
    goals: []
  },
  mutations: {
    addGoal(state, argument) {
      console.log(argument.goal);
      this.state.goals.push(argument.goal);
      console.log(this.state.goals);
    }
  },
  actions: {},
  modules: {}
});
