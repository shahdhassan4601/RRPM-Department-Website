<template>
    <div class="container my-5">
      <h1 class="text-center mb-4">Contact us</h1>
      <div class="row">
        <div v-for="unit in units" :key="unit.title" class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ unit.title }}</h5>
              <p><strong>Address:</strong><br>{{ unit.address }}</p>
              <p><strong>Phone:</strong> {{ unit.phone }}</p>
              <p><strong>Business hours:</strong></p>
              <ul>
                <li v-for="(hours, day) in unit.hours" :key="day">
                  {{ day }}: {{ hours }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactUs",
    data() {
      return {
        units: [] // To hold fetched data
      };
    },
    mounted() {
      fetch("../../public/data/units.json")
        .then(response => response.json())
        .then(data => {
          this.units = data;
        })
        .catch(error => {
          console.error("Error fetching unit data:", error);
        });
    }
  };
  </script>
  
    
    
    