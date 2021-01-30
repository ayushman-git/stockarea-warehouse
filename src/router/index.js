import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Warehouse from "@/views/Warehouse.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/warehouse/:id",
    name: "Warehouse",
    component: Warehouse,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
