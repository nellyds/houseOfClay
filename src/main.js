import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import AOS from "aos";
import "aos/dist/aos.css";
import draggable from 'vuedraggable'
Vue.config.productionTip = false;
Vue.use(draggable);
new Vue({
  created() {
    AOS.init({ disable: "phone" });
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
