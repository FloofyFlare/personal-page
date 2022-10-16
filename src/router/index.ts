import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/logIn",
    name: "logIn",
    // route level code-splitting
    // this generates a separate chunk (logInbout.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "logIn" */ "../views/LogInView.vue"),
  },
  {
    path: "/main",
    name: "main",
    // route level code-splitting
    // this generates a separate chunk (logInbout.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "main" */ "../views/MainApp.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
