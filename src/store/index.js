import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message:{
      name:'',
      phone:'',
      date:null,
      time:null,
      message:''
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
