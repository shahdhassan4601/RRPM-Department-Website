<template>
    <div id="app" :dir="selectedLang === 'ar' ? 'rtl' : 'ltr'">
        <nav>
            <router-link to="/activity-admin">Activity</router-link>
            <router-link to="/research">Research</router-link>
            <router-link to="/units">Units</router-link>
        </nav>
        <main>
            <!-- Language Switcher -->
            <LangSwitcher
                :currentLang="selectedLang"
                @change-language="changeLanguage"
            />

            <!-- Vue Router will dynamically render the correct page here -->
            <router-view :selectedLang="selectedLang" />
        </main>
        <Footer />
    </div>
</template>

<script>
import LangSwitcher from "./components/LangSwitcher.vue";
import Footer from './components/Footer.vue';  

export default {
    name: "App",
    components: {
        LangSwitcher,
        Footer
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
