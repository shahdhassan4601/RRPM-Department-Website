import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // استيراد الـ router من الملف الجديد
import './assets/style/base.css';

const app = createApp(App);
app.use(router); // إضافة Vue Router للتطبيق

app.mount('#app');
