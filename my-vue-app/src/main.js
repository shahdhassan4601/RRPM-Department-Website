import { createApp } from 'vue';

import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/style.css';
import router from './router';  // استيراد Vue Router


createApp(App).use(router).mount('#app');
