<template>
    <div class="container my-4 w-75">
        <!-- Title Row -->
        <div class="row mb-3 justify-content-between align-items-center">
            <div class="col-md-8">
                <h1 class="activity-title">
                    {{ getTranslatedData(activity.title) }}
                </h1>
            </div>

            <!-- Status Row -->
            <div class="col-auto">
                <span class="status-box px-3 py-2">{{
                    getTranslatedData(activity.status)
                }}</span>
            </div>
        </div>

        <!-- Medical Unit Row -->
        <div class="row mb-3">
            <div class="col-auto">
                <span class="unit-box px-3 py-2">{{
                    getTranslatedData(activity.unit)
                }}</span>
            </div>
        </div>

        <!-- Details Row (Date, Time, Address) -->
        <div class="row details-row justify-content-center">
            <div class="col-auto d-flex align-items-center">
                <i class="bi bi-calendar-event me-2"></i>
                <span>{{ getTranslatedData(activity.date) }}</span>
            </div>
            <div class="col-auto d-flex align-items-center">
                <i class="bi bi-clock me-2"></i>
                <span>{{ getTranslatedData(activity.time) }}</span>
            </div>
            <div class="col-auto d-flex align-items-center">
                <i class="bi bi-geo-alt me-2"></i>
                <span>{{ getTranslatedData(activity.address) }}</span>
            </div>
        </div>

        <!-- Photos Section -->
        <div class="container my-4 photos-row">
            <div
                class="row gx-1 d-flex align-items-center justify-content-center"
            >
                <!-- Add narrow spacing between columns -->
                <!-- Large Photo -->
                <div class="col-7">
                    <img
                        :src="activity.img.large"
                        class="large-photo"
                        alt="Large Activity Photo"
                    />
                </div>

                <!-- Small Photos -->
                <div class="col-2">
                    <div class="row">
                        <div class="col-auto small-photo-container mb-1">
                            <img
                                :src="activity.img.small[0]"
                                class="small-photo"
                                alt="Small Activity Photo 1"
                            />
                        </div>
                        <div class="col-auto small-photo-container mb-1">
                            <img
                                :src="activity.img.small[1]"
                                class="small-photo"
                                alt="Small Activity Photo 2"
                            />
                        </div>
                        <div class="col-auto small-photo-container">
                            <img
                                :src="activity.img.small[2]"
                                class="small-photo"
                                alt="Small Activity Photo 3"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Detailed Description Section -->
        <div class="detailed-description">
            <p>{{ getTranslatedData(activity.description) }}</p>
        </div>

        <!-- Tags Section -->
        <div class="tags-section mt-4">
            <div class="tags-container d-flex flex-wrap gap-2">
                <span
                    v-for="(tag, index) in getTranslatedData(activity.tags)"
                    :key="index"
                    class="tag-badge px-3 py-2"
                >
                    {{ "# " + tag }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SingleActivity",
    data() {
        return {
            activity: {
                title: {
                    en: "Health Awareness Campaign",
                    ar: "حملة توعية صحية",
                },
                unit: { en: "Rheumatology Unit", ar: "وحدة الروماتيزم" },
                status: {
                    en: "Ongoing", // Options: "Upcoming", "Ongoing", "Completed"
                    ar: "جارية", // خيارات: "قادمة"، "جارية"، "مكتملة"
                },
                date: "2024-12-20", // Shared between languages
                time: {
                    en: "10:00 AM - 2:00 PM",
                    ar: "10:00 صباحًا - 2:00 مساءً",
                },
                address: {
                    en: "Room 01, Main Hospital lorem ipsum dolor sit amet",
                    ar: "الغرفة 01، المستشفى الرئيسي",
                },
                img: {
                    large: "https://via.placeholder.com/1000x700", // Large image placeholder
                    small: [
                        "https://via.placeholder.com/200x150?text=Small+1", // Small image 1
                        "https://via.placeholder.com/200x150?text=Small+2", // Small image 2
                        "https://via.placeholder.com/200x150?text=Small+3", // Small image 3
                    ],
                },
                description: {
                    en: "This is a detailed description of the health awareness activity,focusing on the importance of health in rheumatology. This is a detailed description of the health awareness activity, focusing on the importance of health in rheumatology. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum adipisci amet esse numquam, ullam perspiciatis quo. Explicabo, aliquam? Incidunt aperiam doloremque, perspiciatis magnam consequuntur et tempora ratione quia similique eum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum adipisci amet esse numquam, ullam perspiciatis quo. Explicabo, aliquam? Incidunt aperiam doloremque, perspiciatis magnam consequuntur et tempora ratione quia similique eum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum adipisci amet esse numquam, ullam perspiciatis quo. Explicabo, aliquam? Incidunt aperiam doloremque, perspiciatis magnam consequuntur et tempora ratione quia\n similique eum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum adipisci amet esse numquam, ullam perspiciatis quo. Explicabo, aliquam? Incidunt aperiam doloremque, perspiciatis magnam consequuntur et tempora ratione quia similique eum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum adipisci amet esse numquam, ullam perspiciatis quo. Explicabo, aliquam? Incidunt aperiam doloremque, perspiciatis magnam consequuntur et tempora ratione quia similique eum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum adipisci amet esse numquam, ullam perspiciatis quo. Explicabo, aliquam? Incidunt aperiam doloremque, perspiciatis magnam consequuntur et tempora ratione quia similique eum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum adipisci amet esse numquam, ullam perspiciatis quo. Explicabo, aliquam? Incidunt aperiam doloremque, perspiciatis magnam consequuntur et tempora ratione quia similique eum.",
                    ar: "هذا هو الوصف التفصيلي لنشاط التوعية الصحية، مع التركيز على أهمية الصحة في الروماتيزم.",
                },
                tags: {
                    en: ["Health", "Awareness", "Rheumatology"],
                    ar: ["الصحة", "التوعية", "الروماتيزم"],
                },
            },
            selectedLang: "en", // Default language (can be dynamically updated)
        };
    },
    methods: {
        // Method to retrieve data based on the selected language
        getTranslatedData(field) {
            // If the field is an object, retrieve the value based on the current language
            if (typeof field === "object") {
                return field[this.selectedLang];
            }
            // Otherwise, return the field directly
            return field;
        },
        // Method to change the language (useful for testing or toggling)
        changeLanguage(lang) {
            this.selectedLang = lang;
        },
    },
};
</script>

<style scoped>
/* Title Styles */
.activity-title {
    font-size: 3rem;
    font-weight: bold;
    color: #023047;
}

/* Unit Box Styles */
.unit-box {
    background-color: #c2ecff;
    color: #023047;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 500;
}

/* Status Box Styles */
.status-box {
    background-color: #fb8500;
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
    /* margin-left: 120px; */
}

/* Large Photo Styles */
.large-photo {
    width: 100%; /* Fill the column width */
    height: 400px; /* Fixed height for the large image */
    object-fit: cover; /* Crop the image to fit the container */
    border-radius: 8px; /* Optional: rounded corners */
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
    width: 100%; /*Fill the column width */
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
    color: #023047;
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
}
</style>
