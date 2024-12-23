<template>
    <div class="container my-4 w-75">
        <!-- Title Row -->
        <div class="row mb-3 justify-content-between align-items-center">
            <div class="col-12 col-md-8">
                <h1 class="activity-title">
                    {{ activity.title }}
                </h1>
            </div>

            <!-- Status Row -->
            <div class="col-12 col-md-auto text-md-end text-center">
                <span class="status-box px-3 py-2">{{ activity.status }}</span>
            </div>
        </div>

        <!-- Medical Unit Row -->
        <div class="row mb-3">
            <div class="col-auto unit-row">
                <span class="unit-box px-3 py-2">{{
                    getUnitName(activity.unit_id)
                }}</span>
            </div>
        </div>

        <!-- Details Row (Date, Time, Address) -->
        <div class="row details-row text-md-start justify-content-center">
            <div class="col-auto">
                <i class="bi bi-calendar-event mx-2"></i>
                <span>{{ activity.startDate }} - {{ activity.endDate }}</span>
            </div>
            <div class="col-auto">
                <i class="bi bi-clock mx-2"></i>
                <span>{{ activity.startTime }} - {{ activity.endTime }}</span>
            </div>
            <div class="col-auto">
                <i class="bi bi-geo-alt mx-2"></i>
                <span>{{ activity.location }}</span>
            </div>
        </div>

        <!-- Photos Section -->
        <div class="container my-4 photos-row">
            <div class="row gx-1 d-flex justify-content-center">
                <!-- Add narrow spacing between columns -->
                <!-- Large Photo -->
                <div class="col-lg-7 mb-lg-3">
                    <!-- <img
                        v-if="activity.media?.length"
                        :src="activity.media[0].path"
                        class="large-photo"
                        alt="Activity Photo"
                    />
                    <div v-else class="placeholder large-photo">
                        <img
                            src="https://via.placeholder.com/1000x700"
                            alt="Large Image Placeholder"
                            class="large-photo"
                        />
                    </div> -->
                    <div class="placeholder large-photo">
                        <img
                            src="https://via.placeholder.com/1000x700"
                            alt="Large Image Placeholder"
                            class="large-photo"
                        />
                    </div>
                </div>

                <!-- Small Photos -->
                <div class="col-lg-3">
                    <div class="row">
                        <!-- <div
                            v-for="(smallImage, index) in activity.media?.slice(1, 4)"
                            :key="index"
                            class="small-photo-container mb-1"
                        >
                             <img
                                v-if="smallImage"
                                :src="smallImage.path"
                                class="small-photo"
                                alt="Small Activity Photo"
                            />
                            <div v-else class="small-photo-container mb-1 placeholder">
                                <img
                                    :src="getSmallImagePlaceholder(index)"
                                    class="small-photo"
                                    alt="Small Image Placeholder"
                                />
                            </div> -->
                        <div
                            v-for="(smallImage, index) in [null, null, null]"
                            :key="index"
                            class="small-photo-container mb-1 me-2"
                        >
                            <img
                                :src="getSmallImagePlaceholder(index)"
                                class="small-photo"
                                alt="Small Image Placeholder"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Detailed Description Section -->
        <div class="detailed-description">
            <p>{{ activity.detailedDescription }}</p>
        </div>

        <!-- Tags Section -->
        <div class="tags-section mt-4">
            <div class="tags-container d-flex flex-wrap gap-2">
                <span
                    v-for="(tag, index) in activity.keywords"
                    :key="index"
                    class="badge badge-pill"
                    :class="`tag-badge`"
                >
                    {{ "# " + tag.keyword }}
                </span>
            </div>
        </div>

        <!-- Buttons Section -->
        <div class="buttons-section text-center mt-4">
            <button class="btn btn-primary btn-sm" @click="goBack">
                Go Back
            </button>
        </div>
    </div>
</template>

<script>
import { useDataStore } from '../stores/dataStore';

export default {
    name: "SingleActivity",
    data() {
        return {
            activity: {}, // Single activity data
        };
    },
    setup() {
        const activityStore = useDataStore();
        return { activityStore };
    },
    created() {
        const activityId = parseInt(this.$route.params.id); // Get the activity ID from the route params
        // Find the activity in the activities array by ID
        const activity = this.activityStore.getActivityById(activityId);
        if (activity) {
            this.activity = activity; // Set the activity data
        } else {
            console.error("Activity not found");
        }
    },

    methods: {
        // Get the unit name based on the unit_id
        getUnitName(unitId) {
            const unit = this.activityStore.units.find((unit) => unit.unit_id === unitId);
            return unit ? unit.name : "Unknown Unit"; // Return unit name or "Unknown Unit" if not found
        },

        // Placeholder logic for small images
        getSmallImagePlaceholder(index) {
            const placeholders = [
                "https://via.placeholder.com/200x150?text=Small+1", // Small image 1
                "https://via.placeholder.com/200x150?text=Small+2", // Small image 2
                "https://via.placeholder.com/200x150?text=Small+3", // Small image 3
            ];
            return placeholders[index] || placeholders[0]; // Return the appropriate placeholder
        },

        goBack() {
            this.$router.push("/activities"); // Navigate back to the activities list
        },
    },
};
</script>

