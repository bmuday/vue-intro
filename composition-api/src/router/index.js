import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import Partie1View from "@/views/Partie1.vue";
import Partie2View from "@/views/Partie2.vue";
import Details from "@/views/Details.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/1",
    name: "partie1",
    component: Partie1View,
  },
  {
    path: "/2",
    name: "partie2",
    component: Partie2View,
  },
  {
    path: "/posts/:id",
    name: "Details",
    component: Details,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
