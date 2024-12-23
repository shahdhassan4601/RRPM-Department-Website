<template>
    <div class="container py-5">
        <h1 class="mb-4">Unit</h1>

        <!-- Unit Details -->
        <div class="mb-4">
            <label class="form-label">Unit name</label>
            <input
                v-model="unit.name"
                type="text"
                class="form-control"
                placeholder="Enter the name of the unit"
                :class="{ 'is-invalid': errors.unit?.name }"
            />
            <div v-if="errors.unit?.name" class="text-danger">
                Unit name is required
            </div>

            <label class="form-label mt-3">Address</label>
            <input
                v-model="unit.address"
                type="text"
                class="form-control"
                placeholder="Enter the unit's address"
                :class="{ 'is-invalid': errors.unit?.address }"
            />
            <div v-if="errors.unit?.address" class="text-danger">
                Address is required
            </div>
        </div>

        <!-- Clinics Section -->
        <h3 class="mb-3">Clinics</h3>
        <div class="row g-3 align-items-end">
            <div class="col-md-4">
                <label class="form-label">Clinic name</label>
                <input
                    v-model="unit.clinics.name"
                    type="text"
                    class="form-control"
                    placeholder="Brief description"
                    :class="{ 'is-invalid': errors.clinic?.name }"
                />
                <div v-if="errors.clinic?.name" class="text-danger">
                    Clinic name is required
                </div>
            </div>

            <div class="col-md-3 clinic-working-hours">
                <label class="form-label">Working hours</label>
                <div class="input-group">
                    <input
                        v-model="clinic.hours.from"
                        type="time"
                        class="form-control"
                        :class="{ 'is-invalid': errors.clinic?.hours?.from }"
                    />
                    <span class="input-group-text">to</span>
                    <input
                        v-model="clinic.hours.to"
                        type="time"
                        class="form-control"
                        :class="{ 'is-invalid': errors.clinic?.hours?.to }"
                    />
                </div>
                <div v-if="errors.clinic?.hours?.from" class="text-danger">
                    Start time is required
                </div>
                <div v-if="errors.clinic?.hours?.to" class="text-danger">
                    End time is required
                </div>
            </div>

            <div class="col-md-4">
                <label class="form-label">Services</label>
                <input
                    v-model="clinic.services"
                    type="text"
                    class="form-control"
                    placeholder="Enter services (comma separated)"
                    :class="{ 'is-invalid': errors.clinic?.services }"
                />
                <div v-if="errors.clinic?.services" class="text-danger">
                    Services are required
                </div>
            </div>

            <div class="col-md-1">
                <button @click="addClinic" class="btn btn-primary w-100">
                    Save
                </button>
            </div>
        </div>

        <!-- Clinics Table -->
        <table class="table table-bordered mt-4">
            <thead>
                <tr>
                    <th>Clinic Name</th>
                    <th>Working Hours</th>
                    <th>Services</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(clinic, index) in unit.clinics" :key="index">
                    <td>{{ clinic.name }}</td>
                    <td>{{ clinic.hours.from }} - {{ clinic.hours.to }}</td>
                    <td>{{ clinic.services }}</td>
                    <td>
                        <button
                            @click="editClinic(index)"
                            class="btn btn-warning btn-sm"
                        >
                            Edit
                        </button>
                        <button
                            @click="confirmDeleteclinic(index)"
                            class="btn btn-danger btn-sm"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Confirmation Popup -->
        <div v-if="showPopup" class="popup-overlay">
            <div class="popup">
                <h2>Are you sure?</h2>
                <p v-if="deleteType === 'unit'">
                    Do you really want to delete this unit? This action cannot
                    be undone.
                </p>
                <p v-if="deleteType === 'clinic'">
                    Do you really want to delete this clinic? This action cannot
                    be undone.
                </p>
                <div class="popup-actions">
                    <button
                        class="confirm-btn"
                        @click="
                            deleteType === 'unit'
                                ? deleteUnit()
                                : deleteClinic()
                        "
                    >
                        Yes, Delete
                    </button>
                    <button class="cancel-btn" @click="closePopup">
                        Cancel
                    </button>
                </div>
            </div>
        </div>

        <!-- Unit Controls -->
        <div class="mt-4">
            <label class="form-label">Unit working hours:</label>
            <div class="input-group">
                <input
                    v-model="unit.hours.from"
                    type="time"
                    class="form-control"
                    :class="{ 'is-invalid': errors.unit?.hours?.from }"
                />
                <span class="input-group-text">to</span>
                <input
                    v-model="unit.hours.to"
                    type="time"
                    class="form-control"
                    :class="{ 'is-invalid': errors.unit?.hours?.to }"
                />
            </div>
            <div v-if="errors.unit?.hours?.from" class="text-danger">
                Start time is required
            </div>
            <div v-if="errors.unit?.hours?.to" class="text-danger">
                End time is required
            </div>

            <div class="mt-3">
                <button @click="addUnit" class="btn btn-primary">Save</button>
                <button @click="clearFields" class="btn btn-secondary">
                    Clear
                </button>
            </div>
        </div>

        <!-- Units List -->
        <!-- <h3 class="mt-5">Units List</h3>
        <div
            v-for="(unit, index) in units"
            :key="index"
            class="border p-3 mb-3"
        >
            <h5>{{ unit.name }}</h5>
            <p>{{ unit.address }}</p>
            <p>Working Hours: {{ unit.hours.from }} - {{ unit.hours.to }}</p>

            <h6>Clinics:</h6>
            <ul>
                <li v-for="(clinic, idx) in unit.clinics" :key="idx">
                    {{ clinic.name }} ({{ clinic.hours.from }} -
                    {{ clinic.hours.to }}) - Services: {{ clinic.services }}
                </li>
            </ul>

            <button @click="editUnit(index)" class="btn btn-warning btn-sm">
                Update
            </button>
            <button
                @click="confirmDeleteUnit(index)"
                class="btn btn-danger btn-sm"
            >
                Delete
            </button>
        </div> -->
    </div>
