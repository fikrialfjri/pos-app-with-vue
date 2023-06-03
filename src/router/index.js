import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/private/Home.vue";
import Dashboard from "@/views/private/Dashboard.vue";
import Setting from "@/views/private/Setting.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/setting",
    name: "Setting",
    component: Setting,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
