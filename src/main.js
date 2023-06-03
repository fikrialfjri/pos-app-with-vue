import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdStorefrontOutlined } from "oh-vue-icons/icons";
import * as HiIcons from "oh-vue-icons/icons/hi";

const Hi = Object.values({ ...HiIcons });
addIcons(...Hi, MdStorefrontOutlined);

import "@/assets/css/_reset.css";
import "@/assets/css/style.css";

const app = createApp(App);
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
