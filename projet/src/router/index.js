import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import NewView from "../views/NewView.vue";
import ReceiverView from "../views/ReceiverView.vue";
import SlotView from "../views/SlotView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/new-component",
    name: "new",
    component: NewView,
  },
  {
    path: "/receiver",
    name: "receiver",
    component: ReceiverView,
  },
  {
    path: "/slot",
    name: "slot",
    component: SlotView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
