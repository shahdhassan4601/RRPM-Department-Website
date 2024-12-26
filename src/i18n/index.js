import { createI18n } from "vue-i18n";

const messages = {
    en: require("./en.json"),
    ar: require("./ar.json"),
};

const i18n = createI18n({
    locale: "en", // Default language
    fallbackLocale: "en",
    messages,
});

export default i18n;
