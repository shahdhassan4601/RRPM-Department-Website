import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/SignInForm.vue';
import UnitManager from '../views/UnitManager.vue';
import ContactUs from '../views/ContactUs.vue'; 

const routes = [
 // { path: '/', component: LoginPage }, 
  { path: '/', component: UnitManager }, 
  { path: '/contact-us', component: ContactUs }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
