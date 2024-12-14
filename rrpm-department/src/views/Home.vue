<template>
    <div id="home">
      <Header />
  
      <!-- Hero Section -->
      <section class="py-5 text-center bg-light">
        <div class="container">
          <h2 class="display-5">RRPM department</h2>
          <p class="lead">Aliquip fugiat ipsum nostrud ex et eu incididunt quis minim dolore exceptuer voluptate</p>
          <img src="https://via.placeholder.com/150x100" alt="Hero Image" class="img-fluid mt-3">
        </div>
      </section>
  
      <!-- Featured Medical Units -->
      <section class="py-5">
        <div class="container">
          <h3 class="mb-4">Featured medical units</h3>
          <div class="row text-center g-4">
            <div class="col-md-4" v-for="unit in units" :key="unit.id">
              <div class="unit-card p-4">
                <img :src="unit.image" :alt="unit.name" class="img-fluid mb-3">
                <h5>{{ unit.name }}</h5>
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
            <div class="col-md-6" v-for="activity in activities" :key="activity.id">
              <div class="activity-card p-4">
                <h5>{{ activity.title }}</h5>
                <p>Date: {{ activity.date }}</p>
                <p>{{ activity.description }}</p>
                <button class="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Read Latest Scientific Insights -->
      <section class="py-5">
        <div class="container">
          <h3 class="mb-4">Read Latest Scientific Insights</h3>
          <p class="mb-5">Discover groundbreaking research and advancements in medical science.</p>
          <div class="row g-4">
            <div class="col-md-4" v-for="insight in insights" :key="insight.id">
              <div class="insight-card p-4 text-center">
                <img :src="insight.image" :alt="insight.title" class="img-fluid mb-3">
                <h6>{{ insight.title }}</h6>
                <p>{{ insight.date }}</p>
              </div>
            </div>
          </div>
          <div class="text-center mt-4">
            <button class="btn btn-primary">Explore More</button>
          </div>
        </div>
      </section>
  
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    name: 'Home',
    components: {
      Header,
      Footer
    },
    data() {
      return {
        units: [
          { id: 1, name: 'Unit 1', image: 'https://via.placeholder.com/100' },
          { id: 2, name: 'Unit 2', image: 'https://via.placeholder.com/100' },
          { id: 3, name: 'Unit 3', image: 'https://via.placeholder.com/100' }
        ],
        activities: [
          { id: 1, title: 'Annual medical conference', date: 'August 15, 2025', description: 'Join us for our annual conference featuring leading experts in various medical fields.' },
          { id: 2, title: 'Community health fair', date: 'August 15, 2025', description: 'Join us for our community health fair with leading experts in various medical fields.' }
        ],
        insights: [
          { id: 1, title: 'Anim sint Lorem exceptur commodo', date: 'Oct 10, 2022', image: 'https://via.placeholder.com/100' },
          { id: 2, title: 'Adipiscing elit proident in elit magna deser', date: 'Oct 12, 2022', image: 'https://via.placeholder.com/100' },
          { id: 3, title: 'Lorem Ipsum Placeholder', date: 'Oct 15, 2022', image: 'https://via.placeholder.com/100' }
        ]
      };
    }
  };
  </script>
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  