<template>
    <div class="container my-4 w-75">
        <!-- Title Row -->
        <div class="row mb-3 justify-content-between align-items-center">
            <div class="col-12">
                <h1 class="research-title">
                    {{ getTranslatedData(research.title) }}
                </h1>
            </div>
        </div>

        <!-- Author and Publish Date -->
        <div class="row mb-3">
            <div class="col-md-6">
                <span class="author-name m-2"
                        v-for="(author, index) in 
                            research.authors"
                        :key="index"
                    >
                        {{ "Author(s): " + author.name }}
                    </span>
            </div>
            <div class="col-md-6 text-md-end">
                <span class="publish-date">{{ "Published: " +
                    getTranslatedData(research.publicationDate)
                }}</span>
            </div>
        </div>

        <!-- Research Image -->
        <!-- <div class="row mb-3">
            <div class="col-9 col-sm-6 mx-auto">
                <img
                    v-if="research.image"
                    :src="research.image"
                    class="research-image"
                    alt="Research Image"
                />
            </div>
        </div> -->

        <!-- Research Content -->
        <div class="row">
            <div class="col-12">
                <p class="research-content">
                    {{ getTranslatedData(research.content) }}
                </p>
            </div>
        </div>

        <!-- Keywords Section -->
        <div class="row mb-5">
            <div class="col-12">
                <div class="keywords-section">
                    <span
                        v-for="(tag, index) in 
                            research.keywords"
                        :key="index"
                        class="keyword-badge"
                    >
                        {{ "# " + tag.keyword }}
                    </span>
                </div>
            </div>
        </div>

        <!-- Related Research Section -->
        <div class="row mb-3">
            <div class="col-12">
                <!-- <h5>{{ getTranslatedData(relatedResearchTitle) + ":" }}</h5> -->
            </div>
        </div>
        <div class="row">
            <div
                v-for="(related, index) in relatedResearch"
                :key="index"
                class="col-12 col-md-4 mb-3"
            >
                <div
                    class="related-research-card"
                    @click="navigateToResearch(related)"
                >
                    <h6>{{ getTranslatedData(related.title) }}</h6>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useDataStore } from '../stores/dataStore';
export default {
    name: "SingleResearch",
    props: {
        selectedLang: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            research: {},
            relatedResearchTitle: "Related Research",
            relatedResearch: [],

        };
    },
    setup() {
        const researchStore = useDataStore();
        return { researchStore };
    },
    created() {
        const researchId = parseInt(this.$route.params.id); // Get the research ID from the route params
        // Find the research in the scientificResearch array by ID
        const research = this.researchStore.getResearchById(researchId);
        if (research) {
            this.research = research; // Set the research data
        } else {
            console.error("Research not found");
        }
    },
    methods: {
        getTranslatedData(field) {
            // Retrieve translated data based on the selected language
            if (typeof field === "object") {
                return field[this.selectedLang];
            }
            return field;
        },
        navigateToResearch(related) {
            // Navigate to the SingleResearch page for the selected research
            this.$router.push({
                name: "SingleResearch",
                params: { id: related.id },
            });
        },
    },
};
</script>

<style scoped>
/* Title Styles */
.research-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #023047;
}

/* Author and Publish Date */
.author-name,
.publish-date {
    font-size: 1rem;
    color: #023047;
    font-weight: 500;
}

.publish-date {
    text-align: right;
}

/* Image Styles */
.research-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

/* Content Styles */
.research-content {
    font-size: 1.1rem;
    color: #333;
    line-height: 1.6;
    margin-top: 20px;
    text-align: justify;
}

/* Keywords Styles */
.keywords-section {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 20px;
}

.keyword-badge {
    background-color: #c2ecff;
    color: #023047;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: capitalize;
    padding: 5px 10px;
}
.related-research-card {
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer; /* Make the cards look clickable */
    transition: transform 0.2s ease, background-color 0.2s ease;
}

.related-research-card:hover {
    transform: scale(1.05); /* Slightly enlarge on hover */
    background-color: #e0e0e0;
}

.related-research-card h6 {
    font-size: 1rem;
    font-weight: 500;
    color: #023047;
}

/* Mobile View Adjustments */
@media (max-width: 576px) {
    .research-title {
        font-size: 1.8rem; /* Adjust for smaller screen */
    }

    .author-name,
    .publish-date {
        font-size: 0.9rem;
    }

    .research-image {
        object-fit: cover;
    }

    .research-content {
        font-size: 1rem;
    }

    .keywords-section {
        justify-content: flex-start;
    }

    .related-research-card {
        margin-bottom: 1rem;
    }
}
</style>
