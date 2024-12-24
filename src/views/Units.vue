<template>
    <div class="container my-5">
        <div class="d-flex align-items-center mb-4">
            <h1 class="me-3 mb-0">Medical Units</h1>
            <router-link to="/unit-admin" class="btn btn-success btn-sm"
                >Add</router-link
            >
        </div>
        <div v-if="unitStore.loading">Loading units...</div>

        <div
            v-for="unit in unitStore.units"
            :key="unit.id"
            :id="'unit-' + unit.id"
            class="card mb-4 d-flex flex-row align-items-center pe-5"
        >
            <div class="card-body">
                <h5>{{ unit.name }}</h5>
                <p><strong>Address:</strong> {{ unit.address }}</p>
                <p>
                    <strong> Working Hours:</strong> {{ unit.hours.from }} -
                    {{ unit.hours.to }}
                </p>
                <h6><strong>Clinics:</strong></h6>
                <ul>
                    <li v-for="clinic in unit.clinics" :key="clinic.id">
                        {{ clinic.name }} ({{ clinic.hours.from }} -
                        {{ clinic.hours.to }})
                    </li>
                </ul>

                <h6><strong> Unit activities: </strong></h6>
                <ul>
                    <li
                        v-for="activity in unitStore.activities.filter(
                            (activity) => activity.unit_id === unit.id
                        )"
                        :key="activity.unit_id"
                    >
                        <router-link
                            :to="{
                                name: 'SingleActivity',
                                params: { id: activity.id },
                            }"
                        >
                            {{ activity.title }}
                        </router-link>
                    </li>
                </ul>

                <p><strong>Mobile Number:</strong> {{ unit.phone_number }}</p>
            </div>

            <div class="">
                <button
                    @click="editUnit(unit.id)"
                    class="btn btn-secondary btn-sm me-2"
                >
                    Edit
                </button>
                <button @click="showPopupfunc(unit.id)" class="btn btn-danger btn-sm">
                    Delete
                </button>
            </div>
            <!-- Popup -->
            <div v-if="showPopup" class="popup-overlay">
                <div class="popup">
                    <h2>Are you sure?</h2>
                    <p>
                        Do you really want to delete this clinic? This action
                        cannot be undone.
                    </p>
                    <div class="popup-actions">
                        <button
                            class="confirm-btn"
                            @click="deleteUnit()"
                        >
                            Yes, Delete
                        </button>
                        <button class="cancel-btn" @click="closePopup">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//   import { units } from '../utils/dataUtil';
import { useDataStore } from "../stores/dataStore";

export default {
    name: "Units",
    data() {
        return {
            showPopup: false,
            unitToDeleteId: null,
        };
    },
    setup() {
        const unitStore = useDataStore();
        return { unitStore };
    },
    mounted() {
        // Check if there is a hash in the URL
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                // Scroll to the element with the matching ID
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    },
    methods: {
        showPopupfunc(unitId) {
            this.showPopup = true;
            this.unitToDeleteId = unitId;
        },
        deleteUnit() {
            this.unitStore.deleteUnit(this.unitToDeleteId);
            this.showPopup = false;
            this.unitToDeleteId = null;
        },
        closePopup() {
            this.showPopup = false;
            this.clinicToDeleteId = null;
            this.deleteType = null;
        },
        editUnit(id) {
            this.$router.push(`/unit-admin/${id}`); // Navigate to the edit page
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

.btn-success {
    background-color: #20c997 !important; /* Light green */
    border-color: #20c997 !important;
}

.btn-danger {
    background-color: #dc3545 !important;
    border-color: #dc3545 !important;
}

.btn-secondary {
    background-color: #4f678d !important; /* Blue */
    border-color: #4f678d !important;
}

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
</style>