</template>

<script>
import { useDataStore } from "../stores/dataStore";
export default {
    name: "UnitAdmin",
    data() {
        return {
            unit: {
                id: 0,
                name: "",
                address: "",
                hours: {
                    from: "",
                    to: "",
                },
                clinics: [],
            working_days:[],
            phone_number: "",
            },
            clinic: {
                id: 0,
                name: "",
                hours: {
                    from: "",
                    to: "",
                },
                services: [],
            },
            editIndex: null,
            editClinicIndex: null,
            errors: {
                unit: {
                    name: false,
                    address: false,
                    hours: {
                        from: false,
                        to: false,
                    },
                },
                clinic: {
                    name: false,
                    hours: {
                        from: false,
                        to: false,
                    },
                    services: false,
                },
            },
            showPopup: false,
            clinicToDeleteIndex: null,
            unitToDeleteIndex: null,
            deleteType: null,
        };
    },

    setup() {
        const unitStore = useDataStore();
        return { unitStore };
    },
    created() {
        debugger
        const id = parseInt(this.$route.params.id);
        if (id) {
            this.unit = this.unitStore.getUnitById(id);
        }
    },
    methods: {
        addClinic() {
            this.resetErrors();
            let hasError = false;

            if (!this.clinic.name) {
                this.errors.clinic.name = true;
                hasError = true;
            }
            if (!this.clinic.hours.from) {
                this.errors.clinic.hours = this.errors.clinic.hours || {};
                this.errors.clinic.hours.from = true;
                hasError = true;
            }

            if (!this.clinic.hours.to) {
                this.errors.clinic.hours = this.errors.clinic.hours || {};
                this.errors.clinic.hours.to = true;
                hasError = true;
            }

            if (!this.clinic.services) {
                this.errors.clinic.services = true;
                hasError = true;
            }

            if (!hasError) {
                if (this.editClinicIndex !== null) {
                    this.unit.clinics[this.editClinicIndex] = {
                        ...this.clinic,
                    };
                    this.editClinicIndex = null;
                } else {
                    this.unit.clinics.push({ ...this.clinic });
                }
                this.clinic = {
                    name: "",
                    hours: { from: "", to: "" },
                    services: "",
                };
            }
        },
        addUnit() {
            // debugger
            this.resetErrors();
            let hasError = false;

            if (!this.unit.name) {
                this.errors.unit.name = true;
                hasError = true;
            }
            if (!this.unit.address) {
                this.errors.unit.address = true;
                hasError = true;
            }
            if (!this.unit.hours.from) {
                this.errors.unit.hours = this.errors.unit.hours || {};
                this.errors.unit.hours.from = true;
                hasError = true;
            }

            if (!this.unit.hours.to) {
                this.errors.unit.hours = this.errors.unit.hours || {};
                this.errors.unit.hours.to = true;
                hasError = true;
            }

            if (!hasError) {
                if (this.id !== null) {
                    this.unitStore.updateUnit(this.unit);
                    this.id = null;
                } else {
                    // this.units.push({ ...this.unit });
                    this.unitStore.addUnit(this.unit);
                }
                this.clearFields();
            }
        },

        confirmDeleteclinic(index) {
            this.showPopup = true; // عرض النافذة
            this.clinicToDeleteIndex = index; // تحديد العيادة المراد حذفها
            this.deleteType = "clinic";
        },
        deleteClinic() {
            if (this.clinicToDeleteIndex !== null) {
                this.unit.clinics.splice(this.clinicToDeleteIndex, 1); // حذف العيادة
                this.clinicToDeleteIndex = null; // إعادة تعيين المؤشر
                this.showPopup = false; // إغلاق النافذة
                this.deleteType = null;
            }
        },
        editClinic(index) {
            this.clinic = { ...this.unit.clinics[index] };
            this.editClinicIndex = index;
        },

        confirmDeleteUnit(index) {
            this.showPopup = true;
            this.unitToDeleteIndex = index;
            this.deleteType = "unit";
        },
        deleteUnit() {
            if (this.unitToDeleteIndex !== null) {
                this.units.splice(this.unitToDeleteIndex, 1);
                this.unitToDeleteIndex = null;
                this.showPopup = false;
                this.deleteType = null;
            }
        },
        closePopup() {
            this.showPopup = false;
            this.clinicToDeleteIndex = null;
            this.unitToDeleteIndex = null;
            this.deleteType = null;
        },
        editUnit(index) {
            this.unit = { ...this.units[index] };
            this.editIndex = index;
        },
        clearFields() {
            this.unit = {
                name: "",
                address: "",
                hours: { from: "", to: "" },
                clinics: [],
            };
            this.clinic = {
                name: "",
                hours: { from: "", to: "" },
                services: "",
            };
            this.editIndex = null;
            this.editClinicIndex = null;
            this.resetErrors();
        },
        resetErrors() {
            this.errors = {
                unit: {
                    name: false,
                    address: false,
                    hours: {
                        from: false,
                        to: false,
                    },
                },
                clinic: {
                    name: false,
                    hours: {
                        from: false,
                        to: false,
                    },
                    services: false,
                },
            };
        },
    },
};
</script>

<style scoped>
button {
    margin-right: 10px;
}

.error-input {
    border: 1px solid red;
}

.error-message {
    color: red;
    font-size: 0.9em;
    margin-top: 4px;
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

/* تعديل عرض حقول الكلينيك */
.clinic-working-hours input[type="time"] {
    width: 110px; /* تعديل العرض */
    padding: 5px; /* تحسين المسافة الداخلية */
    margin-right: 5px; /* مسافة بين الحقول */
}

/* تعديل عرض النص داخل الإطار */
.clinic-working-hours .input-group-text {
    padding: 5px 10px;
}
</style>
