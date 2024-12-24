<template>
    <div class="container mt-5">
        <h1>Scientific Research</h1>
        <form @submit.prevent="submitResearch">
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input
                    v-model="researchData.title"
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="Enter title"
                />
                <div v-if="titleError" class="text-danger">
                    Title is required and must be at least 3 characters.
                </div>
            </div>

            <div class="mb-3">
                <label for="authors" class="form-label">Author(s)</label>
                <input
                    v-model="authorsInput"
                    type="text"
                    class="form-control"
                    id="authors"
                    placeholder="Enter authors separated by commas"
                    @blur="updateAuthorsList"
                />
            </div>

            <div class="mb-3">
                <label for="organization" class="form-label"
                    >Organization</label
                >
                <input
                    v-model="researchData.organization"
                    type="text"
                    class="form-control"
                    id="organization"
                    placeholder="Enter organization name"
                />
                <div v-if="organizationError" class="text-danger">
                    Organization name is required.
                </div>
            </div>

            <div class="mb-3">
                <label for="publication-date" class="form-label"
                    >Publication date</label
                >
                <input
                    v-model="researchData.publicationDate"
                    type="date"
                    class="form-control"
                    id="publication-date"
                />
            </div>

            <div class="mb-3">
                <label for="content" class="form-label">Content</label>
                <textarea
                    v-model="researchData.content"
                    class="form-control"
                    id="content"
                    rows="5"
                    placeholder="Enter detailed description"
                ></textarea>
            </div>

            <!-- Upload -->
            <div class="row g-3 mt-3">
                <div class="col-md-12">
                    <label for="upload" class="form-label"
                        >Relevant Images & Videos</label
                    >
                    <input
                        type="file"
                        class="form-control"
                        id="upload"
                        multiple
                        @change="handleFiles"
                        accept="image/*,video/*"
                    />
                    <small class="text-muted"
                        >*Maximum 4 files (images or videos)</small
                    >
                    <div v-if="fileError" class="text-danger">
                        Only images and videos are allowed!
                    </div>
                </div>
            </div>

            <!-- Keywords Field -->
            <div class="mb-3">
                <label for="keywords" class="form-label">Keywords</label>
                <div class="d-flex flex-wrap gap-2">
                    <div
                        v-for="keyword in researchData.keywords"
                        :key="keyword"
                        class="badge bg-primary"
                    >
                        {{ keyword }}
                        <button
                            type="button"
                            class="btn-close btn-close-white ms-1"
                            @click="removeKeyword(keyword)"
                        ></button>
                    </div>
                </div>
                <div class="input-group mt-2">
                    <input
                        type="text"
                        class="form-control"
                        id="keywords"
                        placeholder="Add a keyword"
                        v-model="newKeyword"
                        @keyup.enter="
                            addKeyword(newKeyword);
                            newKeyword = '';
                        "
                    />
                    <button
                        type="button"
                        class="btn btn-outline-primary"
                        @click="
                            addKeyword(newKeyword);
                            newKeyword = '';
                        "
                    >
                        Add
                    </button>
                </div>
            </div>

            <!-- Buttons -->
            <div class="mt-4 d-flex justify-content-between">
                <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click="resetForm"
                >
                    Reset
                </button>
                <button type="submit" class="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
</template>

<script>
import { useDataStore } from "../stores/dataStore";

export default {
    name: "ResearchAdmin",
    data() {
        return {
            researchData: {
                id: 0,
                title: "",
                authors: [""],
                organization: "",
                publicationDate: "",
                content: "",
                keywords: [""],
                files: [],
            },
            file: {
                id: 0,
                path: "",
            },
            newKeyword: "",
            titleError: false,
            organizationError: false,
            fileError: false,
            editIndex: null,
            authorsInput: "", // Input field value for authors
        };
    },
    setup() {
        const researchStore = useDataStore();
        return { researchStore };
    },
    created() {
        // الحصول على index من الـ route
        const id = parseInt(this.$route.query.id);

        // التحقق إذا كان الـ index موجودا
        if (id) {
            this.researchData = this.researchStore.getResearchById(id);
        }
        // save author.name from store to authors list of strings
        this.authorsInput = this.researchData.authors
            .map((author) => author.name)
            .join(", ");
    },

    methods: {
        submitResearch() {
            const id = parseInt(this.$route.query.id);

            // Validate title
            this.titleError = this.researchData.title.length < 3;
            this.organizationError = !this.researchData.organization;

            if (
                this.researchData.title &&
                this.researchData.publicationDate &&
                !this.titleError &&
                !this.organizationError
            ) {
                if (id) {
                    this.researchStore.updateResearch(this.researchData);
                } else {
                    this.researchStore.addResearch(this.researchData);
                }
                const researchDetails = `
      Title: ${this.researchData.title}
      Authors: ${this.researchData.authors}
      Organization: ${this.researchData.organization}
      Publication Date: ${this.researchData.publicationDate}
      Keywords: ${this.researchData.keywords.join(", ")}
    `;

                // Show alert with saved research details
                alert(
                    `Research saved successfully! \n\nDetails:\n${researchDetails}`
                );

                this.resetForm();
                // Redirect to the Research page after saving
                this.$router.push("/research");
            } else {
                alert("Please fill out the required fields.");
            }
        },

        resetForm() {
            this.researchData = {
                title: "",
                authors: "",
                organization: "",
                publicationDate: "",
                content: "",
                keywords: [],
            };
            this.editIndex = null;
            this.titleError = false;
            this.organizationError = false;
            this.fileError = false;
        },
        addKeyword(newKeyword) {
            if (
                newKeyword &&
                !this.researchData.keywords.includes(newKeyword)
            ) {
                this.researchData.keywords.push(newKeyword);
            }
        },
        removeKeyword(keyword) {
            const index = this.researchData.keywords.indexOf(keyword);
            if (index > -1) {
                this.researchData.keywords.splice(index, 1);
            }
        },
        handleFiles(event) {
            const files = Array.from(event.target.files);
            const validFiles = files.filter(
                (file) =>
                    file.type.startsWith("image/") ||
                    file.type.startsWith("video/")
            );

            if (validFiles.length !== files.length) {
                this.fileError = true;
            } else {
                this.fileError = false;
            }

            // Further processing for valid files if needed
            console.log("Valid files:", validFiles);
        },
        updateAuthorsList() {
            // const authorIndex = this.authors.id
            // Split input by commas and map to objects
            const names = this.authorsInput
                .split(",")
                .map((name) => name.trim());
            this.researchData.authors = names.map((name, index) => ({
                id: index, // Generate a unique ID for each author
                name,
            }));
        },
        watch: {
            // Keep `authorsInput` in sync when `authors` list changes
            "researchData.authors": {
                handler(newAuthors) {
                    this.authorsInput = newAuthors
                        .map((author) => author.name)
                        .join(", ");
                },
                deep: true,
            },
        },
    },
};
</script>

<style scoped>
.activity-card {
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 20px;
}

.status-badge {
    border-radius: 12px;
    font-size: 12px;
    padding: 2px 8px;
    color: #fff;
}

.status-ongoing {
    background-color: #fd9e02;
}

.status-completed {
    background-color: #126782;
}

.status-upcoming {
    background-color: #219ebc;
}
.btn-success {
    background-color: #20c997 !important; /* لون أخضر فاتح */
    border-color: #20c997 !important;
}

.btn-danger {
    background-color: #dc3545 !important;
    border-color: #dc3545 !important;
}

.btn-secondary {
    background-color: #4f678d !important; /* لون أزرق */
    border-color: #4f678d !important;
}
</style>
