import { createApp } from "vue";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as HiIcons from "oh-vue-icons/icons/hi";

const Hi = Object.values({ ...HiIcons });
addIcons(...Hi);

import "@/assets/css/_reset.css";
import "@/assets/css/style.css";

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
