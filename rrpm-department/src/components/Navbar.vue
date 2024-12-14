<template>
    <header class="py-3">
      <div class="container d-flex justify-content-between align-items-center">
        <h1 class="h4 mb-0">
          <router-link to="/" class="text-decoration-none">RRPM Department</router-link>
        </h1>
        <nav>
          <ul class="nav">
            <li class="nav-item"><router-link to="/aboutus" class="nav-link">About us</router-link></li>
            <li class="nav-item"><router-link to="/units" class="nav-link">Units</router-link></li>
            <li class="nav-item"><router-link to="/activities" class="nav-link">Activities</router-link></li>
            <li class="nav-item"><router-link to="/research" class="nav-link">Scientific Research</router-link></li>
            <li class="nav-item"><router-link to="/contact" class="nav-link">Contact us</router-link></li>
          </ul>
        </nav>
        <select class="form-select form-select-sm w-auto">
          <option>English</option>
          <option>Arabic</option>
        </select>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
  /* Custom Styles */
  header {
    background-color: #023047;
    color: #8ECAE6;
  }
  
  .nav-link {
    color: #8ECAE6 !important;
  }
  </style>
  