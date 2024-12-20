<template>
  <div class="container my-5">
    <div class="d-flex align-items-center mb-4">
      <h1 class="me-3 mb-0">Scientific Research</h1>
      <router-link to="/add-research_admin"  class="btn btn-success btn-sm">Add</router-link>
    </div>
    <p class="mb-4"><strong>Highlighted Topics:</strong> 
      <span class="badge bg-secondary">Drug development</span> 
      <span class="badge bg-secondary">Diabetes</span> 
      <span class="badge bg-secondary">Rare diseases</span>
    </p>
    
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

   <!-- Display filtered research articles -->
   <div v-for="(article, index) in filteredArticles" :key="article.title" class="border-bottom pb-3 mb-3">
      <div class="d-flex justify-content-between align-items-center">
        <h5>{{ article.title }}</h5>
        <div>
          <button class="btn btn-secondary btn-sm me-2" @click="editResearch(index)">Edit</button>
          <button  class="btn btn-danger btn-sm" @click="deleteResearch(index)">Delete</button>
        </div>
      </div>
      <p class="text-muted">
        Authors: {{ article.authors.join(', ') }} | Published: {{ article.publicationDate }} | Organization: {{ article.organization }}
      </p>
      <p>{{ article.content }}</p>

       <!-- Learn More Button -->
       <router-link :to="`/SingleResearch/${article.id}`" class="btn btn-info">Learn More</router-link>


 
      
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
      researches: [], // سيتم تحميل الأبحاث من localStorage عند التهيئة
    };
  },
  created() {
    // Load researches from localStorage when the component is created
    this.loadResearches();
  },
  computed: {
    // Filter out unique authors from the research data
    uniqueAuthors() {
      const authorsSet = new Set();
      this.researches.forEach(research => {
        research.authors.forEach(author => authorsSet.add(author));
      });
      return [...authorsSet];
    },
    // Filter the articles based on search query, author, and date
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
    }
  },
  methods: {
    // Load research articles from localStorage
    loadResearches() {
      this.researches = JSON.parse(localStorage.getItem('researches')) || [];
      this.researches.forEach(research => {
        if (typeof research.authors === 'string') {
          research.authors = [research.authors.trim()];
        }
        if (!Array.isArray(research.authors)) {
          research.authors = [];
        }
      });
    },
    // Redirect to edit page with selected research data
    editResearch(index) {
      const research = this.researches[index];
      localStorage.setItem('editResearch', JSON.stringify(research)); // Store research data in localStorage
      this.$router.push(`/edit-research_admin/${index}`); // Corrected path
    },
    // Delete the selected research
    deleteResearch(index) {
      if (confirm("Are you sure you want to delete this research?")) {
        this.researches.splice(index, 1);
        localStorage.setItem('researches', JSON.stringify(this.researches)); // Update localStorage after deletion
        this.loadResearches(); // Reload the research data
      }
    }
  }
};
</script>

<style scoped>

.activity-card {
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
}

.status-badge {
  border-radius: 12px;
  font-size: 12px;
  padding: 2px 8px;
  color: #fff;
}

.status-ongoing {
  background-color: #fd9e02;
}

.status-completed {
  background-color: #126782;
}

.status-upcoming {
  background-color: #219ebc;
}
.btn-success {
  background-color: #20c997 !important; /* لون أخضر فاتح */
  border-color: #20c997 !important;
}



.btn-danger {
  background-color: #dc3545 !important;
  border-color: #dc3545 !important;
}

.btn-secondary {
  background-color: #4f678d !important; /* لون أزرق */
  border-color: #4f678d !important;
}

</style>