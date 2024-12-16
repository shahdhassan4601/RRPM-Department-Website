<template>
    <div class="lang-switcher d-flex align-items-center justify-content-end">
        <button
            v-for="(lang, index) in languages"
            :key="index"
            @click="switchLanguage(lang)"
            :class="['lang-btn', { active: lang === currentLang }]"
        >
            {{ lang.toUpperCase() }}
        </button>
    </div>
</template>

<script>
export default {
    name: "LangSwitcher",
    props: {
        currentLang: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            languages: ["en", "ar"], // Available languages
        };
    },
    methods: {
        switchLanguage(lang) {
            this.$emit("change-language", lang); // Emit event to parent
        },
    },
};
</script>

<style scoped>
.lang-switcher {
    gap: 10px;
    position: absolute;
    top: 10px;
    right: 20px;
}

.lang-btn {
    background-color: #c2ecff;
    border: none;
    color: #023047;
    font-size: 1rem;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.lang-btn.active {
    background-color: #023047;
    color: white;
    font-weight: bold;
}

.lang-btn:hover {
    background-color: #219ebc;
    color: white;
}
</style>
