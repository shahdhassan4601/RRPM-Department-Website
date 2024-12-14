<template>
 <div class="container my-5">
    <h1 class="mb-4">Scientific Research</h1>
    <p class="mb-4"><strong>Highlighted Topics:</strong> 
      <span class="badge bg-secondary">Drug development</span> 
      <span class="badge bg-secondary">Diabetes</span> 
      <span class="badge bg-secondary">Rare diseases</span>
    </p>
    
    <!-- Search and Filters -->
    <div class="row mb-4">
      <div class="col-md-6">
        <input type="text" class="form-control" v-model="searchQuery" placeholder="Search...">
      </div>
      <div class="col-md-3">
        <select class="form-select" v-model="selectedAuthor">
          <option value="">Filter by Author</option>
          <option v-for="author in uniqueAuthors" :key="author" :value="author">{{ author }}</option>
        </select>
      </div>
      <div class="col-md-3">
        <select class="form-select" v-model="selectedDate">
          <option value="">Filter by Date</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>
    </div>

    <!-- Articles -->
    <div v-for="article in filteredArticles" :key="article.title" class="border-bottom pb-3 mb-3">
      <h5>{{ article.title }}</h5>
      <p class="text-muted">
        Authors: {{ article.authors.join(', ') }} | Published: {{ article.publicationDate }} | Organization: {{ article.organization }}
      </p>
      <p>{{ article.content }}</p>
    </div>

  </div>

</template>

<script>

export default {
    name: "Research",
    data() {
      return {
        searchQuery: '',
        selectedAuthor: '',
        selectedDate: '',
        researches: JSON.parse(localStorage.getItem('researches')) || []  // Fetch researches from localStorage
      };
    },
    computed: {
      uniqueAuthors() {
        const authorsSet = new Set();
        this.researches.forEach(research => {
          research.authors.forEach(author => authorsSet.add(author));
        });
        return [...authorsSet];
      },
      filteredArticles() {
        return this.researches.filter(research => {
          const matchesSearch = research.title.toLowerCase().includes(this.searchQuery.toLowerCase());
          const matchesAuthor = this.selectedAuthor ? research.authors.includes(this.selectedAuthor) : true;
          let matchesDate = true;
          if (this.selectedDate === 'Newest') {
            matchesDate = new Date(research.publicationDate) >= new Date();
          } else if (this.selectedDate === 'Oldest') {
            matchesDate = new Date(research.publicationDate) <= new Date();
          }
          return matchesSearch && matchesAuthor && matchesDate;
        });
      },
    }
  };

</script>