<style scoped>
.container {
    padding: 0px !important;
}
/* Title Styles */
.activity-title {
    font-size: 3rem;
    font-weight: bold;
}

/* Unit Box Styles */
.unit-box {
    background-color: #c2ecff;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 500;
}

/* Status Box Styles */
.status-box {
    background-color: #fd9e02;
    color: white;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 500;
    display: inline-block;
}

/* Details Row Styles */
.details-row {
    margin-top: 20px;
    font-size: 1.1rem;
    color: #023047;
}

.details-row i {
    font-size: 1.2rem;
    color: #219ebc;
}

.details-row span {
    font-weight: 500;
}
/* Photos Section Container */
.photos-row {
    max-width: 100%; /* Restrict the width of the grid */
    margin: 0 auto; /* Center the grid in the container */
}

/* Large Photo Styles */
.large-photo {
    width: 100%; /* Fill the column width */
    height: 400px; /* Fixed height for the large image */
    object-fit: cover; /* Crop the image to fit the container */
    border-radius: 8px; /* Optional: rounded corners */
    display: flex;
    justify-content: center;
    align-items: center;
    color: #777;
    font-size: 1rem;
}

/* Small Photo Container Styles */
.small-photo-container {
    height: calc(390px / 3); /* Divide the large image's height by 3 */
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Small Photo Styles */
.small-photo {
    width: 100%; /* Fill the column width */
    height: 100%; /* Fill the height of the container */
    object-fit: cover; /* Crop the image to fit the container */
    border-radius: 8px; /* Optional: rounded corners */
}

/* Detailed Description Section */
.detailed-description {
    max-width: 85%; /* Ensure the description doesn't exceed the width of the page */
    margin: 0 auto; /* Center the container horizontally */
}

.detailed-description p {
    /* justify the text */
    text-align: justify;
    font-size: 1.1rem;
    font-weight: 460;
    color: #333;
    line-height: 1.6;
    white-space: pre-line; /* Preserve newlines and render them as line breaks */
    margin-top: 30px;
    width: 100%; /* Ensure it spans the full container width */
}

/* Tags Section Styles */
.tags-section {
    max-width: 85%; /* Ensure the tags section aligns with the page */
    margin: 0 auto; /* Center the section */
    text-align: left; /* Align the section title to the left */
}

.tags-section h5 {
    font-size: 1.2rem;
    font-weight: bold;
}

.tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px; /* Add spacing between tags */
}

.tag-badge {
    background-color: #c2ecff;
    color: #023047;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: capitalize;
    white-space: nowrap; /* Ensure the text doesn't wrap */
    display: inline-block;
    padding: 5px 10px;
    margin-top: 5px;
}

/* Mobile View Adjustments */
@media (max-width: 576px) {
    /* Center Align Title and Status */
    .activity-title {
        font-size: 1.8rem; /* Slightly smaller font for mobile */
    }

    .status-box {
        margin-top: 10px; /* Add spacing below the title */
        text-align: center;
        display: block; /* Ensure it spans its own row */
    }
    .unit-box {
        margin-top: 10px;
        text-align: center;
        display: block;
    }
    .unit-row {
        width: 100%;
    }
    /* Details Section (Date, Time, Address) */
    .details-row {
        flex-direction: column; /* Stack the items vertically */
    }

    .details-row .col-auto {
        margin-bottom: 10px; /* Add spacing between rows */
    }

    /* Photos Section */
    .photos-row {
        display: flex;
        flex-direction: column; /* Stack the images vertically on mobile */
        align-items: center; /* Center the images */
        max-width: 100%;
        margin: 0 auto;
    }

    /* Large Photo Styles */
    .photos-row .large-photo {
        width: 100%; /* Take the full width of the container */
        height: auto; /* Maintain aspect ratio */
        margin-bottom: 15px; /* Add spacing below the large photo */
    }

    /* Small Photos Styles */
    .small-photo-container {
        height: auto;
        width: 100%; /* Make small images fill the full width */
        padding-bottom: 0.7rem !important; /* Add space below each small image */
        display: flex;
        justify-content: center; /* Center small photos */
    }

    .small-photo {
        object-fit: cover; /* Ensure images don't stretch */
        border-radius: 8px; /* Optional: rounded corners */
    }

/* Tags Section Styles */
.tags-section {
    max-width: 85%; /* Ensure the tags section aligns with the page */
    margin: 0 auto; /* Center the section */
    text-align: left; /* Align the section title to the left */
}

.tags-section h5 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #023047;
}

.tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px; /* Add spacing between tags */
}

.tag-badge {
    background-color: #023047; /* Dark background */
    color: #ffffff; /* Light text */
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: capitalize;
    white-space: nowrap; /* Ensure the text doesn't wrap */
    display: inline-block;
    padding: 5px 15px; /* Add padding for a better look */
}

    /* Description Section */
    .detailed-description {
        max-width: 100%;
    }
    .detailed-description p {
        font-size: 1rem; /* Reduce description font size for mobile */
        text-align: justify;
        white-space: pre-line; /* Preserve newlines and render them as line breaks */
        color: #333;
        line-height: 1.6;
    }
}
</style>
