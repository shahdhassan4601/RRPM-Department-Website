import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import en from "./i18n/en.json";
import ar from "./i18n/ar.json";
import "./assets/styles/base.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";

// Set up translations
const messages = {
  en: en,
  ar: ar
};

const i18n = createI18n({
  locale: "en", // Default language
  fallbackLocale: "en",
  messages
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");
