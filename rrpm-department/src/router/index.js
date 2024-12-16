import { createRouter, createWebHistory } from "vue-router";
import SingleActivity from "../views/SingleActivity.vue";

const routes = [
  { path: "/activities/:id", name: "SingleActivity", component: SingleActivity, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
