<template>
    <div>
        <main class="container py-5">
            <!-- Title and Add Button -->
            <div class="d-flex align-items-center mb-4">
                <h2 class="mb-0 me-3">Scientific Research</h2>
                <router-link
                    to="/research-admin"
                    class="btn btn-success btn-sm me-2"
                    >Add</router-link
                >
            </div>

            <!-- Search and Filter Fields -->
            <div class="d-flex align-items-center mb-4">
                <input
                    type="text"
                    class="form-control me-2"
                    placeholder="Search..."
                    v-model="searchQuery"
                />
                <!-- <select
                    class="form-select form-select-sm me-2"
                    v-model="selectedAuthor"
                >
                    <option value="">Author</option>
                    <option
                        v-for="author in uniqueAuthors"
                        :key="author.id"
                        :value="author.id"
                    >
                        {{ author.name }}
                    </option>
                </select> -->
                <select
                    class="form-select form-select-sm me-2"
                    v-model="selectedDate"
                >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </div>

            <!-- Display Filtered Research Articles -->
            <div class="row g-4">
                <div
                    class="col-12"
                    v-for="research in filteredResearches"
                    :key="research.id"
                >
                    <div class="activity-card d-flex justify-content-between">
                        <div>
                            <h5>{{ research.title }}</h5>
                            <p class="mb-1">
                                <i class="bi bi-person"></i>
                                Authors:
                                <span
                                    v-for="(author, index) in research.authors"
                                    :key="author.id"
                                >
                                    {{ author.name }}
                                    <span
                                        v-if="
                                            index < research.authors.length - 1
                                        "
                                        >,
                                    </span>
                                </span>
                                |
                                <i class="bi bi-calendar"></i>
                                Published: {{ research.publicationDate }}
                            </p>
                            <p class="mb-1">
                                <i class="bi bi-building"></i>
                                Organization: {{ research.organization }}
                            </p>
                            <p>{{ research.content }}</p>
                            <!-- Learn More Button -->
                            <router-link
                                :to="{
                                    name: 'SingleResearch',
                                    params: { id: research.id },
                                }"
                                class="text-decoration-none"
                            >
                                Learn more
                            </router-link>
                        </div>
                        <div class="d-flex align-items-start">
                            <button
                                class="btn btn-secondary btn-sm me-2"
                                @click="editResearch(research.id)"
                            >
                                Edit
                            </button>
                            <button
                                class="btn btn-danger btn-sm me-2"
                                @click="confirmDelete(research.id)"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import { useDataStore } from "../stores/dataStore";

export default {
    name: "ScientificResearch",
    data() {
        return {
            searchQuery: "",
            selectedAuthor: "",
            selectedDate: "newest",
        };
    },
    setup() {
        const researchStore = useDataStore();
        return { researchStore };
    },
    computed: {
        uniqueAuthors() {
            const authorsDict = {};
            this.researchStore.research.forEach((research) => {
                research.authors.forEach((author) => {
                    if (!authorsDict[author.id]) {
                        authorsDict[author.id] = author.name;
                    }
                });
            });

            // Convert the dictionary to an array of objects and sort by name
            return Object.entries(authorsDict).map(([id, name]) => ({
                id,
                name,
            }));
        },

        filteredResearches() {
            let filtered = this.researchStore.research.filter((research) => {
                const matchesQuery = research.title
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase());
                const matchesAuthor = this.selectedAuthor
                    ? research.authors.some(
                          (author) => author.id === this.selectedAuthor
                      )
                    : true;
                return matchesQuery && matchesAuthor;
            });

            // Sort by date
            if (this.selectedDate === "newest") {
                filtered.sort(
                    (a, b) =>
                        new Date(b.publishing_date) -
                        new Date(a.publishing_date)
                );
            } else if (this.selectedDate === "oldest") {
                filtered.sort(
                    (a, b) =>
                        new Date(a.publishing_date) -
                        new Date(b.publishing_date)
                );
            }

            return filtered;
        },
    },
    methods: {
        editResearch(researchId) {
            this.$router.push({
                path: `/research-admin`,
                query: { id: researchId },
            });
        },
        confirmDelete(SR_id) {
            if (confirm("Are you sure you want to delete this research?")) {
                this.researchStore.deleteResearch(SR_id);
            }
        },
    },
};
</script>

<style scoped>
.activity-card {
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 0px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-success {
    background-color: #20c997 !important;
    border-color: #20c997 !important;
}

.btn-danger {
    background-color: #dc3545 !important;
    border-color: #dc3545 !important;
}

.btn-secondary {
    background-color: #4f678d !important;
    border-color: #4f678d !important;
}
</style>
