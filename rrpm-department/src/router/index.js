import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AboutUs from '../views/AboutUs.vue';
import GeneralActivities from '../views/Activities.vue';



const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/aboutus', name: 'aboutus', component: AboutUs },
  { path: '/activities', name: 'genact', component: GeneralActivities },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;