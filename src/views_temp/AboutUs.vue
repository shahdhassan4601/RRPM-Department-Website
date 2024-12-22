<template>
    <div>
      <!-- About Us Content -->
      <main class="py-5">
        <div class="container">
          <!-- About Us Heading -->
          <section class="text-center mb-5">
            <h2 class="section-heading">About Us</h2>
            <p class="section-subheading">
              Discover our dedication to medical excellence, research, and community service.
            </p>
          </section>
  
          <!-- About Us Details -->
          <section class="about-section">
            <div class="row align-items-center">
              <div class="col-md-6 about-text">
                <h3>Who We Are</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et dolor sit amet est feugiat tempor. Ut sit amet orci quam. Fusce elementum consectetur eros.
                </p>
                <p>
                  Our department specializes in providing top-notch medical services and research opportunities. We are dedicated to improving community health and advancing the field of medicine.
                </p>
              </div>
              <div class="col-md-6">
                <img src="https://via.placeholder.com/500x300" alt="About Us Image" class="about-image rounded shadow">
              </div>
            </div>
          </section>
  
          <!-- Separator -->
          <hr class="my-5 separator" />
  
          <!-- Vision and Mission Section -->
          <section class="vision-mission-section">
            <div class="row text-center">
              <div class="col-md-6">
                <h3 class="section-heading">Our Vision</h3>
                <img src="https://via.placeholder.com/300x200" alt="Vision Image" class="about-image rounded mb-3">
                <p>
                  To become a leading department in research and education, fostering innovation and excellence across all fields.
                </p>
              </div>
              <div class="col-md-6">
                <h3 class="section-heading">Our Mission</h3>
                <img src="https://via.placeholder.com/300x200" alt="Mission Image" class="about-image rounded mb-3">
                <p>
                  Our mission is to empower individuals and communities through knowledge, research, and active collaboration.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutUs",
  };
  </script>
  
  <style scoped>
  /* General Styles */
  .section-heading {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  
  .section-subheading {
    font-size: 1.2rem;
    color: #6c757d;
    margin-bottom: 2rem;
  }
  
  .about-text h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #343a40;
  }
  
  /* Image Styles */
  .about-image {
    max-width: 100%;
    height: auto;
  }
  
  .about-image.rounded {
    border-radius: 10px;
  }
  
  .about-image.rounded-circle {
    border-radius: 50%;
  }
  
  .about-image.shadow {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  /* Separator */
  .separator {
    border: 0;
    height: 2px;
    background: #e9ecef;
  }
  
  /* Responsiveness */
  @media (max-width: 768px) {
    .about-text {
      text-align: center;
    }
  }
  </style>
  