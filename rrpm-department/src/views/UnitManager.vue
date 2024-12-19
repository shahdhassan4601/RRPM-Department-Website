<template>
    <div id="app" class="container py-5">
    <h1 class="mb-4">Unit</h1>

    <!-- Unit Details -->
    <div class="mb-4">
      <label class="form-label">Unit name</label>
      <input v-model="unit.name" type="text" class="form-control" placeholder="Enter the name of the unit"
        :class="{ 'is-invalid': errors.unit?.name }">
      <div v-if="errors.unit?.name" class="text-danger">Unit name is required</div>

      <label class="form-label mt-3">Address</label>
      <input v-model="unit.address" type="text" class="form-control" placeholder="Enter the unit's address"
        :class="{ 'is-invalid': errors.unit?.address }">
      <div v-if="errors.unit?.address" class="text-danger">Address is required</div>
    </div>

    <!-- Clinics Section -->
    <h3 class="mb-3">Clinics</h3>
    <div class="row g-3 align-items-end">
      <div class="col-md-4">
        <label class="form-label">Clinic name</label>
        <input v-model="clinic.name" type="text" class="form-control" placeholder="Brief description"
          :class="{ 'is-invalid': errors.clinic?.name }">
        <div v-if="errors.clinic?.name" class="text-danger">Clinic name is required</div>
      </div>

      <div class="col-md-3">
        <label class="form-label">Working hours</label>
        <div class="input-group">
          <input v-model="clinic.hours.from" type="time" class="form-control" :class="{ 'is-invalid': errors.clinic?.hours?.from }">
          <span class="input-group-text">to</span>
          <input v-model="clinic.hours.to" type="time" class="form-control" :class="{ 'is-invalid': errors.clinic?.hours?.to }">
        </div>
        <div v-if="errors.clinic?.hours?.from" class="text-danger">Start time is required</div>
        <div v-if="errors.clinic?.hours?.to" class="text-danger">End time is required</div>
      </div>

      <div class="col-md-4">
        <label class="form-label">Services</label>
        <input v-model="clinic.services" type="text" class="form-control" placeholder="Enter services (comma separated)"
          :class="{ 'is-invalid': errors.clinic?.services }">
        <div v-if="errors.clinic?.services" class="text-danger">Services are required</div>
      </div>

      <div class="col-md-1">
        <button @click="addClinic" class="btn btn-primary w-100">Save</button>
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
            <button @click="editClinic(index)" class="btn btn-warning btn-sm">Edit</button>
            <button @click="deleteClinic(index)" class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Unit Controls -->
    <div class="mt-4">
      <label class="form-label">Unit working hours:</label>
      <div class="input-group">
        <input v-model="unit.hours.from" type="time" class="form-control" :class="{ 'is-invalid': errors.unit?.hours?.from }">
        <span class="input-group-text">to</span>
        <input v-model="unit.hours.to" type="time" class="form-control" :class="{ 'is-invalid': errors.unit?.hours?.to }">
      </div>
      <div v-if="errors.unit?.hours?.from" class="text-danger">Start time is required</div>
      <div v-if="errors.unit?.hours?.to" class="text-danger">End time is required</div>

      <div class="mt-3">
        <button @click="addUnit" class="btn btn-primary">Save</button>
        <button @click="clearFields" class="btn btn-secondary">Clear</button>
      </div>
    </div>

    <!-- Units List -->
    <h3 class="mt-5">Units List</h3>
    <div v-for="(unit, index) in units" :key="index" class="border p-3 mb-3">
      <h5>{{ unit.name }}</h5>
      <p>{{ unit.address }}</p>
      <p>Working Hours: {{ unit.hours.from }} - {{ unit.hours.to }}</p>

      <h6>Clinics:</h6>
      <ul>
        <li v-for="(clinic, idx) in unit.clinics" :key="idx">
          {{ clinic.name }} ({{ clinic.hours.from }} - {{ clinic.hours.to }}) - Services: {{ clinic.services }}
        </li>
      </ul>

      <button @click="editUnit(index)" class="btn btn-warning btn-sm">Update</button>
      <button @click="deleteUnit(index)" class="btn btn-danger btn-sm">Delete</button>
    </div>
  </div>

  </template>
  
  <script>
  export default {
    name: "UnitManager",
    data() {
      return {
        unit: {
          name: '',
          address: '',
          hours: { from: '', to: '' },
          clinics: []
        },
        clinic: {
          name: '',
          hours: { from: '', to: '' },
          services: ''
        },
        units: [],
        editIndex: null,
        editClinicIndex: null,
        errors: {
          unit: {
            name: false,
            address: false,
            hours: false,
          },
          clinic: {
            name: false,
            hours: false,
            services: false,
          }
        }
      };
    },
    methods: {
      addClinic() {
        this.resetErrors(); 
        let hasError = false;

        if (!this.clinic.name) {
          this.errors.clinic.name = true;
          hasError = true;
        }
        if (!this.clinic.hours.from || !this.clinic.hours.to) {
          this.errors.clinic.hours = true;
          hasError = true;
        }
        if (!this.clinic.services) {
          this.errors.clinic.services = true;
          hasError = true;
        }

        if (!hasError) {
          if (this.editClinicIndex !== null) {
            this.unit.clinics[this.editClinicIndex] = { ...this.clinic };
            this.editClinicIndex = null;
          } else {
            this.unit.clinics.push({ ...this.clinic });
          }
          this.clinic = { name: '', hours: { from: '', to: '' }, services: '' };
        }
      },
      addUnit() {
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
        if (!this.unit.hours.from || !this.unit.hours.to) {
          this.errors.unit.hours = true;
          hasError = true;
        }

        if (!hasError) {
          if (this.editIndex !== null) {
            this.units[this.editIndex] = { ...this.unit };
            this.editIndex = null;
          } else {
            this.units.push({ ...this.unit });
          }
          this.clearFields();
        }
      },
      deleteClinic(index) {
        this.unit.clinics.splice(index, 1);
      },
      editClinic(index) {
        this.clinic = { ...this.unit.clinics[index] };
        this.editClinicIndex = index;
      },
      deleteUnit(index) {
        this.units.splice(index, 1);
      },
      editUnit(index) {
        this.unit = { ...this.units[index] };
        this.editIndex = index;
      },
      clearFields() {
        this.unit = { name: '', address: '', hours: { from: '', to: '' }, clinics: [] };
        this.clinic = { name: '', hours: { from: '', to: '' }, services: '' };
        this.editIndex = null;
        this.editClinicIndex = null;
        this.resetErrors();
      },
      resetErrors() {
        this.errors = {
          unit: {
            name: false,
            address: false,
            hours: false,
          },
          clinic: {
            name: false,
            hours: false,
            services: false,
          }
        };
      }
    }
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

</style>
  