<template>
    <div id="app" :dir="selectedLang === 'ar' ? 'rtl' : 'ltr'">
        <main>
            <!-- Language Switcher -->
            <LangSwitcher
                :currentLang="selectedLang"
                @change-language="changeLanguage"
            />

            <!-- Vue Router will dynamically render the correct page here -->
            <router-view :selectedLang="selectedLang" />
        </main>
    </div>
</template>

<script>
import LangSwitcher from "./components/LangSwitcher.vue";

export default {
    name: "App",
    components: {
        LangSwitcher,
    },
    data() {
        return {
            selectedLang: "en", // Default language
        };
    },
    methods: {
        changeLanguage(lang) {
            this.selectedLang = lang; // Update the selected language
        },
    },
};
</script>
