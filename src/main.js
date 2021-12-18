import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSplide from "@splidejs/vue-splide";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "@splidejs/splide/dist/css/splide.min.css";

createApp(App).use(store).use(router).use(VueSplide).mount("#app");
