<template>
  <div>
    <!-- About Us Content -->
    <main class="py-5">
      <div class="container">
        <h2 class="text-center section-heading">About Us</h2>
        <div class="row align-items-center">
          <div class="col-md-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et dolor sit amet est feugiat tempor. Ut sit amet orci quam. Fusce elementum consectetur eros.
            </p>
            <p>
              Our department specializes in providing top-notch medical services and research opportunities. We are dedicated to improving community health and advancing the field of medicine.
            </p>
          </div>
          <div class="col-md-6">
            <img src="https://via.placeholder.com/500x300" alt="About Us Image" class="about-image">
          </div>
        </div>

        <!-- Vision and Mission Section -->
        <div class="row mt-5">
          <div class="col-md-6 text-center">
            <h3 class="mb-3">Our Vision</h3>
            <img src="https://via.placeholder.com/300x200" alt="Vision Image" class="about-image mb-3">
            <p>
              To become a leading department in research and education, fostering innovation and excellence across all fields.
            </p>
          </div>
          <div class="col-md-6 text-center">
            <h3 class="mb-3">Our Mission</h3>
            <img src="https://via.placeholder.com/300x200" alt="Mission Image" class="about-image mb-3">
            <p>
              Our mission is to empower individuals and communities through knowledge, research, and active collaboration.
            </p>
          </div>
        </div>
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
.about-image {
  max-width: 100%;
  height: auto;
}
.section-heading {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
</style>
