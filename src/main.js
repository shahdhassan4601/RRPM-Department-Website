import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Activity from './Views/activity.vue';
import Research from './Views/research.vue';
import Research_admin from './Views/research_admin.vue';
import Units from './Views/Units.vue';

import './assets/style.css';


// إعداد المسارات (Routes)
const routes = [
  { path: '/activity', component: Activity },
  { path: '/research', component: Research },
  { path: '/research_admin', component: Research_admin },
  { path: '/units', component: Units },
];

// إنشاء الRouter
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router); // إضافة Vue Router للتطبيق


app.mount('#app');
