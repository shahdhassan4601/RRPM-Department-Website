import { createRouter, createWebHistory } from "vue-router";
import SingleActivity from "../views/SingleActivity.vue";
import SingleResearch from "../views/SingleResearch.vue";
import ActivityAdmin from "../views/ActivityAdmin.vue";
import Research from "../views/Research.vue";
import ResearchAdmin from "../views/ResearchAdmin.vue";
import Units from "../views/Units.vue";
import LoginPage from '../views/SignInForm.vue';
import UnitManager from '../views/UnitManager.vue';
import ContactUs from '../views/ContactUs.vue'; 
import Home from '../views/Home.vue';
import AboutUs from '../views/AboutUs.vue';
import GeneralActivities from '../views/Activities.vue';
                          

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
    { path: '/login', component: LoginPage }, 
    { path: '/unitmanager', component: UnitManager }, 
    { path: '/contact-us', component: ContactUs },
    { path: '/', name: 'home', component: Home },
    { path: '/aboutus', name: 'aboutus', component: AboutUs },
    { path: '/activities', name: 'genact', component: GeneralActivities },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
