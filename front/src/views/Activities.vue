<template>
    <div>
        <!-- General Activities Section -->
        <main class="container py-5">
            <div class="d-flex align-items-center mb-4">
                <h2 class="mb-0 me-3">General Activities</h2>
                <router-link to="/activity-admin" class="btn btn-success btn-sm me-2">Add</router-link>
            </div>

            <!-- Search and Filter Fields in the Same Line -->
            <div class="d-flex align-items-center mb-4">
                <!-- Search Bar -->
                <input
                    type="text"
                    class="form-control me-2"
                    placeholder="Search..."
                    v-model="searchQuery"
                />

                <!-- Filter by Status -->
                <select
                    id="statusFilter"
                    v-model="statusFilter"
                    class="form-select form-select-sm me-2"
                    aria-label="Filter by Status"
                >
                    <option value="">Status</option>
                    <option v-for="status in statuses" :key="status" :value="status">{{ status }}</option>
                </select>

                <!-- Sorting Options -->
                <select
                    id="sortMode"
                    v-model="sortMode"
                    class="form-select form-select-sm me-2"
                    aria-label="Sort by Date"
                >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </div>

            <div class="row g-4">
                <div class="col-12" v-for="activity in filteredActivities" :key="activity.id">
                    <div class="activity-card d-flex justify-content-between">
                        <div>
                            <h5 class="d-flex align-items-center">
                                {{ activity.title }}
                                <span :class="['status-badge', 'status-' + activity.status]" class="ms-2 me-2">{{ activity.status }}</span>
                            </h5>
                            <p class="mb-1">
                                <i class="bi bi-calendar"></i>
                                {{ activity.startDate }} - {{ activity.endDate }} |
                                <i class="bi bi-clock"></i>
                                {{ activity.startTime }} - {{ activity.endTime }}
                            </p>
                            <p class="mb-1">
                                <i class="bi bi-geo-alt"></i>
                                {{ activity.location }}
                            </p>
                            <p>{{ activity.summary }}</p>
                            <!-- Learn More Button for Each Activity -->
                            <router-link :to="{ name: 'SingleActivity', params: { id: activity.id }}" class="text-decoration-none">
                                Learn more
                            </router-link>
                        </div>
                        <div class="d-flex align-items-start">
                            <button class="btn btn-secondary btn-sm me-2" @click="editActivity(activity.id)">
                                Edit
                            </button>
                            <button class="btn btn-danger btn-sm me-2" @click="confirmDelete(activity.id)">
                                Delete
                            </button>
                        </div>
                        <!-- <img :src="activity.media.length > 0 && activity.media[0]?.path ? activity.media[0].path : 'https://via.placeholder.com/150'" alt="Activity Image" class="img-fluid" /> -->
                        <img :src="'https://via.placeholder.com/150'" alt="Activity Image" class="img-fluid" />
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import { useDataStore } from '../stores/dataStore';

export default {
    name: "GeneralActivities",
    data() {
        return {
            statuses: ["upcoming", "ongoing", "completed"], // Define statuses from the data
            searchQuery: "",
            statusFilter: "",
            sortMode: "newest", // Default sort mode
        };
    },
    setup() {
        const activityStore = useDataStore();
        return { activityStore };
    },
    computed: {
        filteredActivities() {
            // debugger
            // Filter activities based on search query and status
            let filtered = this.activityStore.activities.filter((activity) => {
                const matchesQuery = activity.title
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase());
                const matchesStatus = this.statusFilter
                    ? activity.status === this.statusFilter
                    : true;
                return matchesQuery && matchesStatus;
            });

            // Sort activities based on the selected sort mode (Newest or Oldest)
            if (this.sortMode === "newest") {
                filtered.sort((a, b) => new Date(b.date_start) - new Date(a.date_start));
            } else if (this.sortMode === "oldest") {
                filtered.sort((a, b) => new Date(a.date_start) - new Date(b.date_start));
            }

            return filtered;
        },
    },

    methods: {
        editActivity(activityId) {
            this.$router.push({
                path: `/activity-admin`,
                query: { id: activityId },
            });
        },
        confirmDelete(activityId) {
            if (confirm("Are you sure you want to delete this activity?")) {
                this.activityStore.deleteActivity(activityId);
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

.status-badge {
    border-radius: 12px;
    font-size: 12px;
    padding: 2px 8px;
    color: #fff;
}

.status-upcoming {
    background-color: #fd9e02;
}

.status-ongoing {
    background-color: #126782;
}

.status-completed {
    background-color: #219ebc;
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

.input-group {
    width: 100%;
}

.form-select-sm,
.form-control-sm {
    width: auto;
}

.d-flex {
    display: flex;
    align-items: center;
}
</style>
