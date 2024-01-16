import { createRouter, createWebHashHistory } from "vue-router";
import HomeVue from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeVue
  },
  {
    path: "/san_angel",
    name: "san_angel",
    component: ( ) => import("../views/SanAngelView.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
