import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AboutUs from '../views/AboutUs.vue';
import GeneralActivities from '../views/Activities.vue';
import SingleActivity from '../views/SingleActivity.vue';
import Research from '../views/Research.vue';
import SingleResearch from '../views/SingleResearch.vue';




const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/aboutus', name: 'aboutus', component: AboutUs },
  { path: '/activities', name: 'genact', component: GeneralActivities },
  { path: '/singleactivity', name: 'SingleActivity', component: SingleActivity },
  { path: '/researches', name: 'Research', component: Research }, // List of all research
  { path: '/researches/:id', name: 'SingleResearch', component: SingleResearch }, // Single research detail

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;