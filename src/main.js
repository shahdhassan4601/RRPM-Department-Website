import { createPinia } from 'pinia'
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import '@fortawesome/fontawesome-free/css/all.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";
import "./assets/style/base.css";



const app = createApp(App);
const pinia = createPinia()
app.use(pinia);
app.use(router);
app.mount("#app");
