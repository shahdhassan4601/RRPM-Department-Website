import { createRouter, createWebHistory } from 'vue-router';
import SignInForm from '../views/SignInForm.vue';
import UnitManager from '../views/UnitManager.vue';
import ContactUs from '../views/ContactUs.vue'; 

const routes = [
  { path: '/', component: SignInForm }, // الصفحة الرئيسية
  { path: '/unit-manager', component: UnitManager }, 
  { path: '/contact-us', component: ContactUs } // تغيير المسار إلى الحروف الصغيرة
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
