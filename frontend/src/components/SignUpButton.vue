<template>
    <button class="btn btn-secondary" @click="handleClick">Sign Up</button>
  </template>
  
  <script>
  export default {
    name: "SignUpButton",
    methods: {
      handleClick() {
        this.$router.push("/signup");
      },
    },
  };
  </script>
  
  <style scoped>
  .btn-secondary {
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
  }
  </style>