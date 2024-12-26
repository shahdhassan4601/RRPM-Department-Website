<template>
    <button class="btn btn-danger" @click="handleClick">Log Out</button>
  </template>
  
  <script>
  import { useDataStore } from "../stores/dataStore";
  export default {
    name: "LogOutButton",
    setup() {
      const dataStore = useDataStore();
      return { dataStore };
    },
    methods: {
      handleClick() {
          this.dataStore.logout();
          this.$router.push("/");
      },
    },
  };
  </script>
  
  <style scoped>
  .btn-danger {
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
  }
  </style>