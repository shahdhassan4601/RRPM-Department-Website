<template>
    <div class="container my-5">
      <div class="d-flex align-items-center mb-4">
        <h1 class="me-3 mb-0">Medical Units</h1>
        <router-link to="/unit-admin" class="btn btn-success btn-sm">Add</router-link>
      </div>
      <div v-if="unitStore.loading">Loading units...</div>

      <div v-for="(unit) in unitStore.units" :key="unit.unit_id" :id="'unit-' + unit.unit_id" class="card mb-4">
        <div class="card-body">
          <h5>{{ unit.name }}</h5>
          <p>Address: {{ unit.address }}</p>
          <p>Working Hours: {{ unit.working_hours_start }} - {{ unit.working_hours_end }}</p>
  
          <h6>Clinics:</h6>
          <ul>
            <li v-for="clinic in unit.clinics" :key="clinic.clinic_id">
              {{ clinic.clinic_name }} ({{ clinic.working_hours_start }} - {{ clinic.working_hours_end }})
            </li>
          </ul>
  
          <h6>Unit activities:</h6>
          <ul>
            <li v-for="activity in unit.activities" :key="activity.activity_id">
              <router-link :to="{ name: 'SingleActivity', params: { id: activity.activity_id } }">
                {{ activity.title }}
              </router-link>
            </li>
          </ul> 
  
          <h6>Contact Information:</h6>
          <p>
            <strong>Mobile Number:</strong> {{ unit.phone_number }}
          </p>
          <button @click="editUnit(unit.id)" class="btn btn-secondary btn-sm me-2">Edit</button>
          <button @click="deleteUnit(unit.id)" class="btn btn-danger btn-sm">Delete</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
//   import { units } from '../utils/dataUtil';
  import { useDataStore } from '../stores/dataStore';

  export default {
    name: "Units",

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
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    methods: {
      deleteUnit(index) {
        if (confirm("Are you sure you want to delete this unit?")) {
          this.unitStore.deleteUnit(index);

        }
      },
      editUnit(index) {
        const unitToEdit = this.unitStore.units[index];
        this.$router.push(`/unit-admin/${unitToEdit.id}`); // Navigate to the edit page
      }
    }
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
  </style>
