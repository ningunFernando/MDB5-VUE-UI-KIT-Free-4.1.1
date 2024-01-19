import { createRouter, createWebHashHistory } from "vue-router";
import HomeVue from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeVue
  },
  {
    path: "/sanAngel",
    name: "sanAngel",
    component: ( ) => import("../views/SanAngelView.vue")
  },
  {
    path: "/Vilanova",
    name:"vilanova",
    component: ( ) => import("../views/Proyectos/Vilanova.vue")
  },
  {
    path: "/ElRoble",
    name:"ElRoble",
    component: ( ) => import("../views/Proyectos/ElRoble.vue")
  },
  {
    path:"/Maralta",
    name:"Maralta",
    component: ( ) => import("../views/Proyectos/Maralta.vue")
  },
  {
    path:"/Ivarica",
    name:"Ivarica",
    component: ( ) => import("../views/Proyectos/Ivarica.vue")
  },
  {
    path:"/Carima",
    name:"Carima",
    component: ( ) => import("../views/Proyectos/Carima.vue")
  },
  {
    path:"/Portovela",
    name:"Portovela",
  component: ( ) => import("../views/Proyectos/Portovela.vue")
  },
  {
    path:"/SanRafael",
    name:"SanRafael",
    component: () => import("../views/Proyectos/SanRafael.vue")
  },
  {
    path:"/Zitadela",
    name:"Zitadela",
    component: () => import("../views/Proyectos/Zitadela.vue")
  },
  {
    path:"/Oficinas",
    name: "Oficinas",
    component: () => import("../views/Proyectos/Oficinas.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
