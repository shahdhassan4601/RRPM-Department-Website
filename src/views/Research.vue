<template>
    <div>
      <h1>All Researches</h1>
      <div v-for="research in researches" :key="research.id">
        <router-link :to="{ name: 'SingleResearch', params: { id: research.id } }">
          <h3>{{ research.title }}</h3>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Research',
    data() {
      return {
        researches: [
          { id: 1, title: 'Research 1' },
          { id: 2, title: 'Research 2' },
          { id: 3, title: 'Research 3' },
        ],
      };
    },
  };
  </script>
  