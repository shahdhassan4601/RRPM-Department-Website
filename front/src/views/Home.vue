<template>
    <div id="home">
      <!-- Hero Section with Title and Description -->
      <section class="hero-section position-relative">
        <div class="hero-overlay">
          <div class="container text-center text-white position-relative z-index-2">
            <h1 class="display-4">Welcome to Our Medical Units</h1>
            <p class="lead">Explore our featured medical units, activities, and the latest scientific insights that drive healthcare innovation.</p>
          </div>
        </div>
        <img src="https://via.placeholder.com/1600x600" alt="Hero Image" class="img-fluid hero-image">
      </section>
  
      <!-- Featured Medical Units -->
      <section class="py-5 bg-light">
        <div class="container">
          <h3 class="mb-4 text-center">Featured Medical Units</h3>
          <div class="row text-center g-4">
            <div class="col-md-4" v-for="unit in units" :key="unit.id" @mouseover="hover = unit.unit_id" @mouseleave="hover = null">
              <div class="unit-card shadow-lg rounded" :class="{'scale-up': hover === unit.unit_id}">
                <img :src="'https://via.placeholder.com/350x200'" :alt="unit.name" class="img-fluid mb-3">
                <div class="unit-card-body">
                  <h5>{{ unit.name }}</h5>
                  <p class="unit-description">{{ unit.description ? unit.description.substring(0, 100) + '...' : 'No description available' }}</p>
                  <router-link :to="'/units#unit-' + unit.id" class="btn btn-primary mb-5">Explore</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Latest Activities -->
      <section class="py-5 bg-light" id="activities">
        <div class="container">
          <h3 class="mb-4 text-center">Latest Activities</h3>
          <div class="row g-4">
            <div class="col-md-4" v-for="activity in activities" :key="activity.id">
              <div class="card shadow-sm border-0 rounded">
                <img :src="'https://via.placeholder.com/350x200'" :alt="activity.title" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">{{ activity.title }}</h5>
                  <p class="card-text">{{ activity.description ? activity.description.substring(0, 100) + '...' : 'No description available' }}</p>
                  <p class="text-muted">Date: {{ activity.date_start }}</p>
                  <router-link :to="{ name: 'SingleActivity', params: { id: activity.id } }" class="btn btn-primary">Explore</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-4">
            <router-link to="/activities" class="btn btn-secondary">Explore More</router-link>
          </div>
        </div>
      </section>
  
      <!-- Image Separator -->
      <section class="image-separator">
        <img src="https://via.placeholder.com/1600x400" alt="Separator Image" class="img-fluid w-100">
      </section>
  
      <!-- Read Latest Scientific Insights -->
      <section class="py-5" id="researches">
        <div class="container">
          <h3 class="mb-4 text-center">Read Latest Scientific Insights</h3>
          <p class="mb-5 text-center">Discover groundbreaking research and advancements in medical science.</p>
          <div class="grid-container">
            <div class="grid-item" v-for="insight in insights" :key="insight.id">
              <div class="insight-card shadow-lg rounded">
                <img :src="insight.image || 'https://via.placeholder.com/200x200'" :alt="insight.title" class="img-fluid rounded-circle mb-3">
                <div class="insight-details">
                  <h5 class="text-center">{{ insight.title }}</h5>
                  <p class="text-muted text-center">{{ insight.publicationDate }}</p>
                  <router-link :to="{ name: 'SingleResearch', params: { id: insight.id } }" class="btn btn-outline-primary w-100">Explore</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-4">
            <router-link to="/research" class="btn btn-secondary">Explore More</router-link>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import { useDataStore } from '../stores/dataStore';
  export default {
    name: 'Home',
    data() {
      return {
        units: [],
        activities: [],
        insights: [],
        hover: null
      };
    },
    setup() {
        const dataStore = useDataStore();
        return { dataStore };
    },
    created() {
      this.units = this.dataStore.units;
      this.activities = this.dataStore.activities;
      this.insights = this.dataStore.research;
    }
  };
  </script>
  
  <style scoped>
  /* Hero Section Styles */
  .hero-section {
    position: relative;
  }
  
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    z-index: 1;
  }
  
  .hero-section h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-top: 50px;
  }
  
  .hero-section .lead {
    font-size: 1.25rem;
    margin-top: 1rem;
  }
  
  .hero-image {
    opacity: 0.6; /* Reduced opacity */
    object-fit: cover;
    height: 600px;
  }
  
  /* Separator Image */
  .image-separator img {
    height: 400px;
    object-fit: cover;
  }
  
  /* Research Grid Layout */
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
/* Research Section: Insights Container */
.insights-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center; /* Center align the cards */
}

.insight-card {
  flex: 0 1 300px; /* Fixed width for consistent card sizes */
  max-width: 300px;
  background-color: #fff;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.insight-card:hover {
  transform: scale(1.05); /* Slight scaling effect on hover */
}

.insight-card img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin: 0 auto;
}

.insight-details h5 {
  margin: 1rem 0 0.5rem;
}

.insight-details p {
  font-size: 0.9rem;
  color: #666;
}

.btn-outline-primary {
  margin-top: 1rem;
}

  /* General Section Styling */
  section.py-5 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  .btn-secondary {
  background-color: #126782;
}
  .text-center {
    text-align: center;
  }
  </style>
  