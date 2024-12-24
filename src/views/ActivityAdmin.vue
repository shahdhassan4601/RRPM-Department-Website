<template>
    <div class="container my-5">
        <h1 class="mb-4">Add Activity</h1>
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="formData.title"
                    placeholder="Enter activity title"
                />
                <div v-if="titleError" class="text-danger">
                    Title is required and must be at least 3 characters.
                </div>
            </div>

            <!-- Dates and Times -->
            <div class="row g-3">
                <div class="col-md-3">
                    <label for="startDate" class="form-label">Start date</label>
                    <input
                        type="date"
                        class="form-control"
                        id="startDate"
                        v-model="formData.startDate"
                    />
                </div>
                <div class="col-md-3">
                    <label for="endDate" class="form-label">End date</label>
                    <input
                        type="date"
                        class="form-control"
                        id="endDate"
                        v-model="formData.endDate"
                    />
                </div>
                <div class="col-md-3">
                    <label for="startTime" class="form-label">Start time</label>
                    <input
                        type="time"
                        class="form-control"
                        id="startTime"
                        v-model="formData.startTime"
                    />
                </div>
                <div class="col-md-3">
                    <label for="endTime" class="form-label">End time</label>
                    <input
                        type="time"
                        class="form-control"
                        id="endTime"
                        v-model="formData.endTime"
                    />
                </div>
            </div>

            <!-- Location -->
            <div class="mt-3">
                <label for="location" class="form-label">Location</label>
                <input
                    type="text"
                    class="form-control"
                    id="location"
                    v-model="formData.location"
                    placeholder="Input text"
                />
                <div v-if="locationError" class="text-danger">
                    Location is required.
                </div>
            </div>

            <!-- Keywords -->
            <div class="row g-3 mt-3">
                <div class="col-md-12">
                    <label for="keywords" class="form-label">Keywords</label>

                    <div class="d-flex flex-wrap gap-2">
                        <!-- Existing Keywords -->
                        <div
                            v-for="keyword in formData.keywords"
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
                    <!-- Input for Adding Keywords -->
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
            </div>

            <!-- Status -->
            <div class="mt-3">
                <label for="status" class="form-label">Status</label>
                <input
                    type="text"
                    class="form-control"
                    id="status"
                    v-model="formData.status"
                    placeholder="Enter activity status (e.g. Planned, In Progress, Completed)"
                />
            </div>

            <!-- Unit -->
            <div class="mt-3">
                <label for="unit" class="form-label">Unit</label>
                <input
                    type="text"
                    class="form-control"
                    id="unit"
                    v-model="formData.unit"
                    placeholder="Enter unit name"
                />
            </div>

            <!-- Upload and Unit -->
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

            <!-- Summary -->
            <div class="mt-3">
                <label for="summary" class="form-label">Summary</label>
                <textarea
                    class="form-control"
                    id="summary"
                    v-model="formData.summary"
                    rows="2"
                    placeholder="Brief description"
                ></textarea>
            </div>

            <!-- Detailed Description -->
            <div class="mt-3">
                <label for="detailedDescription" class="form-label"
                    >Detailed description</label
                >
                <textarea
                    class="form-control"
                    id="detailedDescription"
                    v-model="formData.detailedDescription"
                    rows="4"
                    placeholder="Enter detailed description here"
                ></textarea>
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

        <!-- Display Added Activities -->
        <!--<div class="mt-5">
      <h3>Added Activities</h3>
      <ul class="list-group">
        <li v-for="(activity, index) in activities" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>{{ activity.title }}</strong> ({{ activity.startDate }} - {{ activity.endDate }})
            <br>
            <small>{{ activity.summary }}</small>

            <br>
            <small><strong>Keywords:</strong> {{ activity.keywords.join(', ') }}</small>

          </div>
          <div>
            <button class="btn btn-outline-secondary btn-sm me-2" @click="editActivity(index)">Edit</button>
            <button class="btn btn-outline-danger btn-sm" @click="deleteActivity(index)">Delete</button>
          </div>
        </li>
      </ul>
    </div>-->
    </div>
</template>

<script>
import { useDataStore } from "../stores/dataStore";
export default {
    name: "ActivityAdmin",
    data() {
        return {
            formData: {
                id: 0,
                title: "",
                startDate: "",
                endDate: "",
                startTime: "",
                endTime: "",
                location: "",
                status: "", // User can input the status
                unit_id: 0, // User can input the unit
                keywords: [], // Keywords stored as an array
                summary: "",
                detailedDescription: "",
                files: [],
            },
            file: {
                id: 0,
                path: "",
            },
            activities: JSON.parse(localStorage.getItem("activities")) || [],
            newKeyword: "", // For adding a new keyword
            editIndex: null, // Index of the activity being edited
            titleError: false, // Error state for title field
            locationError: false, // Error state for location field
            fileError: false, // Error state for file uploads
        };
    },
    setup() {
        const activityStore = useDataStore();
        return { activityStore };
    },
    created() {
        // debugger
        // الحصول على index من الـ route
        const id = parseInt(this.$route.query.id);

        // التحقق إذا كان الـ index موجودا
        if (id) {
            // const activity = this.activityStore.getActivityById(id);
            this.formData = this.activityStore.getActivityById(id);
        }
    },

    methods: {
        submitForm() {
            // debugger
            const id = parseInt(this.$route.query.id);

            this.titleError =
                !this.formData.title || this.formData.title.length < 3;
            this.locationError = !this.formData.location;

            if (
                this.formData.title &&
                this.formData.title.length >= 3 &&
                this.formData.location
            ) {
                if (id) {
                    this.activityStore.updateActivity(this.formData);
                } else {
                    this.activityStore.addActivity(this.formData);
                }


                const activityDetails = `
      Title: ${this.formData.title}
      Start Date: ${this.formData.startDate}
      End Date: ${this.formData.endDate}
      Location: ${this.formData.location}
      Status: ${this.formData.status}
      Unit: ${this.formData.unit}
      Keywords: ${this.formData.keywords ? this.formData.keywords.join(", ") : []}
      Summary: ${this.formData.summary}
    `;

                // إظهار alert مع تفاصيل النشاط المحفوظ
                alert(
                    `Activity saved successfully!\n\nDetails:\n${activityDetails}`
                );

                this.resetForm(); // إعادة تعيين النموذج بعد الحفظ
                // this.$router.push("/Activities"); // إعادة التوجيه إلى صفحة الأنشطة
            } else {
                alert("Please fill out the required fields.");
            }
        },

        resetForm() {
            this.formData = {
                title: "",
                startDate: "",
                endDate: "",
                startTime: "",
                endTime: "",
                location: "",
                status: "", // Reset status input
                unit: "", // Reset unit input
                keywords: [], // Reset keywords array
                summary: "",
                detailedDescription: "",
                files: [],
            };
            this.newKeyword = ""; // Reset new keyword input
            this.editIndex = null; // Reset edit index
            this.titleError = false; // Reset title error
            this.locationError = false; // Reset location error
        },
        addKeyword(keyword) {
            if (keyword && !this.formData.keywords.includes(keyword)) {
                this.formData.keywords.push(keyword); // Add keyword if not already in the list
            }
        },
        removeKeyword(keyword) {
            const index = this.formData.keywords.indexOf(keyword);
            if (index !== -1) {
                this.formData.keywords.splice(index, 1); // Remove keyword
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
