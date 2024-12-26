<template>
    <div>
        <main class="container py-5">
            <!-- Title and Add Button -->
            <div class="d-flex align-items-center mb-4">
                <h2 class="mb-0 me-3">Scientific Research</h2>
                <div v-if="this.researchStore.token">
                    <router-link
                        to="/research-admin"
                        class="btn btn-success btn-sm me-2"
                        >Add</router-link
                    >
                </div>
            </div>

            <!-- Search and Filter Fields -->
            <div class="d-flex align-items-center mb-4">
                <input
                    type="text"
                    class="form-control me-2"
                    placeholder="Search..."
                    v-model="searchQuery"
                />
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
                        <div
                            v-if="this.researchStore.token"
                            class="d-flex align-items-start"
                        >
                            <button
                                class="btn btn-secondary btn-sm me-2"
                                @click="editResearch(research.id)"
                            >
                                Edit
                            </button>
                            <button
                                class="btn btn-danger btn-sm me-2"
                                @click="showPopupfunc(research.id)"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Popup -->
            <div v-if="showPopup" class="popup-overlay">
                <div class="popup">
                    <h2>Are you sure?</h2>
                    <p>
                        Do you really want to delete this research? This action
                        cannot be undone.
                    </p>
                    <div class="popup-actions">
                        <button class="confirm-btn" @click="deleteResearch">
                            Yes, Delete
                        </button>
                        <button class="cancel-btn" @click="closePopup">
                            Cancel
                        </button>
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
            showPopup: false,
            researchToDeleteId: null, // ID of the research to delete
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
                return matchesQuery;
            });

            // Sort by date
            if (this.selectedDate === "newest") {
                filtered.sort(
                    (a, b) =>
                        new Date(b.publicationDate) -
                        new Date(a.publicationDate)
                );
            } else if (this.selectedDate === "oldest") {
                filtered.sort(
                    (a, b) =>
                        new Date(a.publicationDate) -
                        new Date(b.publicationDate)
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
        showPopupfunc(researchId) {
            this.showPopup = true;
            this.researchToDeleteId = researchId;
        },
        deleteResearch() {
            this.researchStore.deleteResearch(this.researchToDeleteId);
            this.closePopup();
        },
        closePopup() {
            this.showPopup = false;
            this.researchToDeleteId = null;
        },
    },
};
</script>


<style scoped>
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.popup {
    background: white;
    border-radius: 8px;
    padding: 20px;
    width: 300px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
}

.popup h2 {
    margin-top: 0;
    color: #333;
}

.popup-actions {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.confirm-btn {
    background-color: #d9534f;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
}

.cancel-btn {
    background-color: #5bc0de;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
}
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
