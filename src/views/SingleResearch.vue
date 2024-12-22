<template>
    <div>
      <h1>Research Details</h1>
      <p>Showing details for research ID: {{ researchId }}</p>
      <!-- Fetch and display detailed research info here -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'SingleResearch',
    data() {
      return {
        researchId: this.$route.params.id, // Get the research ID from the URL
      };
    },
    created() {
      // Fetch the research details using the researchId
    },
  };
  </script>
  