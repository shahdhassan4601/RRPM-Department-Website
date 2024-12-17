import { createRouter, createWebHistory } from "vue-router";
import SingleActivity from "../views/SingleActivity.vue";
import SingleResearch from "../views/SingleResearch.vue";

const routes = [
  { path: "/activities/:id", name: "SingleActivity", component: SingleActivity, props: true },
  { path: "/research/:id", name: "SingleResearch", component: SingleResearch, props: (route) => ({ id: route.params.id })},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
