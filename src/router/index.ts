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
  },
  {
    path: "/vilanova",
    name:"vilanova",
    component: ( ) => import("../views/Proyectos/Vilanova.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
