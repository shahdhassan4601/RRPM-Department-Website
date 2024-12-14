import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import AboutUs from '../views/AboutUs.vue';
import Genact from '../views/Genact.vue';


Vue.use(Router);

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/aboutus', name: 'aboutus', component: AboutUs },
  { path: '/genact', name: 'genact', component: Genact },
];

export default new Router({
  routes,
});
