import { createRouter, createWebHistory } from "vue-router";
import SingleActivity from "../views/SingleActivity.vue";
import SingleResearch from "../views/SingleResearch.vue";
import ActivityAdmin from "../views/ActivityAdmin.vue";
import Research from "../views/Research.vue";
import ResearchAdmin from "../views/ResearchAdmin.vue";
import Units from "../views/Units.vue";

const routes = [
    {
        path: "/activities/:id",
        name: "SingleActivity",
        component: SingleActivity,
        props: true,
    },
    {
        path: "/research/:id",
        name: "SingleResearch",
        component: SingleResearch,
        props: (route) => ({ id: route.params.id }),
    },
    { path: "/activity-admin", component: ActivityAdmin },
    { path: "/research", component: Research },
    { path: "/research-admin", component: ResearchAdmin },
    {
        path: "/research-admin/:index",
        component: ResearchAdmin,
        props: true,
    },
    { path: "/units", component: Units },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
