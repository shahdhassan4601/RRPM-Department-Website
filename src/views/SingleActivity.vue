<template>
    <div>
      <h1>Activity Detail</h1>
      <p>Activity ID: {{ activityId }}</p>
      <!-- Use this ID to fetch the actual data for the activity, if needed -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'SingleActivity',
    data() {
      return {
        activityId: this.$route.params.id, // Get the activity ID from the route params
      };
    },
    // You can use this ID to fetch activity details if needed
  };
  </script>
  