<template>
    <div id="app" :dir="selectedLang === 'ar' ? 'rtl' : 'ltr'">
        <!-- Header -->
    <Header />
            <main>
            <!-- Language Switcher -->
            <LangSwitcher
                :currentLang="selectedLang"
                @change-language="changeLanguage"
            />

            <!-- Vue Router will dynamically render the correct page here -->
            <router-view :selectedLang="selectedLang" />
        </main>
    <!-- Footer -->
    <Footer />
    </div>
</template>

<script>
import LangSwitcher from "./components/LangSwitcher.vue";
import Header from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
    name: "App",
    components: {
        LangSwitcher,
    Header,
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

