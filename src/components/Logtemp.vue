<template>
    <button class="btn btn-primary" @click="handleClick">Log In</button>
  </template>
  
  <script>
  export default {
    name: "LogInButton",
    methods: {
      handleClick() {
        this.$router.push("/login");
      },
    },
  };
  </script>
  
  <style scoped>
  .btn-primary {
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
  }
  </style>