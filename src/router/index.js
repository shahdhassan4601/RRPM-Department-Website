import { createRouter, createWebHistory } from 'vue-router';
import Activity from '../Views/activity.vue';
import Research from '../Views/research.vue';
import Research_admin from '../Views/research_admin.vue';
import Units from '../Views/Units.vue';

// إعداد المسارات (Routes)
const routes = [
  { path: '/activity', component: Activity },
  { path: '/research', component: Research },
  { path: '/research_admin', component: Research_admin },
  { path: '/units', component: Units },
];

// إنشاء الـ Router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
