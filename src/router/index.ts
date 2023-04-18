import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieDetailView from "../views/MovieDetailView.vue";
import TrailerView from "../views/TrailerView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: MovieDetailView,
  },
  {
    path: "/trailer",
    name: "trailer",
    component: TrailerView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
