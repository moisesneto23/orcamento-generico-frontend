import Vue from "vue";
import beforeEnter from "./beforeEnter";
import beforeEach from './beaforeEach';
import VueRouter, { RouteConfig } from "vue-router";
import CadastroUsuario from "../views/visitante/CadastroUsuario.vue";
import Sobre from "../views/visitante/Sobre.vue";
import Login from "@/views/visitante/Login.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  //ptodas que nãao for visitante tem que ter um componente especifico de navegação
  {
    path: "/Home",
    name: "Visitante",
    component: () => import("@/views/Visitante.vue"),
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/cadastro-usuario",
        name: "CadastroUsuario",
        component: CadastroUsuario,
      },
      {
        path: "/sobre",
        name: "Sobre",
        component: Sobre,
      },
    ],
  },

  {
    path: "/",
    name: "Home",
    component: () => import("../views/Inicio.vue"),
    children: 
    [
      {
        path: "/cadastroOrcamento",
        name: "CadastroOrcamento",
        component: () => import("../views/CadastroOrcamentos.vue"),
      },
    ],
    beforeEnter,
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});
//router.beforeEach(beforeEach);
export default router;
