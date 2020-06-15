import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import draggable from "vuedraggable";
import VuePaginate from "vue-paginate";
import VuePageTransition from "vue-page-transition";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(draggable);
Vue.use(VuePageTransition);
Vue.use(VuePaginate);

new Vue({
  created() {
    AOS.init({});
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
