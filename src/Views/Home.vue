<template>
    <div id="home">
      <!-- Hero Section -->
      <section class="py-5 text-center bg-light">
        <div class="container">
          <p class="lead">Aliquip fugiat ipsum nostrud ex et eu incididunt quis minim dolore exceptuer voluptate</p>
          <img src="https://via.placeholder.com/150x100" alt="Hero Image" class="img-fluid mt-3">
        </div>
      </section>
  
      <!-- Featured Medical Units -->
      <section class="py-5">
        <div class="container">
          <h3 class="mb-4">Featured medical units</h3>
          <div class="row text-center g-4">
            <div class="col-md-4" v-for="unit in units" :key="unit.unit_id">
              <div class="unit-card p-4">
                <img :src="unit.image || 'https://via.placeholder.com/100'" :alt="unit.name" class="img-fluid mb-3">
                <!-- Update router-link to no longer appear as a link -->
                <router-link :to="'/units#unit-' + unit.unit_id" class="unit-name">
                  <h5>{{ unit.name }}</h5>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Latest Activities -->
      <section class="py-5 bg-light">
        <div class="container">
          <h3 class="mb-4">Latest activities</h3>
          <div class="row g-4">
            <div class="col-md-6" v-for="activity in activities" :key="activity.activity_id">
              <div class="activity-card p-4">
                <h5>{{ activity.title }}</h5>
                <p>Date: {{ activity.date_start }}</p>
                <p>{{ activity.description }}</p>
                <!-- Explore Button for Individual Activities -->
                <router-link :to="{ name: 'SingleActivity', params: { id: activity.activity_id } }" class="btn btn-primary">
                  Explore
                </router-link>
              </div>
            </div>
          </div>
  
          <!-- Explore More Button for All Activities -->
          <div class="text-center mt-4">
            <router-link to="/activities" class="btn btn-secondary">
              Explore More
            </router-link>
          </div>
        </div>
      </section>
  
      <!-- Read Latest Scientific Insights -->
      <section class="py-5">
        <div class="container">
          <h3 class="mb-4">Read Latest Scientific Insights</h3>
          <p class="mb-5">Discover groundbreaking research and advancements in medical science.</p>
          <div class="row g-4">
            <div class="col-md-4" v-for="insight in insights" :key="insight.SR_id">
              <div class="insight-card p-4 text-center">
                <img :src="insight.image || 'https://via.placeholder.com/100'" :alt="insight.title" class="img-fluid mb-3">
                <h6>{{ insight.title }}</h6>
                <p>{{ insight.publishing_date }}</p>
                <!-- Add Explore link for individual research -->
                <router-link :to="{ name: 'SingleResearch', params: { id: insight.SR_id } }" class="btn btn-primary">
                  Explore
                </router-link>
              </div>
            </div>
          </div>
  
          <!-- "Explore More" Button that takes you to /researches -->
          <div class="text-center mt-4">
            <router-link to="/research" class="btn btn-secondary">
              Explore More
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import Header from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  import { units, activities, scientificResearch } from '../utils/dataUtil';
  
  export default {
    name: 'Home',
    components: {
      Header,
      Footer
    },
    data() {
      return {
        units: [],
        activities: [],
        insights: []
      };
    },
    created() {
      this.units = units;
      this.activities = activities;
      this.insights = scientificResearch;
    }
  };
  </script>
  
  <style scoped>
  /* Remove link styling for unit names */
  .unit-name {
    text-decoration: none; /* Remove underline */
    color: inherit; /* Inherit color from parent */
  }
  
  </style>
  