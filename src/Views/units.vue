<template>
    <div class="container my-5">
    <h1 class="mb-4">Medical Units</h1>
    
    <!-- تكرار الوحدات باستخدام Vue -->
    <div v-for="(unit, index) in units" :key="index" class="card mb-4">
      <div class="card-body">
        <h5 class="card-title">{{ unit.name }}</h5>
        <p><strong>Clinics:</strong></p>
        
        <!-- تكرار العيادات -->
        <div class="row mb-3">
          <div class="col-md-6" v-for="(clinic, index) in unit.clinics" :key="index">
            <div class="border p-3">
              <h6>{{ clinic.name }}</h6>
              <p>Hours: {{ clinic.hours }}</p>
              <p>Services: {{ clinic.services }}</p>
            </div>
          </div>
        </div>
        
        <p><strong>Unit activities:</strong></p>
        <div class="d-flex mb-3">
          <span v-for="(activity, index) in unit.activities" :key="index" class="border px-3 py-2 me-2">{{ activity }}</span>
        </div>
        
        <p><strong>Contact Information:</strong></p>
        <p>
          📞 {{ unit.contact.phone }}<br>
          📍 {{ unit.contact.location }}
        </p>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "Units",
data() {
      return {
        units: [
          {
            name: 'Unit 1 name',
            clinics: [
              { name: 'General practice', hours: '9:00 AM - 5:00 PM', services: 'Check-ups, Vaccinations' },
              { name: 'Pediatric care', hours: '9:00 AM - 5:00 PM', services: 'Immunizations, Check-ups' }
            ],
            activities: ['activity 1 name', 'activity 2', 'activity 3'],
            contact: { phone: '+1 (555) 123-4567', location: '123 Main St, Springfield' }
          },
          {
            name: 'Unit 2 name',
            clinics: [
              { name: 'Dental Care', hours: '9:00 AM - 6:00 PM', services: 'Teeth Cleaning, Fillings' },
              { name: 'Eye Care', hours: '10:00 AM - 4:00 PM', services: 'Eye Exams, Glasses Prescription' }
            ],
            activities: ['activity 1 name', 'activity 2', 'activity 3'],
            contact: { phone: '+1 (555) 765-4321', location: '456 Elm St, Metropolis' }
          }
        ]
      };
    }}
  
</script>